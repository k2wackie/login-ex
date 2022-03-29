"use strict";

const fs = require('fs').promises;

class UserStorage {
  static #getuserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    // console.log(userInfo);
    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      // console.log(newUsers, field);
      if(users.hasOwnProperty(field)) {  //.hasOwnProperty: users에 field에 해당하는 key값이 있는지 물어보는 함수
        newUsers[field] = users[field];
      }
      return newUsers;
    },{});
    // console.log(newUsers);
    return newUsers;
  }

  static getUserInfo(id) {
    return fs.readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getuserInfo(data, id);
      })
      .catch(console.error);
  };

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);
    return { success: true };
  }
}

module.exports = UserStorage;