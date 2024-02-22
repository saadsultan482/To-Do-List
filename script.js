const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// add task to list
function addTask()
{
    if(inputBox.value ==='')
    {
        alert("You must write your task!");

    }
    else
        {
            let li = document.createElement("li"); //create list
            li.innerHTML= inputBox.value;
            listContainer.appendChild(li); //display task in list
            let span = document.createElement("span");
            span.innerHTML="\u00d7";
            li . appendChild(span);
        }
        inputBox.value = "";
        saveData()
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
