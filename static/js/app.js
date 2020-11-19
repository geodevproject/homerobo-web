 $(document).ready(function() {

    $("#start").click(function(event){
       console.log("hello world");
       $.getJSON('http://127.0.0.1:5000/api/engine/start', function(jd) {
          $('#stage').html('<p> Message: ' + jd.message + '</p>');
       });
    });

    $("#medium").click(function(event){
       $.getJSON('http://127.0.0.1:5000/api/engine/medium', function(jd) {
          $('#stage').html('<p> Message: ' + jd.message + '</p>');
       });
    });

    $("#stop").click(function(event){
       $.getJSON('http://127.0.0.1:5000/api/engine/stop', function(jd) {
          $('#stage').html('<p> Message: ' + jd.message + '</p>');
       });
    });

    $("#up").click(function(event){
      console.log("Hello World2");
      });
   });


 });

 var myLink = document.getElementById('up');
 console.log(myLink);