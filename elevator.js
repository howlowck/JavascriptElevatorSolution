var tostr = require('tostr')
var timePerFloor = 25;  // in milliseconds
var numElevators = 32;
var elevatorInUse = [];
//var iterator;

function initializeElevators() {
    for (var i = 0; i <= numElevators; i++)
    {
        elevatorInUse[i] = 0;   // Not in use
    }
}

function * readElevatorRequestFromFile () {
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('elevatorRequests.txt')
    });

    lineReader.on('line', function(line) {
        console.log('Line from file: ', line);
    });
}

function run() {
    console.log('Beginning the elevator challenge - run 1');
    var iterator = readElevatorRequestFromFile();   // TODO: need to read async
    var request = iterator.next();
    //console.log(tostr(request.done));   // This value is a hint.  

    while (request.done === false)
    {
        // Parsing out the request
        var items = request.value.split(" ");
        var toFloor = items[0];
        var fromFloor = items[1];
        console.log("Processing request from floor " + tostr(fromFloor) + " to floor " + tostr(toFloor) );
        request = iterator.next();
    }
}

function run2() {
    console.log('Beginning the elevator challenge - run 2');
    iterator = readElevatorRequestFromFile();   // TODO: need to read async

    for (var i = 0; i <= numElevators; i++)
    {
        allocateElevator(i);
    }
}

function allocateElevator(elevatorNum) {
    var request = iterator.next();
    if (!request.done)
    {
        // Parsing out the request
        var items = request.value.split(" ");
        var fromFloor = items[0];
        var toFloor = items[1];
        elevatorInUse[elevatorNum] = 1;
        moveElevator(elevatorNum, fromFloor, toFloor);
        request = iterator.next();
    }
    else {
        console.log("Done!");
    }
}

function moveElevator(elevator, fromFloor, toFloor) {
    console.log("Moving elevator " + tostr(elevator) + " from " + tostr(fromFloor) + " to " + tostr(toFloor));
    
    // Start timer based on the distance between floors
    var distance = Math.abs(fromFloor - toFloor);
    setTimeout(elevatorArrived(elevator), distance * timePerFloor);
}

function elevatorArrived(elevatorNum) {
    console.log("Elevator " + tostr(elevatorNum) + " arrived!");
    elevatorInUse[elevatorNum] = 0;     // available again, so reassign
    allocateElevator(elevatorNum);
}

run2();      // or you are welcome to start with run sample code if you prefer

