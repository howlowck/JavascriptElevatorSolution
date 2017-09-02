var timePerFloor = 500  // in milliseconds
var numElevators = 32
var elevators = []
// var iterator;
var requestQueue = []
function initializeElevators () {
  for (var i = 0; i <= numElevators; i++) {
    elevators.push({
      current: 1,
      inUse: false
    })
  }
}

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('elevatorRequests.txt')
})

lineReader.on('line', function (line) {
  let requestObject = {
    from: +line.split(' ')[0],
    to: +line.split(' ')[1]
  }
  requestQueue.push(requestObject)
})

setInterval(() => {
  if (requestQueue.length === 0) {
    return
  }
  processRequest(requestQueue.shift())
}, 10)

function processRequest (requestObj) {
  var diff = Math.abs(requestObj.from - requestObj.to)
  var durationToFloor = diff * timePerFloor
  let myElevator = elevators.filter((elevator) => !elevator.inUse)[0]
  if (!myElevator) {
    requestQueue.unshift(requestObj)
    return
  }
  var durationToInitialFloor = Math.abs(myElevator.current - requestObj.from)
  let index = elevators.indexOf(myElevator)
  myElevator.to = requestObj.to
  myElevator.from = requestObj.from
  myElevator.inUse = true
  console.log('assigning elevator ' + index + ' to use')
  setTimeout(() => {
    myElevator.inUse = false
    console.log('elevator ' + index + ' not in use anymore, arrived on ' + myElevator.to + ' floor')
  }, durationToFloor + durationToInitialFloor)
}

initializeElevators()

// function run () {
//   console.log('Beginning the elevator challenge - run 1')
//   var iterator = readElevatorRequestFromFile()   // TODO: need to read async
//   var request = iterator.next()
//     // console.log(tostr(request.done));   // This value is a hint.

//   while (request.done === false) {
//         // Parsing out the request
//     var items = request.value.split(' ')
//     var toFloor = items[0]
//     var fromFloor = items[1]
//     console.log('Processing request from floor ' + tostr(fromFloor) + ' to floor ' + tostr(toFloor))
//     request = iterator.next()
//   }
// }

// function run2 () {
//   console.log('Beginning the elevator challenge - run 2')
//   iterator = readElevatorRequestFromFile()   // TODO: need to read async
//   iterator.next() // {value: undefined, done: true}
//   for (var i = 0; i <= numElevators; i++) {
//     allocateElevator(i)
//   }
// }

// function allocateElevator (elevatorNum) {
//   var request = iterator.next()
//   if (!request.done) {
//         // Parsing out the request
//     var items = request.value.split(' ')
//     var fromFloor = items[0]
//     var toFloor = items[1]
//     elevatorInUse[elevatorNum] = 1
//     moveElevator(elevatorNum, fromFloor, toFloor)
//     request = iterator.next()
//   } else {
//     console.log('Done!')
//   }
// }

// function moveElevator (elevator, fromFloor, toFloor) {
//   console.log('Moving elevator ' + tostr(elevator) + ' from ' + tostr(fromFloor) + ' to ' + tostr(toFloor))

//     // Start timer based on the distance between floors
//   var distance = Math.abs(fromFloor - toFloor)
//   setTimeout(elevatorArrived(elevator), distance * timePerFloor)
// }

// function elevatorArrived (elevatorNum) {
//   console.log('Elevator ' + tostr(elevatorNum) + ' arrived!')
//   elevatorInUse[elevatorNum] = 0     // available again, so reassign
//   allocateElevator(elevatorNum)
// }

// run2()      // or you are welcome to start with run sample code if you prefer
