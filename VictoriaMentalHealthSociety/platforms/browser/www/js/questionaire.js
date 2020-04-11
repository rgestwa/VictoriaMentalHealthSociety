var myApp = new Framework7();

$$(document).on('deviceready', function() {
    console.log("questionaire js working");
    var $$ = Dom7;




  console.log("finished");
});

//Resource object
// var Name = null;
// var Catagory = null;
// var Location = null;
// var Crisis = null;
// var Refferal = null;

$$('.submit').on('click', function(){
  var formData = myApp.submit('#myForm');
  console.log(alert(JSON.stringify(formData)));
});
