let arrayTodo = [];

$(document).ready(() => {
})

const render = (array) => {
let str = '';

array.forEach(element => {
    str = str + `<div class="blok2">
    <div class="main2">
        <h1>${element}</h1>
    </div>
    <button>x</button>
</div>`;

});

$('.tasks').html(str)
}

const addTask = function(){
    let inpText = $('.block1 input').val();
    arrayTodo.push(inpText)
    render(arrayTodo)
}

$(document).on('click', '.block1 button', () => {
    addTask()
})



