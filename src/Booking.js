import DOMupdates from './DOMupdates';

class Booking {
  constructor(bookingData, roomData) {
    this.bookingData = bookingData;
    this.roomData = roomData;
  }

  findRoomsAvailable(date) {
    let percentage = `${this.bookingData
      .filter(booking => booking.date === date).length * 2}%`;
    DOMupdates.displayRoomsAvailable(percentage);
    return percentage;
  }

  getBookingRevenue(date) {
    let bookedToday = this.bookingData.filter(booking => booking.date === date)
    let dailyRevenue = bookedToday.reduce((acc, book) => {
      acc += this.roomData
        .find(room => room.number === book.roomNumber).costPerNight;
      return acc;
    }, 0);
    return Math.round(dailyRevenue);
  }

  sortBookingDates() {
    return this.bookingData.sort((a, b) => ('' + a.date).localeCompare(b.date));
  }

  findBookingsPerDate() {
    let bookingsPerDate = this.sortBookingDates().reduce((acc, booking) => {
      if (!acc[booking.date]) {
        acc[booking.date] = [];
      }
      acc[booking.date].push(booking);
      return acc;
    }, [])
    return bookingsPerDate;
  }

  getArrayOfDates() {
    return this.sortBookingDates().reduce((acc, booking) => {
      if (!acc.includes(booking.date)) {
        acc.push(booking.date);
      }
      return acc;
    }, []);
  }

  sliceFutureDates(date) {
    let todayIndex = this.getArrayOfDates().indexOf(date);
    let todayAndOn = this.getArrayOfDates().slice(todayIndex);

    let bookingsFiltered = todayAndOn.map(day => {
      return {
        date: day,
        bookings: this.findBookingsPerDate()[day]
      }
    })
    return bookingsFiltered;
  }

  findPopularDates(date) {
    this.sliceFutureDates(date)
      .sort((a, b) => b.bookings.length - a.bookings.length)
      .slice(0, 5)
      .sort((a, b) => ('' + a.date).localeCompare(b.date))
      .forEach(day => DOMupdates.displayPopularDates(day));
  }

  findUnpopularDates(date) {
    this.sliceFutureDates(date)
      .sort((a, b) => a.bookings.length - b.bookings.length)
      .slice(0, 5)
      .sort((a, b) => ('' + a.date).localeCompare(b.date))
      .forEach(day => DOMupdates.displayUnpopularDates(day));
  }

  findAvailableRoomNumbers(date) {
    let availableRoomNumbers = this.roomData.map(room => room.number)
    let occupiedRoomNumbers = this.bookingData
      .filter(booking => booking.date === date)
      .map(booking => booking.roomNumber);
    occupiedRoomNumbers.forEach(roomNumber => {
      let index = availableRoomNumbers.indexOf(roomNumber);
      availableRoomNumbers.splice(index, 1);
    })
    return availableRoomNumbers;
  }

  findAvailableRooms(date) {
    const availableRoomNumbers = this.findAvailableRoomNumbers(date);
    let roomsAvailable = this.roomData.reduce((acc, room) => {
      availableRoomNumbers.forEach(roomNumber => {
        if (roomNumber === room.number) {
          acc.push(room);
        }
      })
      return acc;
    }, [])
    roomsAvailable.forEach(room => DOMupdates.displayBookingResults(room))
  }
}

export default Booking;