 
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBM3mutqPNU3z3DRcw_pSBSb5kAnNOkG10",
    authDomain: "fir-train-schedule-e3470.firebaseapp.com",
    databaseURL: "https://fir-train-schedule-e3470.firebaseio.com",
    projectId: "fir-train-schedule-e3470",
    storageBucket: "fir-train-schedule-e3470.appspot.com",
    messagingSenderId: "981369308911"
  };
  
  firebase.initializeApp(config);
  console.log("this is working");

  var database = firebase.database();

  $("#submitBtn").on("click", function(event) {
    event.preventDefault();
  

      // Grabs user input
  var trainName = $("#trainName").val().trim();
  var trainDestination = $("#destination").val().trim();
  var firstTrainTime = moment($("#firstTrainTime").val().trim(), "DD/MM/YY").format("X");
  var frequency = $("#frequency").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    firstTrainTime: firstTrainTime,
    frequency: frequency
  };
  console.log("this is working");

  database.ref().push(newTrain);

  //ask why empty() does't work for these
  $("#trainName").val("");
  $("#destination").val("");
  $("#firstTrainTime").val("");
  $("#frequency").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {


  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var firstTrainTime = childSnapshot.val().firstTrainTime;
  var frequency = childSnapshot.val().frequency;

  console.log(trainName);
  console.log(trainDestination);
  console.log(firstTrainTime);
  console.log(frequency);

  //Prettify first train time
  var firstTrainTimePrettified = moment.unix(empStart).format("hh:mm");
  console.log(firstTrainTimePrettified);

  //determine time until next arrival
  var nextArrival = 0;

  //determine time until next train arrives
  var minutesAway = 0;
  



  // Add each train's data into the table
  $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td><td>");
});
