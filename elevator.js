var puts = require('./lib/puts')
var gets = require('./lib/gets')

var maxPeople = 12;
var totalTime = 0;

var elevator = {
    currentFloor:0,
    numPassengers:0
}; 

var passenger = {
    startTime:0,
    endTime:0, 
    startFloor:0,
    endFloor:0
};

// TODO: elevators data structure - array of 32 elevator objects?  
// TODO: assume elevators all start at floor 1?  

function * readElevatorRequestFromFile () {
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('elevatorRequests.txt')
    });
    console.log('Did init work? ');
    lineReader.on('line', function(line) {
        console.log('Line from file: ', line);
        yield line;
    });
}

function run() {
    var iterator = readElevatorRequestFromFile();
    var request = iterator.next();

    while (!request.done)   // TODO: is that legal in JS?  
    {
        var items = request.value.split(" ");
        var toFloor = items[0];
        var fromFloor = items[1];
        console.log("Processing request from floor " + str(fromFloor) + " to floor " + str(toFloor) );
        request = iterator.next();
    }
}

// Parsing out the request
function processLine(line) {
    var items = line.split(" ");
    //var nu
}

function incrementTotalTime(time) {
    totalTime += time;
}

function findElevator(elevators) {
    // TODO: find the appropriate elevator to get passengers
}

function moveElevator(elevator, fromFloor, toFloor) {

}

function getOn(elevator) {
    // 
}

run();