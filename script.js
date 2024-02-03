const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
//função para adicionar uma nova tarefa 
function addTask(){
    //Checa se tem imputo vazio e da um alerta
    if(inputBox.value.trim() === '') {
        alert('Please enter a task');
}
else{
    //se ouver texto adiciona um novo li na lista
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    //cria um span com a imagem de X para tirar a tarefa
    let span = document.createElement('span');
    span.innerHTML = 'x'; //'<img src="cross-circle.png">';
    li.appendChild(span);
    }
    //limpa o input
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();