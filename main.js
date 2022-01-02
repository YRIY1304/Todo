let arrayTodos = [];
$(".add-button").on("click", () => {
  addTask();
  render(arrayTodos);
});

function addTask() {
  let inpText = $(".input-field").val();
  arrayTodos.push(inpText);
}

function render(array) {
  let str = "";
  array.forEach((element, i) => {
    str =
      str +
      `<div id="${i}" class="blok2">
    <div class="main2">
        <h1>${element}</h1>
    </div>
    <button class="del-btn" onclick="delToDo(this)">x</button>
</div>`;
  });

  $(".tasks").html(str);
}

function delToDo(element) {
  const arr = arrayTodos.filter((item, i) => {
    return i != element.parentNode.id;
  });

  arrayTodos = arr;
  render(arrayTodos);
}
