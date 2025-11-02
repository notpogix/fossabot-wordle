const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const WORD = "CRANE"; // You can randomize this later

app.get('/wordle', (req, res) => {
  const guess = req.query.guess?.toUpperCase();
  if (!guess || guess.length !== WORD.length) {
    return res.json({ response: "Invalid guess. Try a 5-letter word." });
  }

  let result = "";
  for (let i = 0; i < WORD.length; i++) {
    if (guess[i] === WORD[i]) result += "🟩";
    else if (WORD.includes(guess[i])) result += "🟨";
    else result += "⬛";
  }

  res.json({ response: `${guess} → ${result}` });
});

app.listen(3000, () => console.log("API running on port 3000"));
