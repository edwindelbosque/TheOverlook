import Hotel from '../src/Hotel';
import DOMupdates from '../src/DOMupdates.js';
import bookingData from '../data/bookings.js'
import roomData from '../data/rooms.js'
import userData from '../data/users.js'
import roomServiceData from '../data/roomServices.js'
import spies from 'chai-spies'
import chai from 'chai';
chai.use(spies);
const expect = chai.expect;

let hotel;

beforeEach(() => {
  chai.spy.on(DOMupdates, ['displayOverallRevenue'], () => true);
  hotel = new Hotel(userData, bookingData, roomServiceData, roomData);
});

describe('Hotel', () => {

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should return total revenue for a specific date', () => {
    expect(hotel.getTotalDailyRevenue('2019/10/27')).to.equal('6,162');
  });

  it('should call function to show overall revenue on DOM', () => {
    hotel.getTotalDailyRevenue('2019/10/27')
    expect(DOMupdates.displayOverallRevenue).to.have.been.called(1);
  });

});