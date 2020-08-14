console.log('node');
let waiting = true;
setTimeout(function waiting() {
  waiting = false;
  process.exit();
}, 30000);

function waiting() {
  console.log('waiting');
  if (waiting) {
    setTimeout(waiting, 1000);
  }
}
waiting();
