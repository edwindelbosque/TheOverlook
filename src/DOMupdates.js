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
  }
}

export default DOMupdates;