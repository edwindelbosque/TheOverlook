import $ from 'jquery';
import './css/base.scss';
import './images/wave-image.png';
import './images/favicon.png';
import './images/add-icon.svg';
import './images/search-icon.svg';
import Hotel from './Hotel';

let hotel, customerData, roomData, bookingData, roomServiceData;

displayCurrentDate(getToday());
$('.tabs-stage div').fadeOut(100);
$('.tabs-stage div:first').delay(100).fadeIn(100);
$('.tabs-nav li:first').addClass('tab-active');

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(response => response.json())
  .then(data => customerData = data.users)

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  .then(response => response.json())
  .then(data => roomData = data.rooms)

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  .then(response => response.json())
  .then(data => bookingData = data.bookings)

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
  .then(response => response.json())
  .then(data => roomServiceData = data.roomServices)

setTimeout(() => {
  hotel = new Hotel(customerData, bookingData, roomServiceData, roomData)
  hotel.booking.findRoomsAvailable(getToday());
  hotel.getTotalDailyRevenue(getToday());
  hotel.roomService.getDailyServices(getToday());
  hotel.booking.findPopularDates(getToday());
  hotel.booking.findUnpopularDates(getToday());
  hotel.booking.findAvailableRooms(getToday());
}, 1000);

$('.tabs-nav a').on('click', function (event) {
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage div').fadeOut(100);
  $($(this).attr('href')).delay(100).fadeIn(100);
  $('#money-spent-date').delay(1000).text('');
  $('#order-customer-input').delay(1000).val('');
})

function getToday() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = `${yyyy}/${mm}/${dd}`;
  return today;
}

function displayCurrentDate(day) {
  $('#date').text(`${new Date(day).toString().slice(0, 10)}`);
}

$('#search-customer-input').hide();
$('#add-customer-input').hide();
$('#submit-search-button').hide();
$('#submit-add-button').hide();
$('#personalized-order-section').hide();

$('#search-customer-button').on('click', () => {
  $('#search-customer-input').toggle();
  $('#submit-search-button').toggle();
  $('#add-customer-input').hide();
  $('#submit-add-button').hide();
  $('#search-customer-input').val('');
  $('#add-customer-input').val('');
  $('#user-not-found').text('')
  $('#user-already-exists').text('')
})

$('#add-customer-button').on('click', () => {
  $('#add-customer-input').toggle();
  $('#submit-add-button').toggle();
  $('#search-customer-input').hide();
  $('#submit-search-button').hide();
  $('#search-customer-input').val('');
  $('#add-customer-input').val('');
  $('#user-not-found').text('')
  $('#user-already-exists').text('')
})

$('#submit-search-button').on('click', () => {
  hotel.user.findUser($('#search-customer-input').val())
  $('#search-customer-input').val('')
  hotel.toggleCustomizedOrders()
})

$('#search-customer-input').on('keypress', (e) => {
  if (e.which === 13) {
    hotel.user.findUser($('#search-customer-input').val())
    $('#search-customer-input').val('')
    hotel.toggleCustomizedOrders()
  }
});

$('#submit-add-button').on('click', () => {
  hotel.user.checkAddUser($('#add-customer-input').val())
  $('#add-customer-input').val('')
  hotel.toggleCustomizedOrders()
})

$('#add-customer-input').on('keypress', (e) => {
  if (e.which === 13) {
    hotel.user.checkAddUser($('#add-customer-input').val())
    $('#add-customer-input').val('')
    hotel.toggleCustomizedOrders()
  }
});

$('#order-date-button').on('click', () => {
  let inputValue = $('#order-date-input').val();
  hotel.roomService.searchOrders(inputValue);
})

$('#order-date-input').on('keypress', (e) => {
  if (e.which === 13) {
    let inputValue = $('#order-date-input').val();
    hotel.roomService.searchOrders(inputValue);
  }
});

$('#spent-order-button').on('click', () => {
  const userInput = $('#order-customer-input').val()
  hotel.searchOrders(userInput);
});

$('#order-customer-input').on('keypress', (e) => {
  if (e.which === 13) {
    const userInput = $('#order-customer-input').val()
    hotel.searchOrders(userInput);
  }
})

$('#search-bookings-button').on('click', () => {
  const userInput = $('#search-bookings-input').val();
  $('#booking-results').empty()
  hotel.booking.findAvailableRooms(userInput);
})

$('#search-bookings-input').on('keypress', (e) => {
  if (e.which === 13) {
    const userInput = $('#search-bookings-input').val();
    $('#booking-results').empty();
    hotel.booking.findAvailableRooms(userInput);
  }
})