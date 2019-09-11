import chai from 'chai';
import Guest from '../src/Guest';
import Hotel from '../src/Hotel';
import DOMupdates from '../src/DOMupdates.js';
import userData from '../data/users.js'
const expect = chai.expect;

let hotel, guest;

beforeEach(() => {
  hotel = new Hotel();
  guest = new Guest(userData);
});

describe('Guest', () => {

  it('should be a function', () => {
    expect(Guest).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(guest).to.be.an.instanceOf(Guest);
  });

});