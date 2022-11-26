#!/usr/bin/env node

const program = require("commander");
const prompt = require("prompt");

prompt.start();
const {
  addUser,
  findUser,
  updateUser,
  removeUser,
  listUsers,
} = require("./index");

const questions = [
  {
    type: "input",
    name: "firstname",
    message: "User First Name",
  },
  {
    type: "input",
    name: "lastname",
    message: "User Last Name",
  },
  {
    type: "input",
    name: "phone",
    message: "User Phone Number",
  },
  {
    type: "input",
    name: "email",
    message: "User Email Address",
  },
];

program.version("1.0.0").alias("v").description("User management system");

// add command
program
  .command("add")
  .alias("a")
  .description("Add a User")
  .action(() => {
    prompt
      .get(["firstname", "lastname", "phone", "email"])
      .then((answers) => addUser(answers));
  });

//list command
program
  .command("list")
  .alias("l")
  .description("List all users")
  .action(() => listUsers());

// remove command

program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a User")
  .action((_id) => removeUser(_id));

//find command
program
  .command("find <name>")
  .alias("f")
  .description("Find a User")
  .action((name) => findUser(name));

// update command

program.parse(process.argv);
