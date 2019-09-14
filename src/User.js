import DOMupdates from '../src/DOMupdates.js';

class User {
  constructor(userData) {
    this.userData = userData;
    this.name = undefined;
    this.id = undefined;
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
      DOMupdates.displayUserNotFound();
    }
  }

  addUser(name) {
    this.name = name;
    this.id = this.totalUsers;
    this.userData.push({ id: this.userData.length + 1, name: this.name })
    DOMupdates.displayUser(this.name);
  }
}

export default User;