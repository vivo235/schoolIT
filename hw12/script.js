// const numbers = [1, 2, 3, 4];    //1 задание

// numbers.forEach((item) => {
//   const result = item * 2;
//   console.log(result);
// });




// const pricesUAH = [80, 120, 200];
// pricesUAH.map((item) => {
//   const result = item * 41;
//   console.log(result)
// })




// const numbers = [5, 12, 8, 20, 3];
// const result = numbers.filter((item) => {
//   if (item > 10){
//     return true
//   }
// })
//  console.log(result)




// const names = ["Олег", "Анна", "Іван", "Артем"];

// const result = names.find((item) => {
//   if (item === "Артем"){
//     return true
//   }
// })
// console.log(result)


const subjects = ["математика", "українська мова"];

const result = (a) => {
  subjects.push(a);
}

result("Хімія");

console.log(subjects)


