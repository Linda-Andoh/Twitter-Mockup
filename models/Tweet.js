const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

// create a new Schema

const tweetSchema = new Schema(
  {
    title: {type: String},
    body: {type: String},
    author: {type: String},
    likes: { type: Number, default: 0 },
    sponsored: { type: Boolean, default: false },
  },
  { 
    timestamps: true 
});

// Create a Tweet model
const Tweet = model("Tweet", tweetSchema);

//make this exportable to be accessed in `server.js`
module.exports = Tweet;