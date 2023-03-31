// function hey(){
//     let counter = 0;

//     return {
//         incrementCounter(){
//             return counter++;
//         },

//         decrementCounter(){
//             return counter--;
//         },

//         showCounter(){
//             return console.log(counter);
//         }
//     }
// };


// const invoked = hey();
// invoked.incrementCounter();
// invoked.incrementCounter();
// invoked.incrementCounter();
// invoked.incrementCounter();
// invoked.incrementCounter();


// invoked.decrementCounter();
// invoked.decrementCounter();
// invoked.decrementCounter();
// invoked.decrementCounter();
// invoked.decrementCounter();

// invoked.showCounter();

function Person(){
    this.counter = 0;

    this.decrementCounter = () => {
        this.counter -= 1
    }

    this.incrementCounter = () => {
        this.counter += 1
    }

    this.showCounter = () =>{
        
        return this.counter;
    }

    
}
// const person = new Person(); 
// const personTwo = new Person(); 

// person.incrementCounter()
// person.incrementCounter()
// person.incrementCounter()
// person.decrementCounter();
// person.decrementCounter();
// person.decrementCounter();


// personTwo.incrementCounter();
// personTwo.incrementCounter();
// personTwo.incrementCounter();

// console.log(personTwo.showCounter());
// console.log(person.showCounter());



// function printNumber() {
//     for(let i = 1; i <= 60; i++){
//         (function (i){
//         const startTime = performance.now();
//         setTimeout(() => {
//             console.log(`the number is ${i}`);
//             const endTime = performance.now();
//             const timeDiff = endTime - startTime;
//             console.log(timeDiff)
//         }, (i * 1000));
//     })(i)
// }
// }

// function x() {
//     for(var i = 1; i<=5; i++){
//      setTimeout(function() {
//      console.log(i);
//      }, i*1000);
//      }
//      console.log("Namaste Javascript");
//     }
//     x();
  

const obj = {
    key1 : "one",
    key2 : true,
    key3 : 3
}

// for (const key in obj) {
//     console.log(obj[key]);
// }


const clickMe =  (function (){
    let localVar = 0;
    const incrementCounter = () => {
        console.log("clicked", ++localVar);
    }
    const decrementCounter = () => {
        console.log("clicked", --localVar);
    }
    const resetCounter = () => {
        localVar = 0;
    }
    return {
        decrementCounter,
        incrementCounter,
        resetCounter
    }
})();


// const clickMEbtn = document.getElementById("clickMe")
// clickMEbtn.addEventListener("click", clickMe.incrementCounter)

// document.getElementById("reset").addEventListener("click", clickMe.resetCounter)
// document.getElementById("decre").addEventListener("click", clickMe.decrementCounter)

const x = (function circle (){
    
    function area(r){
        const area = [];

        for (const i of r) {
            area.push(Math.round((Math.PI * i *i)))
        }
        return area
    }
    function circumfrence(r){
        const area = [];

        for (const i of r) {
            area.push(Math.round((2 * Math.PI * i)))
        }
        return area
    }
    function dia(r){
        const area = [];

        for (const i of r) {
            area.push(Math.round((2 * i)))
        }
        return area
    }

    return {
        area, circumfrence, dia
    }

})();

// const myCircle = circle();
// const area = myCircle.area([5]);
// console.log(x.dia([2]));

// 



const people = [
    { firstName: 'John', lastName: 'Doe', marks: 52 },
    { firstName: 'Jane', lastName: 'Doe', marks: 30 },
    { firstName: 'Bob', lastName: 'Smith', marks: 40 },
    { firstName: 'Alice', lastName: 'Johnson', marks: 25 }
  ];

const result = people.reduceRight((count, person) => {
  const {age} = person;
  count[age] = (count[age] || 0) + 1;
// if (count[age]) {
//     count[age] += 1;
// }
// else{
//     count[age] = 1;
// }

// count[age] = (count[age] || 0) ? count[age] += 1 : count[age] = 1 
  return count;

}, {})

// const result2 = people.filter((x) => {
//     const arr = []
//     const {age, firstName} = x;
    
//     if (age <= 30) {
//         arr.push(x.firstName);
//         return x.firstName;
//     }
    
// })

// console.log(result2);

const result2 = people.reduce((acc, crr) => {
    const {age, firstName} = crr
    if (age <= 30) {
        acc.push(firstName)
    }
    return acc
}, []);


// console.log(result2);


const student = [
    { firstName: 'John', lastName: 'Doe', marks: 52 },
    { firstName: 'Jane', lastName: 'Doe', marks: 10 },
    { firstName: 'Bob', lastName: 'Smith', marks: 40 },
    { firstName: 'Alice', lastName: 'Johnson', marks: 25 }
  ];

const resulte = student.filter((x, i, arr) => {

    if (x.marks <= 30) {
        x.marks += 20;
        
    }

    arr.push(x.marks)

    return arr

})

console.log(resulte);
