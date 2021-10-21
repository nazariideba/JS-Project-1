let text = document.querySelector('.first');
let area = document.querySelector('textarea');

let buttonEdit = document.querySelector('.edit');
buttonEdit.addEventListener('click', function() {
    document.querySelector('.box1').style.display = 'block';
    document.querySelector('.box2').style.display = 'none';
    area.value = text.innerHTML;
})

let buttonSave = document.querySelector('.save');
buttonSave.addEventListener('click', function() {
    document.querySelector('.box1').style.display = 'none';
    text.innerHTML = area.value;
})

let buttonStyle = document.querySelector('.style');
buttonStyle.addEventListener('click', function() {
    document.querySelector('.box2').style.display = 'block';
    document.querySelector('.box1').style.display = 'none';
})

let buttonRadio = document.querySelector('.radio-btn');
buttonRadio.addEventListener('click', function(event) {
    text.style.fontSize = event.target.value;
})

let select1 = document.querySelector('.select1');
select1.addEventListener('change', function(event) {
    text.style.fontFamily = event.target.value;
})

let chkBold = document.querySelector('[name="checkbox-bold"]');
chkBold.addEventListener('click', function(event) {
    if(event.target.checked) {
        text.style.fontWeight = event.target.value; 
    }
    else {
        text.style.fontWeight = 'normal';
    }
})

let chkCursive = document.querySelector('[name="checkbox-cursive"]');
chkCursive.addEventListener('click', function(event) {
    if(event.target.checked) {
        text.style.fontStyle = event.target.value;  
    }
    else {
        text.style.fontStyle = 'normal';
    }

})

let buttonTextColor = document.querySelector('.text-color');
buttonTextColor.addEventListener('click', function() {
    document.querySelector('.box3').style.display = 'block';
})

document.querySelector('.text-colors').addEventListener('click', function(event) {
    text.style.color = event.target.style.color;
    document.querySelector('.box3').style.display = 'none';
})

let buttonBgColor = document.querySelector('.bg-color');
buttonBgColor.addEventListener('click', function() {
    document.querySelector('.box4').style.display = 'block';
})

document.querySelector('.bg-colors').addEventListener('click', function(event) {
    text.style.background = event.target.style.background;
    document.querySelector('.box4').style.display = 'none';
})

let buttonAdd = document.querySelector('.add')
buttonAdd.addEventListener('click', function() {
    document.querySelector('.container1').style.display = 'none';
    document.querySelector('.add-box1').style.display = 'block';
})

let buttonTable = document.querySelector('.add-table');
buttonTable.addEventListener('click', function() {
    document.querySelector('.container3').style.display = 'block';
})

let buttonList = document.querySelector('.add-list');
buttonList.addEventListener('click', function() {
    document.querySelector('.container4').style.display = 'block';
})


let buttonCreateTable = document.querySelector('.button4-table');
let rows = document.getElementById('rows');
let cols = document.getElementById('cols');
let widthTd = document.getElementById('width-td');
let heightTd = document.getElementById('height-td');
let borderTd = document.getElementById('border-width');
let borderColor = document.getElementById('border-color');
buttonCreateTable.addEventListener('click', function createTable() {
    let table = '';
    table+= "<table>";
    for(let i=1; i<=rows.value; i++) {
        table+= "<tr>";

        for(let j=1; j<=cols.value; j++) {
            table+= `<td style='width:${widthTd.value}px; height:${heightTd.value}px; border: ${borderTd.value}px solid ${borderColor.value}'> TD </td>`;
        } 
        table+= "</tr>";
    }
    table+= "</table>";
    area.value += table;
    document.querySelector('.container1').style.display = 'block';
    document.querySelector('.add-box1').style.display = 'none';
    document.querySelector('.container3').style.display = 'none';
    buttonTable.checked = false;
})

let buttonCreateList = document.querySelector('.button4-list');
let countLi = document.getElementById('count-li');
let typeLi = document.getElementById('type-li');
buttonCreateList.addEventListener('click', function() {
    let table = '';
    table += "<ul>";
    for(let i=1; i<=countLi.value; i++) {
        table+= `<li style='list-style-type:${typeLi.value}'> item${i} </li>`;
    }
    table += "</ul>";
    area.value += table;
    document.querySelector('.container1').style.display = 'block';
    document.querySelector('.add-box1').style.display = 'none';
    document.querySelector('.container4').style.display = 'none';
    buttonList.checked = false;
})
