import chai from 'chai';
import Hotel from '../src/Hotel';
import DOMupdates from '../src/DOMupdates.js';
const expect = chai.expect;

let hotel;

describe('Hotel', () => {
  beforeEach(function () {
    hotel = new Hotel(data);
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

});