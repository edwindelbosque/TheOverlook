import DOMupdates from "./DOMupdates";

class Booking {
  constructor(bookings, rooms) {
    this.bookings = bookings;
    this.rooms = rooms;
  }

  findRoomsAvailable(date) {
    return `${this.bookings.filter(booking => booking.date === date).length * 2}%`;
  }
}

export default Booking;