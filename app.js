const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "совершить подвиг",
    completed: false,
  },
  {
    title: "сварить суп",
    completed: true,
  },
  {
    title: "сделать хоть что-то",
    completed: false,
  },
];

function render() {
  for (let note of notes) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  
  const newNote = {
    title: inputElement.value,
    completed: false,
  };

  listElement.insertAdjacentHTML("beforeend", getNoteTemplate(newNote));
  inputElement.value = "";
};

function getNoteTemplate(note) {
  return `
  <li 
    class="list-group-item d-flex justify-content-between 
    align-items-center"
  >
  <span>${note.title}</span>
  <span>
      <span class="btn btn-small btn-success">&check;</span>
      <span class="btn btn-small btn-danger">&times;</span>
  </span>
</li>`;
}

// 2.25.48
