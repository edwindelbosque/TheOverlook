import DOMupdates from './DOMupdates';

class RoomService {
  constructor(roomServiceData) {
    this.roomServiceData = roomServiceData;
  }

  getRoomServiceRevenue(date) {
    let dailyLogs = this.roomServiceData.filter(log => log.date === date);
    let totalRevenue = dailyLogs.reduce((acc, service) => {
      acc += service.totalCost;
      return acc;
    }, 0)
    return Math.round(totalRevenue);
  }

  getDailyServices(date) {
    DOMupdates.displayResetOrders()
    let servicesToday = this.roomServiceData.filter(log => log.date === date)
      .map(service => service.food);
    servicesToday.forEach(order => {
      DOMupdates.displayOrdersToday(order);
    })
    return servicesToday;
  }
}

export default RoomService;