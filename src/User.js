import DOMupdates from '../src/DOMupdates.js';

class User {
  constructor(userData) {
    this.userData = userData;
    this.name = undefined;
    this.id = undefined;
    this.totalUsers = userData.length;
  }

  findUser(name) {
    let user = this.userData
      .find(user => user.name.toUpperCase() === name.toUpperCase());
    if (user) {
      this.name = user.name;
      this.id = user.id;
      DOMupdates.displayUser(this.name);
    } else {
      DOMupdates.displayUserReset()
    }
  }

  addUser(name) {
    this.name = name;
    this.id = this.totalUsers + 1;
    this.userData.push({ id: this.totalUsers, name: this.name })
    this.userData.shift();
  }
}

export default User;