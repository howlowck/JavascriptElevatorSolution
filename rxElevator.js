var Rx = require('rxjs/Rx')
var numberOfRequests = 100
/** Async Declaration Section */

var simulatedMaxDuration = 2000 // in Ms
var timerSimulatorObservable = Rx.Observable.create((observer) => {
  let i = 0
  function loop (timeout) {
    if (i === numberOfRequests) {
      return
    }
    setTimeout(() => {
      observer.next()
      loop(Math.random() * simulatedMaxDuration)
    }, timeout)
    i++
  }

  loop(Math.random() * simulatedMaxDuration)
})

var lineObservable = Rx.Observable.create((observer) => {
  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('elevatorRequests.txt')
  })
  lineReader.on('line', observer.next.bind(observer))
  lineReader.on('close', observer.complete.bind(observer))
})

/** Business Logic Session */
Rx.Observable
  .zip(timerSimulatorObservable, lineObservable, (timer, line) => line)
  .map((line) => ({
    from: +line.split(' ')[0],
    to: +line.split(' ')[1]
  }))
  .subscribe((request) => {
    console.log(request)
  })
