// Collect input from Form by selecting dom with variables
let fileNumberDom = document.getElementById('input-file-num');
let fullNameDom = document.getElementById('input-name');
let contactNumberDom = document.getElementById('input-number');
let emailDom = document.getElementById('input-email');
let salaryDom = document.getElementById('input-salary');
let joiningDateDom = document.getElementById('input-date');
let showTheInfo = document.getElementById('show-employee-info');
// Collect input from Form by for updating the employee database selecting dom with variables
let editFileNumberDom = document.getElementById('edit-input-file-num');
let editFullNameDom = document.getElementById('edit-input-name');
let editContactNumberDom = document.getElementById('edit-input-number');
let editEmailDom = document.getElementById('edit-input-email');
let editSalaryDom = document.getElementById('edit-input-salary');
let editJoiningDateDom = document.getElementById('edit-input-date');
let editShowTheInfo = document.getElementById('edit-show-employee-info');
// Global
let frontMainDiv = document.getElementById('front_main');
let createNewForm = document.getElementById('enroll-form');
let editForm = document.getElementById('edit-enroll-form');
let EditDataIndex = ''
let employeeInfoArray = [];
getFromLocalStorage();
// Show or Hide the enroll Section
function showEnrollSection(event){
    event.preventDefault();
    if(createNewForm.style.display == 'none'){
        createNewForm.style.display = 'block';
        frontMainDiv.classList = 'blur';
    }
    else{
        createNewForm.style.display = 'none';
    }
}
// Cancel the enroll Section
function cancelEnrollSection(event){
    event.preventDefault();
    if(createNewForm.style.display == 'block'){
        createNewForm.style.display = 'none';
        frontMainDiv.classList.remove('blur');
    }
    else{
        createNewForm.style.display = 'block';
    }
}
// Get, Store and show added new employee
function addNewEmployee(event){
    event.preventDefault();
    if(fileNumberDom.value === '' || fullNameDom.value === '' || contactNumberDom.value === '' || emailDom.value === '' || salaryDom.value === '' || joiningDateDom.value === ''){
        alert('Please insert all value');
       }
       else{
            employeeInfoMain = {
                tarminate: false,
                fileNum: fileNumberDom.value,
                fullName: fullNameDom.value,
                contactNum: contactNumberDom.value,
                email: emailDom.value,
                Salary: salaryDom.value,
                JoinigDate: joiningDateDom.value
            }
            employeeInfoArray.push(employeeInfoMain);
            showEmployeeInfo();
            createNewForm.style.display = 'none';
            frontMainDiv.classList.remove('blur');
            fileNumberDom.value = '';
            fullNameDom.value = '';
            contactNumberDom.value = '';
            emailDom.value = '';
            salaryDom.value = '';
            joiningDateDom.value = '';
        }
}
// Show the data part from the enroll form
function showEmployeeInfo(){
    let showInfo = '';
    employeeInfoArray.map((v,i)=>{
        showInfo +=
        `<tr class='${v.tarminate == true?'terminate':''}'>
            <td class="td_1">${v.fileNum}</td>
            <td class="td_2">${v.fullName}</td>
            <td class="td_3">${v.contactNum}</td>
            <td class="td_4">${v.email}</td>
            <td class="td_5">${v.Salary}</td>
            <td class="td_6">${v.JoinigDate}</td>
            <!-- List Button -->
            <td class="td_btn">
                <button class="td_btn_m" type="button" onclick="editBtn(${i})">
                    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                </button>
            </td>
            <td class="td_btn">
                <button class="td_btn_m" type="button" onclick="deleteBtn(${i})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
            <td class="td_btn">
                <button class="td_btn_m" type="button" onclick="resignBtn(${i})">
                    <i class="fa-solid fa-user-xmark"></i>
                </button>
            </td>
        </tr>`
    })
    showTheInfo.innerHTML = showInfo;
    saveToLocalStorage();
}
// Delete the employee database
function deleteBtn(i){
    employeeInfoArray.splice(i,1);
    showEmployeeInfo();
}
// Resign the employee by showing a line through
function resignBtn(i){
    if(employeeInfoArray[i].tarminate == true){
        employeeInfoArray[i].tarminate = false
    }
    else{
        employeeInfoArray[i].tarminate = true
    }
    showEmployeeInfo();
}
// Edit the employee data
function editBtn(i){
    EditDataIndex = i
    if(editForm.style.display == 'none'){
        editForm.style.display = 'block'
        frontMainDiv.classList = 'blur';
    }
    else{
        editForm.style.display == 'none'
    }
    editFileNumberDom.value = employeeInfoArray[i].fileNum
    editFullNameDom.value = employeeInfoArray[i].fullName
    editContactNumberDom.value = employeeInfoArray[i].contactNum
    editEmailDom.value = employeeInfoArray[i].email
    editSalaryDom.value = employeeInfoArray[i].Salary
    editJoiningDateDom.value = employeeInfoArray[i].JoinigDate
}
// Update the employee data from editabel from
function renewEmployee(event){
    event.preventDefault();
    employeeInfoArray[EditDataIndex].fileNum = editFileNumberDom.value
    employeeInfoArray[EditDataIndex].fullName = editFullNameDom.value
    employeeInfoArray[EditDataIndex].contactNum = editContactNumberDom.value
    employeeInfoArray[EditDataIndex].email = editEmailDom.value
    employeeInfoArray[EditDataIndex].Salary = editSalaryDom.value
    employeeInfoArray[EditDataIndex].JoinigDate = editJoiningDateDom.value
    if(editForm.style.display == 'block'){
        editForm.style.display = 'none'
        frontMainDiv.classList.remove('blur');
    }
    else{
        editForm.style.display = 'block'
    }
    showEmployeeInfo()
}
// Cancel the editable enroll Section
function editCancelEnrollSection(event){
    event.preventDefault();
    if(editForm.style.display == 'block'){
        editForm.style.display = 'none';
        frontMainDiv.classList.remove('blur');
    }
    else{
        editForm.style.display = 'block';
    }
}
// saveToLocalStorage() == Saves the inputs to the local storage of the browser
function saveToLocalStorage(){
    localStorage.setItem('employeeInfo',JSON.stringify(employeeInfoArray));
}
// getFromLocalStorage() == Get the inputs to the local storage of the browser
function getFromLocalStorage() {
    let a = localStorage.getItem('employeeInfo');
    if(a !== null){
        employeeInfoArray = JSON.parse(a);
        showEmployeeInfo();
    }
}