// var avgTemp = []

// avgTemp[0] = 31.9
// avgTemp[1] = 35.3
// avgTemp[2] = 42
// avgTemp[3] = 38
// avgTemp[4] = 25.5

// console.log(avgTemp[3])

// var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// console.log(daysOfWeek[3])
// console.log(daysOfWeek[4])
// console.log(daysOfWeek[5])

// for(day of daysOfWeek){
//   console.log('Hoje é ' + day)
// }


// for(var i=0;i<daysOfWeek.length;i++){
//   console.log('Hoje é dia:' + daysOfWeek[i])
// }

// // implemantando fibonacci

// var fibonacci = [];
// fibonacci[0] = 0;
// fibonacci[1] = 1;
// for(var i=2;i<20;i++){
//   fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
//   // console.log(fibonacci[i])
// }
// console.log(fibonacci)


// var numbers = [0,1,2,3,4,5,6,7,8,9]

// numbers[numbers.length]=10
// numbers[numbers.length]=11

 // add no final
// numbers.push(12)
// numbers.push(13)
// numbers.push(14)

// add no início
// numbers.unshift(-1)
// numbers.unshift(-2)
// numbers.unshift(-3)

// remover ultimo elemento

// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()

// // remover o primeiro elemento
// numbers.shift()
// numbers.shift()
// numbers.shift()


// removendo e inserindo elementos com splice

// numbers.splice(3,3) // remove os 3 elementos a partir da posição 3
// numbers.splice(3,0,3,4,5) // acrescenta 3 elemestos a partir da pocição 3
//console.log(numbers)

// arrays bi-dimensionais
var avgTempWeek = []

var month = []
var firstWeeks = []
var lastWeeks = []

var avgTempWeek1 = [33,25.2,19,27,23.4,41.6,25]
var avgTempWeek2 = [41,29,33,21.2,19.5,17,33.8]
var avgTempWeek3 = [13,45.7,18,7,13.4,21.5,15]
var avgTempWeek4 = [51,19,23,26.2,9.5,17.4,31.8]

// avgTempWeek[0] =avgTempWeek1
// avgTempWeek[1] =avgTempWeek2

// for(var i=0;i<avgTempWeek.length;i++){
//   for(var j=0;j<avgTempWeek[i].length;j++){
//     console.log(avgTempWeek[i][j])
//   }
// }

// firstWeeks = [avgTempWeek1, avgTempWeek2]
// lastWeeks = [avgTempWeek3, avgTempWeek4]

// month = [firstWeeks, lastWeeks]
// // console.log(month[[1][1][4]])

// for(var i =0; i<month.length;i++){
//   for(var j=0;j<month[i].length;j++){
//     for(var k=0;k<month[i][j].length;k++){
//       console.log(month[i][j][k])
//     }
//   }
// }

let a = 13
let b = 0
let c = ""

teste = 13 % 2
numInt = Math.floor(a/2)
console.log(teste)
console.log(numInt)