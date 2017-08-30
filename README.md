# JavaScript async challenge

For this challenge, you must build an elevator scheduler.  Assume that 
you are in a large office building (such as the AON Center in Chicago)
and there is a bank of 32 elevators.  A maximum of 12 people can fit on 
an elevator.  You must read in a text file and keep all of the elevators 
moving to shuttle people up and down.  (You can visualize each elevator 
as a separate thread, but remember that JavaScript is single-threaded.)

The format of the text file (elevatorRequests.txt in this directory) is 
as follows: 
> NumPassengers FromFloor ToFloor

So the line "2 1 5" means that 2 people are on the first floor (since
buildings don't typically zero-index their floors) and want to go up to 
the fifth floor.  

Some starter code is provided, but you are welcome to modify it, add 
method parameters, and change data structures.  

In order to run all the code include the async/wait, you'll need Node 7+.

Getting Started:
1. run `yarn` or `npm install`
2. Make sure you have the Current version of node installed (7+)
3. Run the js files in your console.
