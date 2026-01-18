const delayMessage = () => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve('Hello after 1 second');
    },1000)
  })
}

delayMessage()
.then(msg => console.log(msg));


const doubleNumber = (num) => {
  return new Promise((resolve) => {
    resolve(num * 2);
  })
}
doubleNumber(5)
.then(value => console.log(value));


const checkAge = (age) => {
  return new Promise((resolve,reject) => {
    if(age>=18){
      resolve('Access granted!');
    }
    else if(age<18){
      reject('Access denied!');
    }
  })

}

checkAge(22)
.then(value => console.log(value))
.catch(value => console.log(value));


const addFive = (num) => {
  return new Promise((resolve) => {
    resolve(num + 5);
  })
}
addFive(10)
.then(value => addFive(value))
.then(value => console.log(value));


const fetchData = () => {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve('Data recieved!');
    },2000);
  })
}
fetchData()
.then(msg => console.log(msg));


const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("Cannot divide by zero");
    else resolve(a / b);
  });
};
divide(10,0)
.then(result => console.log(result))
.catch(result => console.log(result));


firstPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('First');
  },1000);
})

secondPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('second')
  },2000);
})
Promise.all([firstPromise,secondPromise])
.then(result => console.log(result));


const loginUsername = (userName) => {
  return new Promise((resolve,reject) => {
    if(userName === 'admin'){
      resolve('welcome');
    }
    else{
      reject('invalid user');
    }
  })
}
loginUsername('admin').then(value => console.log(value))
.catch(err => console.log(err));


const checkStock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
       resolve('stock available');
   },1000)
  })
}

const processPayment = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('payment processed')
    },1000)
  })
}

const shipOrder = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('order shipped');
    },1000)
  })
}
checkStock().then(msg => console.log(msg));
processPayment().then(msg => console.log(msg));
shipOrder().then(msg => console.log(msg));
console.log('order completed');
