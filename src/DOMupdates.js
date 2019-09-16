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
    $('#current-user').text('General View');
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

  displayOrderRevenue(amount) {
    $('#order-today-revenue').text(`Today's revenue: $${amount}`);
  },

  displayResetOrders() {
    $('#orders-today').empty();
  },

  displaySearchedOrders(order) {
    $(`<li>${order.food} - $${order.totalCost}</li>`)
      .appendTo('#orders-results');
  },

  displayResetBookingHistory() {
    $('#booking-history').empty();
  },

  displayResultsHeader(number) {
    number > 0
      ? $('#results-title').text(`${number} Results Found`)
      : $('#results-title').text('No results found')
  },

  displayResetResults() {
    $('#orders-results').empty();
  },

  displayBookingHistory(booking) {
    $(`
    <li>
    - ${booking.date} 
    - ${booking.room.roomType} 
    - ${booking.room.costPerNight}
    </li>
    `).appendTo('#booking-history');
  },

  displayNoBookingHistory() {
    $(`<li>This user has no booking history...</li>`)
      .appendTo('#booking-history');
  },

  displayUserOrderSpenditure(amount) {
    $('#total-orders-amount').text(amount);
  },

  displayOrderHistory(order) {
    $(`<li>${order.date} - $${order.totalCost}</li>`)
      .appendTo('#order-history-list');
  },

  displayNoOrderHistory() {
    $('<li>No order history</li>')
      .appendTo('#order-history-list');
  },

  displayResetOrderHistory() {
    $('#order-history-list').empty();
  },

  displaySearchOrder(amount) {
    $('#money-spent-date').text(`$${amount}`);
  },

  displayPersonalizedSections() {
    $('#general-order-section').hide();
    $('#personalized-order-section').show();
    $('#general-room-stats').hide();
    $('#general-room-search').hide();
    $('#search-results').hide();
    $('#personalized-room-stats').show();
    $('#general-view-button').show();
  },

  displayGeneralSections() {
    $('#personalized-order-section').hide();
    $('#general-order-section').show();
    $('#general-room-stats').show();
    $('#general-room-search').show();
    $('#search-results').show();
    $('#personalized-room-stats').hide();
    $('#general-view-button').hide();
  },

  displayPopularDates(day) {
    $(`<li>${day.date} - ${day.bookings.length} bookings</li>`)
      .appendTo('#popular-dates');
  },

  displayUnpopularDates(day) {
    $(`<li>${day.date} - ${day.bookings.length} bookings</li>`)
      .appendTo('#unpopular-dates');
  },

  displayBookingResultsTitle(number, date) {
    $('#room-search-title').text(`${number} rooms available on ${date}`);
  },

  displayBookingResults(room) {
    $(`<article>
    <section class="booking-result-1">
      <h4>Room Type: <b>${room.roomType}</b></h4>
      <h4>Room number: <b>${room.number}</b></h4>
    </section>
    <section class="booking-result-2">
      <h4>Number of beds: <b>${room.numBeds}</b></h4>
      <h4>Bed sizes:<b> ${room.bedSize}</b></h4>
      <h4>Includes bidet:<b> ${room.bidet ? 'Yes' : 'No'}</b></h4>
    </section>
    <section class="booking-result-3">
      <h4>Cost Per Night:</h4>
      <h1><b>$${room.costPerNight}</b></h1>
    </section>
  </article>`)
      .appendTo('#booking-results');
  }
}

export default DOMupdates;