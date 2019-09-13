import chai from 'chai';
import User from '../src/User';
import Hotel from '../src/Hotel';
import DOMupdates from '../src/DOMupdates.js';
import bookingData from '../data/bookings.js'
import roomData from '../data/rooms.js'
import userData from '../data/users.js'
import roomServiceData from '../data/roomServices.js'
const expect = chai.expect;

let hotel, user;

beforeEach(() => {
  hotel = new Hotel(userData, bookingData, roomServiceData, roomData);
  user = new User(userData);
});

describe('User', () => {

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should show all customers', () => {
    expect(user.userData[0]).to.deep.equal({ id: 1, name: "Matilde Larson" })
    expect(user.userData[1]).to.deep.equal({ id: 2, name: "Chadrick Lowe" })
    expect(user.userData[2]).to.deep.equal({ id: 3, name: "Christian Sporer" })
  });

  it('should find user info by ID', () => {
    user.findUser(25);
    expect(user.name).to.deep.equal('Bianka Russel');
    expect(user.id).to.deep.equal(25);
  });

  it('should be able to add a user and update information', () => {
    user.addUser('Edwin Del Bosque');
    expect()
  });

});