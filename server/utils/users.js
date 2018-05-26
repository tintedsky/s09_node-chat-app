class Users {
  constructor(){   //should be constructor, not construct
    this.users = [];
  }
  addUser(id, name, room){
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id){
    //return user that was removed.
    var user = this.getUser(id);
    if(user){
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }
  getUser(id){
    var user = this.users.filter((user) => user.id === id)[0]; //filter always return an array.
    return user;
  }
  getUserList(room){
    //Step 1: get the object array with the criteria.
    var users = this.users.filter((user) => user.room === room);
    //Step 2: Convert the array of Objects to array of String;
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
