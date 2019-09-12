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

  it('should show all customers', () => {
    expect(guest.userData[0]).to.deep.equal({ id: 1, name: "Matilde Larson" })
    expect(guest.userData[1]).to.deep.equal({ id: 2, name: "Chadrick Lowe" })
    expect(guest.userData[2]).to.deep.equal({ id: 3, name: "Christian Sporer" })
  });

  it('should find user info by ID', () => {
    guest.findUser(25);
    expect(guest.name).to.deep.equal('Bianka Russel');
    expect(guest.id).to.deep.equal(25);
  });

  it('should be able to add a guest and update information', () => {
    guest.addUser('Edwin Del Bosque');
    expect()
  });

});