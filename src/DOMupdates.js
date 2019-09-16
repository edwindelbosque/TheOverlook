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
    $('.table-item-booking-history').remove();
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
    $('#table-header').fadeIn();
    $('#no-order-history').remove();
    $(`
    <tr class="table-item-booking-history">
      <td>${booking.date}</td>
      <td>${booking.room.roomType} </td>
      <td>${booking.room.costPerNight}</td>
    </tr>
    `).insertAfter('#booking-history');
  },

  displayNoBookingHistory() {
    $('#table-header').fadeOut();
    $(`<li id="no-order-history">This user has no booking history...</li>`)
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
    $('#general-order-section').fadeOut(150);
    $('#general-room-stats').fadeOut(150);
    $('#general-room-search').fadeOut(150);
    $('#search-results').fadeOut(150);
    $('#personalized-order-section').delay(150).fadeIn(150);
    $('#personalized-room-stats').delay(150).fadeIn(150);
    $('#general-view-button').delay(150).fadeIn(150);
  },

  displayGeneralSections() {
    $('#personalized-order-section').fadeOut(150);
    $('#personalized-room-stats').fadeOut(150);
    $('#general-view-button').fadeOut(150);
    $('#general-order-section').delay(150).fadeIn(150);
    $('#general-room-search').delay(150).fadeIn(150);
    $('#search-results').delay(150).fadeIn(150);
    $('#general-room-stats').delay(150).fadeIn(150);
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
  },

  displayBookAnotherRoom() {
    $('#booking-suggestions').empty();
    $('<li>This user has booked today!</li><br><button id="book-another-button">Book Another Day</button>')
      .appendTo('#booking-suggestions');
  },

  displayBookToday() {
    $('#booking-suggestions').empty();
    $('<li>This user is not booked today</li><br><button id="book-today-button">Book Today</button><button id="book-another-button">Book Another Day</button>')
      .appendTo('#booking-suggestions');
  }

}

export default DOMupdates;