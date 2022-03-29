"use strict";

class UserStorage {
  static #users = {    //  # 은닉화(public에서 private로), static 정적변수로 바꿔서 클래스에서 바로 접근 가능하도록..
    id: ["kim", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["kw", "나기원", "김태진"],
  };

  static getUsers(...fields) {
    const users = this.#users;
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
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  };

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);
    return { success: true };
  }
}

module.exports = UserStorage;