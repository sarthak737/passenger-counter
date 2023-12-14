let countEl = document.getElementById("count-el");
let count = 0;
countEl.textContent = count;
let entries = document.getElementById("entries-el");
entries.textContent = "Previous Entries: ";

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  entries.textContent += count + " - ";
  count = 0;
  countEl.textContent = count;
}
