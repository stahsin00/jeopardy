const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Reference to the User model
    score: Number
  });

const songSchema = new mongoose.Schema({
    title: String,
    audio: String
  });

const gameSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    id: String,
    round: Number,
    players: [playerSchema],
    currentSong: songSchema

  }, { timestamps: true });