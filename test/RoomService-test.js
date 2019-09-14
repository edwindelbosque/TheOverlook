// import Hotel from '../src/Hotel';
// import Booking from '../src/Booking';
import DOMupdates from '../src/DOMupdates.js';
// import bookingData from '../data/bookings.js'
// import roomData from '../data/rooms.js'
// import userData from '../data/users.js'
import spies from 'chai-spies'
chai.use(spies);
import chai from 'chai';
import RoomService from '../src/RoomService';
import roomServiceData from '../data/roomServices.js'
const expect = chai.expect;

let roomService;

beforeEach(() => {
  roomService = new RoomService(roomServiceData);
});

afterEach(function () {
  chai.spy.restore(DOMupdates)
})

describe('RoomService', () => {

  it('should be a function', () => {
    expect(RoomService).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(roomService).to.be.an.instanceOf(RoomService);
  });

  it('should contain all the room service information', () => {
    expect(roomService.roomServiceData.length).to.equal(100);
  });

  it('should return the the revenue for a specific date', () => {
    expect(roomService.getRoomServiceRevenue('2019/07/29')).to.equal(15);
    expect(roomService.getRoomServiceRevenue('2019/10/27')).to.equal(39);
  });

});