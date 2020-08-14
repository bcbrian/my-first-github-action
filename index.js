console.log('node');
let waiting = true;
setTimeout(function longWait() {
  console.log('done');
  waiting = false;
  process.exit();
}, 30000);

function shortWait() {
  console.log('waiting');
  if (waiting) {
    setTimeout(shortWait, 2000);
  }
}
shortWait();
