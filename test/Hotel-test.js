import Hotel from '../src/Hotel';
// import Booking from '../src/Booking';
import DOMupdates from '../src/DOMupdates.js';
import bookingData from '../data/bookings.js'
import roomData from '../data/rooms.js'
import userData from '../data/users.js'
import spies from 'chai-spies'
chai.use(spies);
import chai from 'chai';
// import RoomService from '../src/RoomService';
import roomServiceData from '../data/roomServices.js'
const expect = chai.expect;

let hotel, booking, guest, roomService;

beforeEach(() => {
  chai.spy.on(DOMupdates, ['displayOverallRevenue'], () => true);
  hotel = new Hotel(userData, bookingData, roomServiceData, roomData);
});

afterEach(function () {
  chai.spy.restore(DOMupdates)
});

describe('Hotel', () => {

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should return the the revenue for a specific date', () => {
    expect(hotel.getRoomServiceRevenue('2019/07/29')).to.equal(15);
    expect(hotel.getRoomServiceRevenue('2019/10/27')).to.equal(39);
  });

  it('should display total daily revenue from bookings', () => {
    expect(hotel.getBookingRevenue('2019/09/12')).to.equal(6184);
  });

  it('should return total revenue for a specific date', () => {
    expect(hotel.getTotalDailyRevenue('2019/10/27')).to.equal(6162);
  });

  it('should call function to show overall revenue on DOM', () => {
    hotel.getTotalDailyRevenue('2019/10/27')
    expect(DOMupdates.displayOverallRevenue).to.have.been.called(1);
  });

});