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
    DOMupdates.displayOrderRevenue(Math.round(totalRevenue))
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
    const servicesToday = this.roomServiceData.filter(log => log.date === date);
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
    DOMupdates.displayUserOrderSpenditure(Math.round(amount));
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

  findOrderSpenditures(id, date) {
    const filteredLogs = this.roomServiceData.filter(log => log.userID === id);
    const searchedLogs = filteredLogs.filter(log => log.date === date);
    const totalSpenditure = searchedLogs.reduce((acc, log) => {
      acc += log.totalCost;
      return acc;
    }, 0);
    DOMupdates.displaySearchOrder(totalSpenditure);
  }

  findRoomServiceOptions() {
    return this.roomServiceData.reduce((acc, food) => {
      if (!acc.includes(food.food)) {
        acc.push(food.food);
      }
      return acc;
    }, []).forEach(food => DOMupdates.displayFoodItems(food));
  }

  findFoodPrice(foodChoice) {
    const selectedFood = this.roomServiceData
      .find(service => service.food === foodChoice);
    return selectedFood.totalCost;
  }

  createOrder(id, foodChoice, currentDate) {
    const selectedFood = this.roomServiceData
      .find(food => food.food === foodChoice);
    const foodOrder = {
      userID: id,
      date: currentDate,
      food: foodChoice,
      totalCost: selectedFood.totalCost
    }
    this.roomServiceData.push(foodOrder);
  }
}

export default RoomService;