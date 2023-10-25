// Selection the HTML dom
let totalBalanceDom = document.getElementById('totalBalance');
let totalIncomeDom = document.getElementById('totalIncome');
let totalExpenseDom = document.getElementById('totalExpenses');
let incomeNameDom = document.getElementById('incomeName');
let incomeAmountDom = document.getElementById('incomeAmount');
let expenseNameDom = document.getElementById('expenseName');
let expenseAmountDom = document.getElementById('expenseAmount');
let showHistoryDom = document.getElementById('mainList');
// Global
incomeExpenseArrey = [];
let totalIncome = 0;
let totalExpense = 0;
getFromLocalStroage();
// Add the Income
function addIncome(event){
    event.preventDefault();
    if(incomeNameDom.value == '' || incomeAmountDom.value == ''){
        alert('Please add a name or an amount');
    }
    else{
        let income = {
            type: 'income',
            name: incomeNameDom.value,
            amount: incomeAmountDom.value,
            time: getTime(),
            date: getDate()
        }
        incomeExpenseArrey.push(income);
        showHistory();
        incomeNameDom.value = '';
        incomeAmountDom.value = '';
    }
}
// Add the Expense
function addExpense(event){
    event.preventDefault();
    if(expenseNameDom.value == '' || expenseAmountDom.value == ''){
        alert('Please add a name or an amount');
    }
    else{
        let expense = {
            type: 'expense',
            name: expenseNameDom.value,
            amount: expenseAmountDom.value,
            time: getTime(),
            date: getDate()
        }
        incomeExpenseArrey.push(expense);
        showHistory();
        expenseNameDom.value = '';
        expenseAmountDom.value = '';
    }
}
// Show the history to the list area
function showHistory(){
    totalIncome = 0;
    totalExpense = 0;
    let historyElements = '';
    incomeExpenseArrey.map((v,i)=>{
        if(v.type == 'income'){
            totalIncome += Number(v.amount);
            historyElements +=
            `
            <li>
                <div class="list-prime color-one-border">
                    <!-- Top list -->
                    <div class="top-list">
                        <!-- Details -->
                        <div class="details">
                            <h3 id="listName${i}">${v.name}</h3>
                            <h3><span>$</span><span id="listAmount${i}">${v.amount}</span></h3>
                        </div>
                        <!-- Edit, ok and Delete button -->
                        <div class="buttons">
                            <button type="button" onclick="editList(${i})">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button type="button" onclick="updateList(${i})">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button type="button" onclick="deleteList(${i})">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Bot List -->
                    <div class="bot-list">
                        <h3>Crafted on:</h3>
                        <h3>${v.time}</h3>
                        <h3>${v.date}</h3>
                    </div>
                </div>
            </li>
            `
        }
        else{
            totalExpense += Number(v.amount);
            historyElements +=
            `
            <li>
                <div class="list-prime color-two-border">
                    <!-- Top list -->
                    <div class="top-list">
                        <!-- Details -->
                        <div class="details">
                            <h3 id="listName${i}">${v.name}</h3>
                            <h3><span>$</span><span id="listAmount${i}">${v.amount}</span></h3>
                        </div>
                        <!-- Edit, ok and Delete button -->
                        <div class="buttons">
                            <button type="button" onclick="editList(${i})">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button type="button" onclick="updateList(${i})">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button type="button" onclick="deleteList(${i})">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Bot List -->
                    <div class="bot-list">
                        <h3>Crafted on:</h3>
                        <h3>${v.time}</h3>
                        <h3>${v.date}</h3>
                    </div>
                </div>
            </li>
            `
        }
    })
    totalIncomeDom.innerHTML = totalIncome;
    totalExpenseDom.innerHTML = totalExpense;
    showHistoryDom.innerHTML = historyElements;
    calculateTotalBalance()
    saveToLocalStorage()
}
// Calculate the whole balance
function calculateTotalBalance(){
    let totalBalance = Number(totalIncome) - Number(totalExpense)
    totalBalanceDom.innerHTML = totalBalance
}
// Show Time
function getTime(){
    let date = new Date();
    let time = date.toLocaleString('en-US',{hour:'2-digit', minute:'2-digit', hour12: true});
    return time;
}
// Show Date
function getDate(){
    let date = new Date();
    let day = String(date.getDate()).padStart(2,'0');
    let month = date.toLocaleString('default',{month: 'long'});
    let year = String(date.getFullYear()).slice(-2);
    let maindate = `${day}-${month}-${year}`;
    return maindate;
}
// Delete List
function deleteList(i){
    incomeExpenseArrey.splice(i,1)
    showHistory()
}
// Edit List
function editList(i){
    let editName = document.getElementById(`listName${i}`)
    let editAmount = document.getElementById(`listAmount${i}`)
    editName.style.border = '2px solid black'
    editAmount.style.border = '2px solid black'
    editName.contentEditable = true
    editAmount.contentEditable = true
}
// Eidt done list
function updateList(i){
    let editName = document.getElementById(`listName${i}`)
    let editAmount = document.getElementById(`listAmount${i}`)
    incomeExpenseArrey[i].name = editName.innerText
    incomeExpenseArrey[i].amount = editAmount.innerText
    editName.contentEditable = false
    editAmount.contentEditable = false
    showHistory()
}
// Save Local Storage
function saveToLocalStorage(){
    localStorage.setItem('incomeExpenseArreySave',JSON.stringify(incomeExpenseArrey))
}
// Get Data from Local Stroage
function getFromLocalStroage(){
    let a = localStorage.getItem('incomeExpenseArreySave')
    if(a!==null){
        incomeExpenseArrey = JSON.parse(a)
        showHistory()
    }
}