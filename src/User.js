class User {
  constructor(userData) {
    this.userData = userData;
    this.name = undefined;
    this.id = undefined;
    this.totalUsers = userData.length;
  }

  findUser(id) {
    let user = this.userData.find(user => user.id === id);
    this.name = user.name;
    this.id = user.id;
  }

  addUser(name) {
    this.name = name;
    this.id = this.totalUsers + 1;
    this.userData.push({ id: this.totalUsers, name: this.name })
    this.userData.shift();
  }
}

export default User;