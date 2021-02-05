// function output(str) {
//     console.log(str)
// }

// output('hello')


// function sum(num1, num2) {
//     alert(num1 + num2);
// }
// let n1 = 82;
// let n2 = 65;
// sum(n1, n2);


// function concat(str1, str2) {
//     return (str1 + str2);
// }
// s1 = 'hello ';
// s2 = 'world';
// let x = (concat(s1, s2), ' my name is alex')



// function dec(num) {
//     if(num > 0) {
//         console.log(num)
//         num--;
//         return dec(num)
//     }
// }
// dec(12)



// function buttonClick() {
//     document.write('<h1> You have clicked the button </h1>');
//     document.write('<button onclick="buttonClick()">Нажми на меня</button>')

// }


// function buttonClick() {
//    let space = document.getElementById('space');
//    space.innerHTML += '<br> Dont touch my button'
// }

function calculate() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let result = document.getElementById('result');

    let value1 = Number(num1.value);
    let value2 = Number(num2.value);
    result.innerHTML = value2 / (value1 * 2);
    
   // let bmi = mass / (height * height);
}