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
}

export default RoomService;