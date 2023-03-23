// task_01.
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let number = "";
for (let i = 10; i <= 20; i += 1) {
    number += `${i}, `;
}
document.getElementById("task_01").innerHTML = number;


// task_02.
// Вивести квадрати чисел від 10 до 20.
let numSqu = "";
for (let i = 10; i <= 20; i++) {
    index = Math.pow(i, 2);
    numSqu += `${index}, `;
}
document.getElementById("task_02").innerHTML = numSqu;


// task_03.
// Вивести таблицю множення на 7.
multTabSev = "";
for (let i = 1; i <= 10; i++) {
    index = i * 7;
    multTabSev += `${i} * 7 = ${index} <br>`;
}
document.getElementById("task_03").innerHTML = multTabSev;


// task_04.
// Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
document.getElementById("task_04").innerHTML = sum;


// task_05.
// Знайти добуток усіх цілих чисел від 15 до 35.
let mult = 1;
for (let i = 15; i <= 35; i++) {
    mult *= i;
}
document.getElementById("task_05").innerHTML = mult;


// task_06.
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum2 = 0;
let aveVal = "";
for (let i = 1; i <= 500; i++) {
    sum2 += i;
    aveVal = sum2 / 500;
}
document.getElementById("task_06").innerHTML = aveVal;


// task_07.
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum3 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum3 += i;
    }
}
document.getElementById("task_07").innerHTML = sum3;


// task_08.
// Вивести ві числа в діапазоні від 100 до 200 кратні 3.
let numMultThree = "";
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        numMultThree += `${i}, `;
    }
}
document.getElementById("task_08").innerHTML = numMultThree;


// task_09.
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// task_10.
// Визначити кількість його парних дільників.
// task_11.
// Знайти суму його парних дільників.
let init = () => { 
    let number2 = prompt("Введіть натуральне число");
    let n2 = Number(number2);
    let numAllDiv = "";
    let numQuan = 0;
    let sumNumQuan = 0;
    if (isNaN (n2) || n2 < 1) {
        alert("Ви ввели не натуральне число, спробуйе ще раз");
        return init;                                        //? не визивается
    }
    for (let i = 0; i <= n2; i++) {
        if (n2 % i === 0) {
            numAllDiv += `${i}, `;
            if (i % 2 === 0) {
                numQuan++;
                sumNumQuan += i;
            }
        }
    }
    document.getElementById("task_09").innerHTML = numAllDiv;
    document.getElementById("task_10").innerHTML = numQuan;
    document.getElementById("task_11").innerHTML = sumNumQuan;
}
init();


// task_12.
// Надрукувати повну таблицю множення від 1 до 10.
compMultTab = "";
for (let i = 1; i <= 10; i++) {
    for (let index = 1; index <= 10; index++) {
        indexMult = index * i;
        compMultTab += `${i} * ${index} = ${indexMult} <br>`;
    }
}
document.getElementById("task_12").innerHTML = compMultTab;