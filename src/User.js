import DOMupdates from './DOMupdates';

class User {
  constructor(userData) {
    this.userData = userData;
    this.name = undefined;
    this.id = undefined;
  }

  findUser(name) {
    const user = this.userData
      .find(user => user.name.toUpperCase() === name.toUpperCase());

    if (this.name !== undefined
      && name.toUpperCase() === this.name.toUpperCase()) {
      DOMupdates.displayUserAlreadySelected()
    } else if (user) {
      this.name = user.name;
      this.id = user.id;
      DOMupdates.displayUser(this.name);
    } else {
      this.name = undefined;
      this.id = undefined;
      DOMupdates.displayUserReset()
      DOMupdates.displayUserNotFound();
    }
  }

  checkAddUser(name) {
    const capitalizedNames = this.userData.map(user => user.name.toUpperCase());

    if (capitalizedNames.includes(name.toUpperCase())) {
      DOMupdates.displayUserAlreadyExists()
    } else if (name.split(' ').length < 2) {
      DOMupdates.displayEnterFullName();
    } else {
      this.addUser(name);
    }
  }

  addUser(name) {
    const fixedName = name.toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
    this.name = fixedName;
    this.id = this.userData.length + 1;
    this.userData.push({
      id: this.userData.length + 1,
      name: this.name
    })
    DOMupdates.displayUser(this.name);
  }
}

export default User;