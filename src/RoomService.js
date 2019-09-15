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

  searchOrders(date) {
    let servicesToday = this.roomServiceData.filter(log => log.date === date)
      .map(service => service.food);
    DOMupdates.displayResetResults();
    DOMupdates.displayResultsHeader(servicesToday.length);
    servicesToday.forEach(order => {
      DOMupdates.displaySearchedOrders(order);
    })
  }

  findTotalSpent(id) {
    const filteredLogs = this.roomServiceData.filter(log => log.userID === id);
    const amount = filteredLogs.reduce((acc, log) => {
      acc += log.totalCost;
      return acc;
    }, 0)
    DOMupdates.displayUserOrderSpenditure(amount);
  }

  getOrderHistory(id) {
    DOMupdates.displayResetOrderHistory()
    const filteredLogs = this.roomServiceData.filter(log => log.userID === id);
    let orders = filteredLogs.map(log => {
      return { date: log.date, totalCost: log.totalCost };
    })
    orders.length > 0
      ? orders.forEach(order => DOMupdates.displayOrderHistory(order))
      : DOMupdates.displayNoOrderHistory()
  }
}

export default RoomService;