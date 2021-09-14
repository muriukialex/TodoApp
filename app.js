const submitBtn = document.querySelector('#submit');
const taskText = document.querySelector('#task');
const taskDate = document.querySelector('#date');


const taskHolder = document.querySelector('ol');


const createTask = (task,date) =>{
    return {
        task: task,
        date: date
    };
}
const taskObj = [];

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(taskText === null){
        return;
    }else{
        const containerDiv = document.createElement('div');

        const first_elementChild = document.createElement('li');
        first_elementChild.innerText = taskText.value;

        const second_elementChild = document.createElement('li');
        second_elementChild.innerText = taskDate.value;

        containerDiv.appendChild(first_elementChild);
        containerDiv.appendChild(second_elementChild);

        taskHolder.appendChild(containerDiv);

        const createdEntry = createTask(taskText.value, taskDate.value);

        taskObj.push(createdEntry);
        localStorage.setItem('taskEntry', JSON.stringify(taskObj));


        taskText.value = '';
        taskDate.value = '';
        // taskDateHolder.appendChild(taskDate.value);
    }
});



document.addEventListener('DOMContentLoaded',()=>{
    const items = JSON.parse(localStorage.getItem('taskEntry'));
    if(items !== null){
        document.querySelector('#previous').style.display = 'block';

        items.forEach(item=>{
            // console.log(item.task);
            // console.log(item.date);
    
            const containerDiv = document.createElement('div');
    
            const first_elementChild = document.createElement('li');
            first_elementChild.innerText = item.task;
    
            const second_elementChild = document.createElement('li');
            second_elementChild.innerText = item.date;
    
            containerDiv.appendChild(first_elementChild);
            containerDiv.appendChild(second_elementChild);
    
            taskHolder.appendChild(containerDiv);
        })
    }
});




const lighting = document.querySelector('#lighting');
const element = document.body;
lighting.addEventListener('click',()=>{
    element.classList.toggle('dark-mode');
    document.querySelector('#submit').style.background = '#fff';
    document.querySelector('#submit').style.color = '#000';
});