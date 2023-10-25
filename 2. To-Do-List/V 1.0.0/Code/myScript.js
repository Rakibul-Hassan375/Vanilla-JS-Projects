// HTM Dom variables
// Input Text
let inputDom = document.getElementById('input_text');
// Unordered List
let listDom = document.getElementById('un_li');
// Global variables
let toDoListMain = [];
getFromLocalStroage()
// Function = Submitting the form, information will push to the global and shows information to the dom
function addtodolist(event){
    event.preventDefault();
    if(inputDom.value === ''){
        alert('Please add a text');
    }
    else{
        let inputMain = {
            check: false,
            text: inputDom.value,
            date: getTheDate(),
            time: getTheTime()
        }
        toDoListMain.push(inputMain);
        inputDom.value = '';
        showTheList();
    }
}
// Function = Show Information
function showTheList(){
    let toDoList = '';
    toDoListMain.map((v,i)=>{
        toDoList +=
        `<li class="info_main">
            <div class="custom-width">
                <span>
                    <input type="checkbox" class="custom-checkbox" onchange="checkBox(${i})" ${v.check == true? 'checked': ''}>
                </span>
                <span class="li_text ${v.check == true? 'task_done': ''}" id="li_main_text${i}">
                    ${v.text} 
                </span>
            </div>
            <div>
                <button type="submit" onclick="editBtn(${i})">
                    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                </button>
                <button type="submit" onclick="okBtn(${i})">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button type="button" onclick="dltButton(${i})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            </li>`
            toDoList +=
            `<li class="info">
                <span class="w3">
                    Created at:
                </span>
                <span class="w4">
                    ${v.date}
                </span>
                <span class="w5">
                    ${v.time}
                </span>
        </li>`
    })
    listDom.innerHTML = toDoList;
    saveToLocalStorage();
}
// Function = Checkbox
function checkBox(i){
    if(toDoListMain[i].check == true){
        toDoListMain[i].check = false;
    }
    else{
        toDoListMain[i].check = true;
    }
    showTheList();
}
// Function = Edit Button
function editBtn(i){
    let edit = document.getElementById(`li_main_text${i}`);
    edit.style.border = '2px solid black';
    edit.addEventListener('focus', function () {
        this.style.outline = 'none';
    });
    edit.addEventListener('blur', function () {
        this.style.outline = '';
    });
    edit.contentEditable = true;
}
// Function = Ok Button
function okBtn(i){
    let ok = document.getElementById(`li_main_text${i}`);
    toDoListMain[i].text = ok.textContent;
    ok.contentEditable = false;
    showTheList();
}
// Function = Delete
function dltButton(i){
    toDoListMain.splice(i,1);
    showTheList();
}
// Function = Will get date
function getTheDate(){
    let date = new Date();
    let day = String(date.getDate()).padStart(2,'0');
    let month = date.toLocaleString('default',{month: 'long'});
    let year = String(date.getFullYear()).slice(-2);
    let maindate = `${day}-${month}-${year}`;
    return maindate;
}
// Function = Will get time
function getTheTime(){
    let date = new Date();
    let time = date.toLocaleString('en-US',{hour:'2-digit',minute:'2-digit',hour12: true});
    return time;
}
// Function = Save to the Local Browser Storage
function saveToLocalStorage(){
    localStorage.setItem('toDoListMainSave',JSON.stringify(toDoListMain));
}
// Function = Get or Call the information from Local Browser Storage
function getFromLocalStroage(){
    let a = localStorage.getItem('toDoListMainSave');
    if(a !== null){
        toDoListMain = JSON.parse(a)
        showTheList()
    }
}