import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;
chai.use(spies);
import Booking from '../src/Booking';
import bookingData from '../data/bookings';
import roomData from '../data/rooms';
import DOMupdates from '../src/DOMupdates';

let booking;

beforeEach(() => {
  chai.spy.on(DOMupdates, [
    'displayRoomsAvailable',
    'displayPopularDates',
    'displayUnpopularDates'], () => true);
  booking = new Booking(bookingData, roomData);
});

afterEach(function () {
  chai.spy.restore(DOMupdates)
})

describe('Booking', () => {

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', () => {
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

  it('should return dates as properties and their bookings as the values', () => {
    expect(booking.findBookingsPerDate()['2019/09/12'].slice(0, 5)).to.deep.equal(
      [
        { userID: 47, date: '2019/09/12', roomNumber: 14 },
        { userID: 13, date: '2019/09/12', roomNumber: 29 },
        { userID: 62, date: '2019/09/12', roomNumber: 47 },
        { userID: 99, date: '2019/09/12', roomNumber: 39 },
        { userID: 52, date: '2019/09/12', roomNumber: 31 },
      ]
    );
  });

  it('should return booking dates from the present day and on only', () => {
    expect(booking.sliceFutureDates('2019/09/14').length).to.deep.equal(48);
  });

  it('should return an array of all unique dates', () => {
    expect(booking.getArrayOfDates().length).to.deep.equal(101);
  });

  it('should call DOMupdates to display most popular booking dates', () => {
    booking.findPopularDates('2019/09/15');
    expect(DOMupdates.displayPopularDates).to.have.been.called(5);
  });

  it('should call DOMupdates to display most low traffic booking dates', () => {
    booking.findUnpopularDates('2019/09/15');
    expect(DOMupdates.displayUnpopularDates).to.have.been.called(5);
  });

});