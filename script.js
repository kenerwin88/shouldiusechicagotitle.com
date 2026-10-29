'use strict';
// Include the complete account note in browser printouts.
let printState = [];
window.addEventListener('beforeprint', () => {
  printState = Array.from(document.querySelectorAll('details')).map(item => [item, item.open]);
  printState.forEach(([item]) => { item.open = true; });
});
window.addEventListener('afterprint', () => {
  printState.forEach(([item, open]) => { item.open = open; });
});
