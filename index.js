const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = mongoose.connect("mongodb://localhost:27017/usercli");

const User = require("./models/user");

const addUser = (user) => {
  User.create(user).then((user) => {
    console.info("New User Added");
  });
};

const findUser = (name) => {
  const search = new RegExp(name, "i");
  User.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (User) => {
      console.info(User);
      console.info(`${User.length} matches`);
    }
  );
};

const updateUser = (_id, User) => {
  User.update({ _id }, User).then((User) => {
    console.info("User Updated");
  });
};

const removeUser = (_id) => {
  User.remove({ _id }).then((User) => {
    console.info("User Removed");
  });
};


const listUsers = () => {
  User.find().then((users) => {
    console.info(users);
    console.info(`${users.length} users`);
  });
};

module.exports = {
  addUser,
  findUser,
  updateUser,
  removeUser,
  listUsers,
};
