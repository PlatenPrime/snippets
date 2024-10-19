function foo() {

    bar();
    console.log('foo');
}

function bar() {
    console.log('bar');
}


foo();






const asyncTimeoutFunc = async () => {
    setTimeout(() => console.log('await setTimeout()'), 0);
}

const asyncFunc = async () => {
    new Promise((resolve, reject) => {
        resolve('foo #1');
    })
        .then((result) => {
            console.log(result);
            return 'foo #2';
        })
        .then((result) => {
            console.log(result);
            return 'foo #3';
        })
        .then((result) => {
            setTimeout(() => console.log(result)
            , 0);
            return 'foo #4';
        })
        .then((result) => {
            setTimeout(() => console.log(result)
            , 60);
            return 'foo #5';
        })
        .then((result) => {
            setTimeout(() => console.log(result)
            , 20);
            return 'foo #6';
        })

}


console.log('Script start');

setTimeout(() => console.log('setTimeout()'), 45);

console.log('asyncFunc()', asyncFunc());

Promise.resolve()
    .then(() => console.log('Promise.then() #1'))
    .then(() => console.log('Promise.then() #2'))
    .then(() => console.log('Promise.then() #3'));

console.log(' asyncTimeoutFunc()', asyncTimeoutFunc());



console.log('Script end');

// LOGS:
//   Script start
//   Script end
//   Promise.then() #1
//   Promise.then() #2
//   setTimeout()