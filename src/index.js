console.log('Init !');

let x = 1;

if (x === 1) {
    let x = 2;

    console.log('x inside the if :' + x);
    // expected output: 2
}

console.log('x outside the if :' + x);
// expected output: 1

let y = () => {
    console.log('init ES6 function');
};

y();


(() => {
    console.log('Anonyme init ES6 function');
})();