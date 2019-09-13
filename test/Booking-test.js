import chai from 'chai';
import Hotel from '../src/Hotel';
import Booking from '../src/Booking';
import DOMupdates from '../src/DOMupdates.js';
import bookingData from '../data/bookings.js'
import roomData from '../data/rooms.js'
import userData from '../data/users.js'
import roomServiceData from '../data/roomServices.js'
const expect = chai.expect;
import spies from 'chai-spies'
chai.use(spies);
let hotel, booking, guest;

beforeEach(() => {
  chai.spy.on(DOMupdates, ['displayRoomsAvailable'], () => true);
  hotel = new Hotel(userData, bookingData, roomServiceData, roomData);
  booking = new Booking(bookingData, roomData);
});

afterEach(function () {
  chai.spy.restore(DOMupdates)
});

describe('Booking', () => {

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it('should contains all the booking information', () => {
    expect(booking.bookingData.length).to.equal(2001);
  });

  it('should be able to show all rooms', () => {
    expect(booking.roomData.length).to.equal(50);
  });

  it('should be able to show available rooms', () => {
    expect(booking.findRoomsAvailable('2019/09/12')).to.equal('40%');
  });

  it('should call function to show available rooms on DOM', () => {
    booking.findRoomsAvailable('2019/09/12')
    expect(DOMupdates.displayRoomsAvailable).to.have.been.called(1);
  });

  it('should display total daily revenue from bookings', () => {
    expect(booking.getBookingRevenue('2019/09/12')).to.equal(6184);
  });

});