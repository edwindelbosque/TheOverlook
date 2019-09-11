import chai from 'chai';
import Hotel from '../src/Hotel';
import Booking from '../src/Booking';
import DOMupdates from '../src/DOMupdates.js';
const expect = chai.expect;

let hotel, booking, guest;

beforeEach(() => {
  hotel = new Hotel(data);
  booking = new Booking();
});

describe('Booking', () => {

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(booking).to.be.an.instanceOf(Booking);
  });

});