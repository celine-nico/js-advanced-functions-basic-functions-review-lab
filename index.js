let wrapAdjective = function(sentence = "*") {
    return function(adj = "special") {
      return `You are ${sentence}${adj}${sentence}!`
    }
}

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

const Calculator = {
    add: function(x, y) {
        return (x + y)
    },
    subtract: function(a, b) {
        return (a - b)
    },
    multiply: function(x, y) {
        return (x * y)
    },
    divide: function(a, b) {
        return (a / b)
    }
}

let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }