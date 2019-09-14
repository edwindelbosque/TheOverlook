import User from './User';
import Booking from './Booking';
import RoomService from './RoomService';
import DOMupdates from './DOMupdates';

class Hotel {
  constructor(userData, bookingData, roomServiceData, roomData) {
    this.booking = new Booking(bookingData, roomData);
    this.roomService = new RoomService(roomServiceData);
    this.user = new User(userData);
  }

  getTotalDailyRevenue(date) {
    let overallRevenue = (this.roomService.getRoomServiceRevenue(date)
      + this.booking.getBookingRevenue(date))
      .toLocaleString();
    DOMupdates.displayOverallRevenue(overallRevenue);
    return overallRevenue;
  }
}

export default Hotel;