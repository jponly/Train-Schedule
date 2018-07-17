

// initialize firebase //
var config = {
    apiKey: "AIzaSyCJ1x72q7zPqYR6kwT3xQ4zuEArGpESjeI",
    authDomain: "myfirstdbproject-a1291.firebaseapp.com",
    databaseURL: "https://myfirstdbproject-a1291.firebaseio.com",
    projectId: "myfirstdbproject-a1291",
    storageBucket: "myfirstdbproject-a1291.appspot.com",
    messagingSenderId: "453468125395"
};
firebase.initializeApp(config);

var database = firebase.database();


$("#form-submit").on("click", function () {
    database.ref().push({
        name: $("#employee_name").val().trim(),
        title: $("#employee_title").val().trim(),
        start: $("#employee_start_date").val().trim(),
        monthly: $("#employee_monthlyrate").val().trim()
    });
});


database.ref().on("child_added", function (snapshot) {
    var empName = snapshot.val().name;
    var empTitle = snapshot.val().title;
    var empStart = snapshot.val().start;
    var empMonth = snapshot.val().monthly;

    var newRow = $("<tr>").append(
        $("<td>").text(empName),
        $("<td>").text(empTitle),
        $("<td>").text(empStart),
        $("<td>").text(empMonth)

    );

    $("table tbody").append(newRow);



}, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
     });


