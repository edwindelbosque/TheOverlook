import $ from 'jquery';

const DOMupdates = {
  displayRoomsAvailable(roomsAvailable) {
    $('#rooms-available').text(roomsAvailable);
  },

  displayOverallRevenue(overallRevenue) {
    $('#overall-revenue').text(overallRevenue);
  },

  displayUser(name) {
    $('#current-user').text(name);
  },

  displayUserReset() {
    $('#current-user').text('Global View');
  },

  displayUserNotFound() {
    $('#user-not-found').text('User not found');
    setTimeout(() => $('#user-not-found').text(''), 3000);
  },

  displayUserAlreadySelected() {
    $('#user-not-found').text('User already selected');
    setTimeout(() => $('#user-not-found').text(''), 3000);
  },

  displayUserAlreadyExists() {
    $('#user-already-exists').text('User already on file')
    setTimeout(() => $('#user-already-exists').text(''), 3000);
  },

  displayEnterFullName() {
    $('#user-already-exists').text('Enter full name')
    setTimeout(() => $('#user-already-exists').text(''), 3000);
  },

  displayOrdersToday(order) {
    $(`<li>${order}</li>`).appendTo('#orders-today');
  },

  displayResetOrders() {
    $('#orders-today').empty();
  },

  displaySearchedOrders(order) {
    $(`<li>${order}</li>`).appendTo('#orders-results');
  },

  displayResultsHeader(number) {
    number > 0
      ? $('#results-title').text(`${number} Results Found`)
      : $('#results-title').text('No results found')
  },

  displayResetResults() {
    $('#orders-results').empty();
  },

  displayUserOrderSpenditure(amount) {
    $('#total-orders-amount').text(amount);
  }

}

export default DOMupdates;