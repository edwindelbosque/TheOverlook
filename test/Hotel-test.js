import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;
chai.use(spies);
import Hotel from '../src/Hotel';
import userData from '../data/users';
import bookingData from '../data/bookings';
import roomData from '../data/rooms';
import roomServiceData from '../data/roomServices';
import DOMupdates from '../src/DOMupdates';

let hotel;

beforeEach(() => {
  chai.spy.on(DOMupdates, ['displayOverallRevenue'], () => true);
  hotel = new Hotel(userData, bookingData, roomServiceData, roomData);
});

afterEach(() => {
  chai.spy.restore(DOMupdates);
})

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

  describe('spies', () => {

    it('should call function to show overall revenue on DOM', () => {
      hotel.getTotalDailyRevenue('2019/10/27')
      expect(DOMupdates.displayOverallRevenue).to.have.been.called(1);
    });

  });

});