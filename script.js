const plus = (num) => {
  return function(two) {
    console.log(num + two)
      return num + two
  }
}
const minus = (num) => {
  return function(two) {
    console.log(two - num)
      return two - num
  }
}
const multiply = (num) => {
  return function(two) {
    console.log(num * two)
      return num * two
  }
}
const split = (num) => {
  return function(two) {
    console.log(num / two)
      return num / two
  }
}


const test = (num,func) => {
  if (func === undefined) {
      return num
  } else {
      return func(num);
  }
}

const two = (callback) => {
  return test(2, callback)
}
const three = (callback) => {
  return test(3, callback)
}
const five = (callback) => {
  return test(5, callback)
}
const six = (callback) => {
  return test(6, callback)
}
const eight = (callback) => {
  return test(8, callback)
}
const nine = (callback) => {
  return test(9, callback)
}

six(plus(nine())); // должно вернуть 15
nine(minus(three())); // должно вернуть 6
five(multiply(five())); // должно вернуть 25
eight(split(two())); // должно вернуть 4