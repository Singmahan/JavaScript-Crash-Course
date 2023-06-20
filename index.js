// const myName = 'Varayut';
// let height = 175;
// let isMale = false;
// let city = null;
// let bigNumber = 10n;

// console.log(myName, height, isMale, city, bigNumber);

// const person = {
//     name : 'Varayut',
//     height : 175,
//     city : 'Bangkok'

// };

// console.log(person.city);
// person.height = 180;
// console.log(person);

// person.weight = 70;
// console.log(person);

// const numbers = [5, 10, 15, 20];
// console.log(numbers[2]);

// numbers.push(25);
// console.log(numbers);

// numbers.pop(25);
// console.log(numbers);

// numbers.unshift(1);
// console.log(numbers);

// numbers.shift(1);
// console.log(numbers);

// let result = 10 + (5 * 2) / 2;
// console.log(result);

// let password = '';

// if(password === ''){
//     console.log('password is required');
// }else if(password.length >= 8 && password <= 12){
//    console.log('password is wlid');
// }else{
//    console.log('password is invalid');
// }

// function calculateVat(money, vat){
//    return money * vat / 100;
// }
// const totalVat = calculateVat(100, 7);
// console.log(totalVat);

// const totalVat10 = calculateVat(100, 10);
// console.log(totalVat10);

// for(let counter = 0; counter < 10; counter++){
//     if(counter === 5){
//         break;
//     }
//     console.log(counter);
// }

function appendImageELem(keyword, index){
   const imgElem = document.createElement('img');
   imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

   const galleryElem = document.querySelector('.gallery');
   galleryElem.appendChild(imgElem);
}
function removePhotos(){
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}
function searchPhotos(event){
    const keyword = event.target.value;

    if(event.key === 'Enter' && keyword !== ''){
        removePhotos();

        for(let i = 1; i <= 10; i++){
            appendImageELem(keyword, i);
        }
    }
}
function run(){
    // appendImageELem('dog', 1);
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhotos);
}
run();