async function async1() {
  console.log(2);
  await async2(); //3
  console.log(7);
  await async3();
  console.log(10);
  await async4();
  console.log(13);
}

async function async2() {
  console.log(3);
}

async function async3() {
  console.log(8);
}

async function async4() {
  console.log(11);
}

console.log(1);

setTimeout(function () {
  console.log(14);
}, 0);

async1();

console.log(4);

new Promise(function (resolve) {
  console.log(5);
  resolve();
})
  .then(function () {
    console.log(9);
  })
  .then(function () {
    console.log(12);
  });

console.log(6);
