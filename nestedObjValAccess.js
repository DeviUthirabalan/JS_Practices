const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var obj = {
  a: {
    b: {
      c: '6sense',
    },
    d: 1234,
    e: false,
    f: {
      j: null,
    },
  },
};
function findObj(object, str) {
  let charArr = str.split('.');
  let temp = object[charArr[0]];
  console.log('temp1', charArr);
  for (let i = 1; i <= charArr.length - 1; i++) {
    temp = temp[charArr[i]];
  }
  return temp;
}
console.log('ll', findObj(obj, 'a.d')); // 1234
console.log(findObj(obj, 'a.b.c')); // 6sense
// console.log(findObj(obj, 'a.b')); // {c: "6sense"}
// console.log(findObj(obj, 'a.b.c.d')); // undefined
// console.log(findObj(obj, 'a.d.e')); // undefined
// console.log(findObj(obj, 'a.e')); // false
// console.log(findObj(obj, 'a.b.e')); // undefined
// console.log(findObj(obj, 'a.f.j')); // null
