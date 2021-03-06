# Train-Scheduler
This is a train schedule timetable utilizing the Firebase Database to calculate, keep track of and update train schedules.
<hr>
The program works by using jQuery to grab the inputted train data from a user and then saves it to the Firebase real-time database.  Then, the information is dynamically updated from the server, populating the table with data.  This is where the Moment.js functions play a role in calculating and converting the time values to display the time until the train's next arrival in minutes, as well as how far away the train is in minutes. This real-time application updates the schedule every time the site is accessed, giving the most up to date timing for the given schedule. 
<br>

<h3>Page format:</h3>

![Train Scheduler](/assets/images/trainScheduler.png)



<h3>Firebase database:</h3>

![Firebase Database](/assets/images/trainFirebase.png)
