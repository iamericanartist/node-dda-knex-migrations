"use strict"

module.exports.seed = (knex, Promise) =>
  // knex("table_name")    //1st
  // .del()
  // .then(() => Promise.all([
  //   //Inserts Seed Entries
  //   knex("table_name").insert({id: 1, colName: "rowValue1"}),
  //   knex("table_name").insert({id: 2, colName: "rowValue2"}),
  //   knex("table_name").insert({id: 3, colName: "rowValue3"}),
  // ])
  new User({
    name: "Scott",
    email: "a@b.com",
  }).save()
