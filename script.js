const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
//function to add a new activity
function addTask(){
    //Checking if the input is empty and give an alert
    if(inputBox.value.trim() === '') {
        alert('Please enter a task');
}
else{
    //If there is any text it will add a li
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    //Creates a span with the image X to delete activities
    let span = document.createElement('span');
    span.innerHTML = 'x';
    li.appendChild(span);
    }
    //Cleans the input
    inputBox.value = '';
    saveData();
}
//A function that mark the activities as checked if pressed anywhere in the Li element
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }//if it is the Span element it understand that needs to delete the element
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// this is to save the information from the page
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
