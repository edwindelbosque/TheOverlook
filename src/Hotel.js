import DOMupdates from "./DOMupdates";

class Hotel {
  constructor(userData, bookingData, roomServiceData, roomData) {
    this.userData = userData;
    this.bookingData = bookingData;
    this.roomServiceData = roomServiceData;
    this.roomData = roomData;
  }

  getBookingRevenue(date) {
    let bookedToday = this.bookingData.filter(booking => booking.date === date)
    let dailyRevenue = bookedToday.reduce((acc, book) => {
      acc += this.roomData.find(room => room.number === book.roomNumber).costPerNight;
      return acc;
    }, 0);
    return Math.round(dailyRevenue);
  }

  getRoomServiceRevenue(date) {
    let dailyLogs = this.roomServiceData.filter(log => log.date === date);
    let totalRevenue = dailyLogs.reduce((acc, service) => {
      acc += service.totalCost;
      return acc;
    }, 0)
    return Math.round(totalRevenue);
  }

  getTotalDailyRevenue(date) {
    let overallRevenue = this.getRoomServiceRevenue(date) + this.getBookingRevenue(date);
    DOMupdates.displayOverallRevenue(overallRevenue);
    return overallRevenue;
  }
}

export default Hotel;