import User from './User';
import Booking from './Booking';
import RoomService from './RoomService';
import DOMupdates from './DOMupdates';

class Hotel {
  constructor(userData, bookingData, roomServiceData, roomData) {
    this.booking = new Booking(bookingData, roomData);
    this.user = new User(userData);
    this.roomService = new RoomService(roomServiceData);
  }

  getTotalDailyRevenue(date) {
    let overallRevenue = (this.roomService.getRoomServiceRevenue(date)
      + this.booking.getBookingRevenue(date))
      .toLocaleString();
    DOMupdates.displayOverallRevenue(overallRevenue);
    return overallRevenue;
  }

  toggleCustomizedOrders() {
    if (this.user.id !== undefined) {
      this.roomService.findTotalSpent(this.user.id);
      this.roomService.getOrderHistory(this.user.id);
      this.booking.findBookingHistory(this.user.id);
      DOMupdates.displayPersonalizedSections();
    } else {
      DOMupdates.displayGeneralSections()
    }
  }

  goToGeneralView() {
    this.user.name = undefined;
    this.user.id = undefined;
    DOMupdates.displayUserReset()
    DOMupdates.displayGeneralSections()
  }

  searchOrders(date) {
    this.roomService.findOrderSpenditures(this.user.id, date);
  }
}

export default Hotel;