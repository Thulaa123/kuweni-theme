var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) { //6:00 pm
    greeting = 'Hi, Good evening !';
}else if(hourNow > 12 ){ //12:00 pm
    greeting = 'Hi, Good afternoon !';
}else if(hourNow > 0){ // 12:00 midnight
    greeting = 'Hi, Good morning !';
}else {
    greeting = 'Hi, Welcome back!';
}

document.write('<h3 class="text-xl font-semibold text-slate-700 dark:text-navy-100">' + greeting + '</h3>');