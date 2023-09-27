document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  // console.log(form)
  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    buildTodo(e.target.new_task_description.value)
    let input = document.getElementById('new_task_description')
    input.value = " ";
  })
});

const buildTodo = (myTodos) => {
  // console.log(myTodos)
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', (e)=> {
    e.target.parentNode.remove()
  })
  btn.textContent = 'X'
  const currentTime = new Date();
  li.textContent = `${myTodos} ${currentTime.getHours()}:${currentTime.getMinutes()} `;
  li.appendChild(btn);
  // console.log(li);
  document.querySelector('#tasks').appendChild(li);
}


