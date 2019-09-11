import $ from 'jquery';
import './css/base.scss';
import Hotel from './Hotel';
import Guest from './Guest';
import Booking from './Booking';
import DOMupdates from './DOMupdates';

import './images/wave-image.png';
import './images/favicon.png';

let customers, rooms, bookings, roomServices, hotel, guest, booking;

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
  .then(data => roomServices = data.roomServices)
  .then(() => console.log('roomServices', roomServices))
  .catch(err => console.log('Unable to fetch the data', err));

// Show the first tab by default
$('.tabs-stage div').hide();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function (event) {
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage div').hide();
  $($(this).attr('href')).show();
});