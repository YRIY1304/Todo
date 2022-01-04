let arrayTodos = [];
$(".add-button").on("click", () => {
  addTask();
  render(arrayTodos);
});

function addTask() {
  let inpText = $(".input-field").val(); // обявление переменной и присвоение текста ей, vel возвращает текст введённый в инпут

  if (inpText.trim() === "") {
    //Проверка поля
    return alert("Поле пустое!");
  }

  let task = createTask(inpText); // Присвоение переменной и присвоение к результату того что вернёт createTask

  arrayTodos.push(task); // помещение в масив объекта task

  $(".input-field").val("");
}

function createTask(text) {
  // Cобраный объект
  return {
    id: Math.ceil(Math.random() * 1000),
    text: text,
    checked: false,
  };
}

function render(array) {
  let str = "";
  array.forEach((element, i) => {
    let checkFlag = "";
    console.log("element.checked :>> ", element.checked);
    if (element.checked === true) {
      checkFlag = "checked";
    }
    str =
      str +
      `
        <div  class="todo-container" id="${element.id}">
            <div><input type="checkbox" id="${element.id}" class="checkbox" ${checkFlag}></div>
            <h1 class="text-todo">${element.text}</h1>
           <div> <button  id="${element.id}" class="del-btn">x</button></div>
        </div>`;
  });

  $(".tasks").html(str);
}

$(document).on("change", ".checkbox", (event) => {
  let todoCheked = event.currentTarget.checked;
  let todoId = +event.currentTarget.id;
  arrayTodos.forEach(function (elementMassiv) {
    if (todoId === elementMassiv.id) {
      elementMassiv.checked = todoCheked;
    }
  });
});

function updatedTask(cheked, id) {
  arrayTodos, todoCheked;
}

$(document).on("click", ".del-btn", (event) => {
  delToDo(event);
});

function delToDo(event) {
  const arr = arrayTodos.filter((element, i) => {
    // удаление по id
    return element.id != event.target.id;
  });

  arrayTodos = arr;
  render(arrayTodos);
}

$(document).on("keydown", ".input-field", function (event) {
  if (event.which === 13) {
    addTask();
    render(arrayTodos);
  }
});

$(document).on("dblclick", ".main2", function () {
  console.log("this :>> ", this);
});
