// 1

function logNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(`${i} 'This is divisibleby 3'`);
    } else if (i % 5 === 0) {
      console.log('This is divisibleby 5');
    }
    if (i % 5 === 0 && i % 5 === 0) {
      console.log('Jackpot!');
    } else {
      console.log(i);
    }
  }
}

// logNumbers();

// 2
const myBtn = document.createElement('button');
myBtn.innerHTML = 'Task 2';
window.document.body.appendChild(myBtn);
myBtn.addEventListener('click', insertImg);
function insertImg() {
  console.log('clicked');
  const myImg = document.createElement('img');
  myImg.src = '';
  window.document.body.appendChild(myImg);
}

// 3

function myFetchFunction() {
  fetch('https://reqres.in/api/users')
    .then((respons) => respons.json())
    .then((data) => {
      const task3Box = document.getElementById('task3');
      const dataItems = data.data.slice(0, 3);
      console.log(dataItems);
      dataItems.forEach((element) => {
        let userName = document.createElement('p');
        userName.innerHTML = `${element.first_name} ${element.last_name}`;
        task3Box.appendChild(userName);
      });
    });
}

myFetchFunction();

// 4

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  logProduct() {
    const printPrice = document.createElement('p');
    printPrice.innerHTML = `${this.name} costs ${this.price} kr`;
    window.document.body.appendChild(printPrice);
  }
}

const table = new Product('table', 1200);
table.logProduct();
