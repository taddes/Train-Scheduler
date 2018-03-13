 
 
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
  var firstTrainTime = $("#firstTrainTime").val().trim()
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



  var firstTrainTimeConverted = moment(firstTrainTime,"hh:mm").subtract(1, "years");
  console.log(firstTrainTimeConverted);

  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
 
  var diffTime = moment().diff(moment(firstTrainTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);
 
  var tRemainder = diffTime % frequency;
  console.log(tRemainder);
  
  var tMinutesTillTrain = frequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));	


 


  $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  frequency + "</td><td>" + nextTrain + "</td><td>" + tMinutesTillTrain + "</td><td>");
});
