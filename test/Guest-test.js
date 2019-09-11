import chai from 'chai';
import Guest from '../src/Guest';
import Hotel from '../src/Hotel';
import DOMupdates from '../src/DOMupdates.js';
const expect = chai.expect;

let hotel, guest;

describe('Hotel', () => {
  beforeEach(function () {
    hotel = new Hotel(data);
    guest = new Guest();
  });

  it('should be a function', () => {
    expect(Guest).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(guest).to.be.an.instanceOf(Guest);
  });

});