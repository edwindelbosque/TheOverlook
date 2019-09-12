class Guest {
  constructor(userData) {
    this.userData = userData;
    this.name = undefined;
    this.id = undefined;
    this.totalGuests = userData.length;
  }

  findUser(id) {
    let user = this.userData.find(user => user.id === id);
    this.name = user.name;
    this.id = user.id;
  }

  addUser(name) {
    this.name = name;
    this.id = this.totalGuests + 1;
    this.userData.push({ id: this.totalGuests, name: this.name })
    this.userData.shift();
  }
}

export default Guest;