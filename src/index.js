// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/wave-image.png';
import './images/favicon.png';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

let customers, rooms, bookings, roomServices;

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
