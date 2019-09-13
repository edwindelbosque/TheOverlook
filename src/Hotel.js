import DOMupdates from './DOMupdates';
import RoomService from './RoomService';
import Booking from './Booking';

class Hotel {
  constructor(userData, bookingData, roomServiceData, roomData) {
    this.userData = userData;
    this.bookingData = bookingData;
    this.roomServiceData = roomServiceData;
    this.roomData = roomData;
    this.booking = new Booking(bookingData, roomData);
    this.roomService = new RoomService(roomServiceData);
  }

  getTotalDailyRevenue(date) {
    let overallRevenue = (this.roomService.getRoomServiceRevenue(date) + this.booking.getBookingRevenue(date)).toLocaleString();
    DOMupdates.displayOverallRevenue(overallRevenue);
    return overallRevenue;
  }
}

export default Hotel;