const express = require('express');
const app = express();
const port = 3000;

const IP = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://${IP}:${port}`);
});

let waiting = true;
setTimeout(function longWait() {
  console.log('done');
  waiting = false;
  process.exit();
}, 60000);

function shortWait() {
  console.log('waiting');
  if (waiting) {
    setTimeout(shortWait, 2000);
  }
}
shortWait();
