 $(document).ready(function() {

    $("#start").click(function(event){
       $.getJSON('http://127.0.0.1:8080/api/homerobo/start', function(jd) {
          $('#stage').html('<p> Message: ' + jd.message + '</p>');
       });
    });

    $("#medium").click(function(event){
       $.getJSON('http://127.0.0.1:8080/api/homerobo/medium', function(jd) {
          $('#stage').html('<p> Message: ' + jd.message + '</p>');
       });
    });

    $("#stop").click(function(event){
       $.getJSON('http://127.0.0.1:8080/api/homerobo/stop', function(jd) {
          $('#stage').html('<p> Message: ' + jd.message + '</p>');
       });
    });

 });