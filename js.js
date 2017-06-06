// on ES6
document.getElementById('rezult').onclick = function rezultF() {
    let number = document.getElementById('number').value;

    let rezult = (a=+number) => {
        let b=1;
        for(let i=1; i<=4; i++){
            b = b*a;
            console.log(a);
            console.log(b);
        }
        document.getElementById('out').innerHTML = `число в степени 4: ${a}`;
    };
    rezult();
};

document.getElementById('rezult2').onclick = function rezultF() {
    let rate = document.getElementById('rate1').value;
    let number = document.getElementById('number1').value;

    if( isNaN(rate) || isNaN(number)){
        document.getElementById('out2').innerHTML = `Введите число`;
    }
    else { let rezult = (a=+rate, c=+number) => {
        let b=1;
        for(let i=1; i<=a; i++){
            b = b*c;
            console.log(c);
            console.log(b);
        }
        document.getElementById('out2').innerHTML = `число ${number} в степени ${rate} : ${b}`;
    };
        rezult();
    }

};

data = {
    'name':'Иванов Иван',
    'foto':'https://cdn0.iconfinder.com/data/icons/yooicons_set09_halloween/128/cheshire_cat.png',
    'comments':'Все супер - мне понравилось',
    'date':'2 июня 2017'
};
let getData = () => {document.getElementById('out3').innerHTML =`<div class="block-comments"><p class="name">${data.name}</p><img src="${data.foto}" alt=""><p class="comments">${data.comments}</p><p class="date">${data.date}</p></div>`}
getData();

// function getData() {
//     let out = `<div class="block-comments"><p class="name">${data.name}</p><img src="${data.foto}" alt=""><p class="comments">${data.comments}</p><p class="date">${data.date}</p></div>`
//     document.getElementById('out3').innerHTML = out;
// }
// getData();


