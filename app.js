// ex - 4: kiểm tra số nguyên tố
// let number2 = +prompt("Nhập số để check nào:");
// let check = 0;
// let seach = (Prime) => {
//   if (Prime > 2) {
//     for (let j = 2; j < Prime; j++) {
//       if (Prime % j === 0) {
//         check++;
//       }
//     }
//     if (check > 0) {
//       return console.log("false");
//     } else {
//       return console.log("true");
//     }
//   } else if (Prime === 2) {
//     return console.log("true");
//   } else {
//     return console.log("false");
//   }
// };
// seach(number2);

// ex - 5: tìm chuỗi dài nhất
/*
let arr5 = ["Black", "Pink", "Green", "Blue24465", "Yellow"]; //prompt("Nhập mảng:");
//let arr = arr5.split(",");
let temp1 = 0;
let temp3 = 0;
let index = arr5.length - 1;
let resul = 0;

let color = () => {
  for (let i = 0; i < arr5.length; i++) {
    for (let j = i + 1; j < arr5.length; j++) {
      temp1 = arr5[i].length;

      temp3 = arr5[j].length;

      if (temp1 > temp3) {
        resul = arr5[i];
        arr5[i] = arr5[j];
        arr5[j] = resul;
      }
    }
  }

  console.log(arr5[index]);
};

color(); */

// ex - 6: tính SUM các số chẵn
/*
let arr6 = [1, 2, 2, 3, 4, 5, 6, 6, 7];
let sum = function (par) {
  let even = 0;
  for (let i = 0; i < par.length; i++) {
    if (par[i] % 2 === 0) {
      even += par[i];
    }
  }
  return console.log(even);
};
sum(arr6);
*/

// ex - 7: tìm số max thứ 2
/*
let arr7 = [3, 5, 7, 6, 4, 8, 20, 55];

let maxNumber = function (params) {
  let temp = 0;
  let times = 0;
  for (let i = 0; i < params.length; i++) {
    for (let j = i + 1; j < params.length; j++) {
      if (params[i] > params[j]) {
        temp = params[i];
        params[i] = params[j];
        params[j] = temp;
      }
    }
    times = params.length - 2;
  }
  return console.log(params[times]);
};
maxNumber(arr7);
*/

// ex - 8: tính average(trung bình cộng)

let arr8 = [8, 9, 7, 4, 8];
let average = (x) => {
  let sum = 0;
  let temp = x.length;
  let tbc = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
    tbc = sum / temp;
  }
  return console.log(tbc.toFixed(1));
};
average(arr8);
