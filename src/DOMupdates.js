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
  },

  displayGeneralSections() {
    $('#personalized-order-section').hide();
    $('#general-order-section').show();
  },

  displayPopularDates(day) {
    $(`<li>${day.date} - ${day.bookings.length} bookings</li>`)
      .appendTo('#popular-dates');
  },

  displayUnpopularDates(day) {
    $(`<li>${day.date} - ${day.bookings.length} bookings</li>`)
      .appendTo('#unpopular-dates');
  },

  displayBookingResults(object) {
    $(`<article>
    <section class="booking-result-1">
      <h4>Room Type: ${object.roomType}</h4>
      <h4>Room number: ${object.number}</h4>
    </section>
    <section class="booking-result-2">
      <h4>Number of beds: ${object.numBeds}</h4>
      <h4>Bed sizes: ${object.bedSize}</h4>
      <h4>Bidet: Yes</h4>
    </section>
    <section class="booking-result-3">
      <h4>Cost Per Night:</h4>
      <h1>$${object.costPerNight}</h1>
    </section>
  </article>`)
      .appendTo('#booking-results')
  }
}

export default DOMupdates;