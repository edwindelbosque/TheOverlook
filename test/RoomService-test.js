import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;
chai.use(spies);
import RoomService from '../src/RoomService';
import roomServiceData from '../data/roomServices';
import DOMupdates from '../src/DOMupdates';

let roomService;

beforeEach(() => {
  chai.spy.on(DOMupdates, [
    'displayOrdersToday',
    'displayResetOrders',
    'displaySearchedOrders',
    'dusplayResetOrders',
    'displayResultsHeader',
    'displayResetResults'
  ], () => true);
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

  it('should call DOM method when displaying today orders', () => {
    roomService.getDailyServices('2019/10/27');
    expect(DOMupdates.displayResetOrders).to.have.been.called(1);
    expect(DOMupdates.displayOrdersToday).to.have.been.called(2);
  });

  it('should return room services for a specific date', () => {
    expect(roomService.getDailyServices('2019/10/27')).to.deep.equal([
      "Generic Cotton Sandwich",
      "Unbranded Plastic Sandwich"
    ])
  });

  it('should call DOMupdates when searching for orders', () => {
    roomService.searchOrders('2019/08/08');
    expect(DOMupdates.displayResetResults).to.have.been.called(1);
    expect(DOMupdates.displayResultsHeader).to.have.been.called(1);
    expect(DOMupdates.displaySearchedOrders).to.have.been.called(3);
  });

});