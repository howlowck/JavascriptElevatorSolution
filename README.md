# JavaScript async challenge

For this challenge, you must build an elevator scheduler.  Assume that 
you are in a large office building (such as the AON Center in Chicago)
and there is a bank of 32 elevators.  A maximum of 12 people can fit on 
an elevator.  You must read in a text file and keep all of the elevators 
moving to shuttle people up and down.  (You can visualize each elevator 
as a separate thread, but remember that JavaScript is single-threaded.)

The format of the text file (elevatorRequests.txt in this directory) is 
as follows: 
> FromFloor ToFloor

So the line "1 5" means that people are on the first floor (since
buildings don't typically zero-index their floors) and want to go up to 
the fifth floor.  

Some starter code is provided, but you are welcome to modify it, add 
method parameters, and change data structures.  

In order to run all the code include the async/wait, you'll need Node 7+.

##Getting Started
1. Run `yarn` or `npm install`.
2. Make sure you have the current version of node installed (7+).
3. Run `node elevator.js` in your console.

##Tasks
1. Read from the `elevatorRequests.txt` file asynchronously.  
2. For each elevator request, allocate an elevator.  There is a time delay associated with each elevator's movement between floors, so try to do this efficiently as well.  

##Optional Tasks
3. Measure the time each elevator ride takes, and calculate the average time and total time for all rides.  
4. Create an object to store state for each elevator (such as current position) so that they don't ever disappear from one place and appear in another place.  
5. Experiment with more efficient elevator scheduling algorithms (to stop on multiple floors to pick up people going in the same direction).  
6. Enforce a 12-person limit on each elevator.  
