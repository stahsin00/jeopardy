
exports.postStartGame = (req, res) => {
    const newGame = new Game();
    await game.save();
    
    res.status(200).json(game);
}

export const postGuess = async (req, res) => {
    const user = req.user;
    if (!user) {
        res.status(401).json({"Please log before guessin"})
    }
    
    const gameId = req.body.gameId;
    const guess = req.body.guess;
    if (!gameId) {
        // TODO reply with gameId required
    }
    // Find out game
    const game = await Game.findOne(gameId);
    // Check if the guess is right
    // If it is, update the score
    // Then return the game state
    await game.save();
    // THIS IS PROBABLY GOING TO FAIL, NEED TO PICK WHICH PROPERTIES TO SEND BACK
    res.status(200).json({game})
}