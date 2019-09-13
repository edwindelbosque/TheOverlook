import DOMupdates from "./DOMupdates";

class Booking {
  constructor(bookings, rooms) {
    this.bookings = bookings;
    this.rooms = rooms;
  }

  findRoomsAvailable(date) {
    let percentage = `${this.bookings.filter(booking => booking.date === date).length * 2}%`;
    DOMupdates.displayRoomsAvailable(percentage);
    return percentage;
  }

  getBookingRevenue(date) {
    let bookedToday = this.bookings.filter(booking => booking.date === date)
    let dailyRevenue = bookedToday.reduce((acc, book) => {
      acc += this.rooms.find(room => room.number === book.roomNumber).costPerNight;
      return acc;
    }, 0);
    return Math.round(dailyRevenue);
  }
}

export default Booking;