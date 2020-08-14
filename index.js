console.log('node');
let waiting = true;
setTimeout(function longWait() {
  waiting = false;
  process.exit();
}, 30000);

function shortWait() {
  console.log('waiting');
  if (waiting) {
    setTimeout(shortWait, 1000);
  }
}
shortWait();
