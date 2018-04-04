# Train-Scheduler
This is a train schedule timetable utilizing the Firebase Database to calculate, keep track of and update a train schedule.

![Train Scheduler](/assets/images/trainScheduler.png)

The program works by using jQuery to grab the inputted train data from a user and then saves it to Firebase.  Then, the information is dynamically updated from the server, populating the table with data.  This is where the Moment.js functions play a role in calculating and converting the time values to display the time until the train's next arrival in minutes, as well as how far away the train is in minutes.

![Firebase Database](/assets/images/trainFirebase.png)
