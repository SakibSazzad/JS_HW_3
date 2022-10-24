function welcome(){
    var username = document.getElementById('name').value;
    document.getElementById('wlc').innerHTML='Welcome ' + username;

    if(username.length <= 5){
        document.getElementById('wlc').style.color='blue';
    }else if(username.length >= 10){
        document.getElementById('wlc').style.color='purple';
    }else{
        document.getElementById('wlc').style.color='orange'
    }
}

function showgrade(){
    var marks = document.getElementById('numbers').value;
    var results = document.getElementById('grade');

    if(marks >=80 && marks <= 100){
        results.innerText='Your Grade is A+';
    }else if(marks >= 70 && marks <= 79){
        results.innerText='Your Grade is A'
    }else if(marks >= 60 && marks <= 69){
        results.innerText='Your Grade is A-'
    }else if(marks >= 50 && marks <= 59){
        results.innerText='Your Grade is B'
    }else if(marks >= 40 && marks <= 49){
        results.innerText='Your Grade is C'
    }else if(marks >= 33 && marks <= 39){
        results.innerText='Your Grade is D'
    }else if(marks >= 0 && marks <= 32){
        results.innerText='Your are Fail'
    }else{
        alert('Police e dorbeh....;)')
    }
}

function oddeven(){
    var user_num = document.getElementById('getanum').value;
    var user_rslt = document.getElementById('oddevenrslt');
    if(user_num % 2 == 0){
        user_rslt.innerText='This is a  Even  Number'
        user_rslt.style.color='#307B1C'
    }else{
        user_rslt.innerText='This is a Odd Number'
        user_rslt.style.color='#5D1C7B'
    }
}

for( var i = 2000; i <= 2022; i++){
    var option = document.createElement('option');
    option.innerText = i;

    document.getElementById('year').appendChild(option);
}

for( var i = 1; i <= 12; i++){
    var month = document.createElement('option');
    month.innerText = i;

    document.getElementById('month').appendChild(month);
}

for(var i = 1; i <= 31; i++){
    var days = document.createElement('option');
    days.innerText = i;

    document.getElementById('day').appendChild(days);
}


var student = ['Tasin','Sazzad','Sakib','Rayhan','Nayem']

for(var i = 0; i <= 4; i++){
    console.log(student[i] + '<br>')
}

var teacher = ['Sazzad', 'nayem', 'Rifat', 'Mahi', 'hdsjhd', 'djfhffdj' , 'jdkjk']

for(var i = 0; i < teacher.length; i++){
    console.log(teacher[i])
}


var add = document.getElementById('add');
var num1 = document.getElementById('1stnum');
var num2 = document.getElementById('2ndnum');
var add_ruslt = document.getElementById('add_rslt');

add.addEventListener('click', function() {
    add_ruslt.innerText ='The Result is   '+ (Number(num1.value) + Number(num2.value))
})


for (var i = 100; i >= 1; --i) {
    document.write(i + '<br>');
}