 
 
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

  var database = firebase.database();

  $(".submitBtn").on("click", function(event) {
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

});