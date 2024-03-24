// const student = {
//     name: "Binay",
//     age: 25,
//     eng: 45,
//     math: 34,
//     phy: 45,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(avg);
//     }
// }

// const mul = (a, b) => {
//     return a*b;
// }

// const mul = (a, b) => (a*b);

// console.log("khuntapingu");

// setTimeout( () => {
//     console.log("is a village");
// }, 3000);

// console.log("hello");

// const mul = () => {
//     console.log("by by");
// }

// setTimeout(mul, 2000);

// const squ = (n) => (n*n);

// console.log(squ(7));

// let id = setInterval( () => {
//     console.log("Hello World");
// },2000);


// setTimeout( () => {
//     clearInterval(id);
// },10000);

let num = [2, 4, 7, 8];

const arryAverage = (num) => {
    let res = 0;
    for(total of num) {
        res += total;
    }

    return res / num.length;
}

arryAverage(num);