import spies from 'chai-spies'
import chai from 'chai';
import User from '../src/User';
import userData from '../data/users.js'
import DOMupdates from '../src/DOMupdates.js';

const expect = chai.expect;
chai.use(spies);
let user;

beforeEach(() => {
  chai.spy.on(DOMupdates, [
    'displayUser',
    'displayUserReset',
    'displayUserNotFound',
    'displayUserAlreadyExists',
    'displayUserAlreadySelected',
    'displayEnterFullName'
  ], () => true);
  user = new User(userData);
});

afterEach(function () {
  chai.spy.restore(DOMupdates)
})

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

  it('should find user info by full name', () => {
    user.findUser('Bianka Russel');
    expect(user.name).to.deep.equal('Bianka Russel');
    expect(user.id).to.deep.equal(25);
  });

  it('should be able to add a user and update information', () => {
    user.addUser('Edwin Del Bosque');
    expect()
  });

  it('should call different DOMupdates methods given names to search', () => {
    user.findUser('noemy little')
    expect(DOMupdates.displayUser).to.have.been.called(1);
    user.findUser('rijnfirnferj')
    expect(DOMupdates.displayUserReset).to.have.been.called(1);
    expect(DOMupdates.displayUserNotFound).to.have.been.called(1);
    user.findUser('noemy little')
    user.findUser('noemy little')
    expect(DOMupdates.displayUserAlreadySelected).to.have.been.called(1);
  });

  it('should call DOM method if addUser already exists', () => {
    user.checkAddUser('Noemy Little');
    expect(DOMupdates.displayUserAlreadyExists).to.have.been.called(1);
    user.checkAddUser('Edwin');
    expect(DOMupdates.displayEnterFullName).to.have.been.called(1);
  })

});