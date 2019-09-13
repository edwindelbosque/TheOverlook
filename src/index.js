import $ from 'jquery';
import './css/base.scss';
import Hotel from './Hotel';
import User from './User';
import Booking from './Booking';
import DOMupdates from './DOMupdates';

import './images/wave-image.png';
import './images/favicon.png';
import './images/add-icon.svg';
import './images/search-icon.svg';


const DOMdate = $('#date');
let customers, rooms, bookings, services, hotel, user, booking;

displayCurrentDate(getToday());

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(response => response.json())
  .then(data => customers = data.users)
  .then(() => console.log('customers', customers))
  .catch(err => console.log('Unable to fetch the data', err));

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  .then(response => response.json())
  .then(data => rooms = data.rooms)
  .then(() => console.log('rooms', rooms))
  .catch(err => console.log('Unable to fetch the data', err));

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  .then(response => response.json())
  .then(data => bookings = data.bookings)
  .then(() => console.log('bookings', bookings))
  .catch(err => console.log('Unable to fetch the data', err));

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
  .then(response => response.json())
  .then(data => services = data.roomServices)
  .then(() => console.log('roomServices', services))
  .catch(err => console.log('Unable to fetch the data', err));

setTimeout(() => {
  hotel = new Hotel(customers, bookings, services, rooms)
  bookings = new Booking(bookings, rooms);
  bookings.findRoomsAvailable(getToday());
  hotel.getTotalDailyRevenue(getToday());
}, 1000);

// Show the first tab by default
$('.tabs-stage div').fadeOut(100);
$('.tabs-stage div:first').delay(100).fadeIn(100);
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function (event) {
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage div').fadeOut(100);
  $($(this).attr('href')).delay(100).fadeIn(100);
});

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
  DOMdate.text(`${new Date(day).toString().slice(0, 10)}`);
}

$('#search-customer-input').hide();
$('#add-customer-input').hide();
$('#submit-search-button').hide();
$('#submit-add-button').hide();

$('#search-customer-button').on('click', () => {
  $('#search-customer-input').toggle();
  $('#submit-search-button').toggle();
  $('#add-customer-input').hide();
  $('#submit-add-button').hide();
})

$('#add-customer-button').on('click', () => {
  $('#add-customer-input').toggle();
  $('#submit-add-button').toggle();
  $('#search-customer-input').hide();
  $('#submit-search-button').hide();
})

$('#submit-search-button').on('click', () => {

})