// Code your solution in this file!
const d = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const drivers2 = ['Antonias', 'Nuru', 'Amari', 'Mo', 'Frank'];

function returnFirstTwoDrivers(drivers){
    return [drivers[0],drivers[1]]
}

function returnLastTwoDrivers(drivers){
    return [drivers[drivers.length - 2],drivers[drivers.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function(value) {
      return multiplier * value
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn){
    // if (fn == returnFirstTwoDrivers){
    //     return returnFirstTwoDrivers(drivers)
    // }
    // else if (fn == returnLastTwoDrivers){
    //     return returnLastTwoDrivers(drivers)
    // }


    return fn(drivers)
}