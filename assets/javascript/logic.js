var config = {
    apiKey: "AIzaSyDdYrNErFKHp56vH8ozoYnSAgjHfdTY8lk",
    authDomain: "groupactivity-660bf.firebaseapp.com",
    databaseURL: "https://groupactivity-660bf.firebaseio.com",
    projectId: "groupactivity-660bf",
    storageBucket: "",
    messagingSenderId: "356106514326"
  };
  firebase.initializeApp(config);
  var database =firebase.database();


$("#submit-button").on("click", function(){
    var employee = $("employee-name").val().trim();
    var role = $("#role").val().trim();
    var startD = $("#start-date").val().trim();
    var payRate = $("#monthly-rate").val().trim();
    
});
// creates local tmeporary object for holding Employee data
var newEmp= {
    name: empName,
    role: empRole,
    start: empStart,
    rate: empRate
};
// uploads emplyee data to the database
database.ref().push(newEmp);

// 