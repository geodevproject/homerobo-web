 $(document).ready(function() {

    $("#start").click(function(event){
       $.getJSON('/api/homerobo/start', function(jd) {
          $('#stage').html('<p> Message: ' + jd.message + '</p>');
       });
    });

    $("#medium").click(function(event){
       $.getJSON('/api/homerobo/medium', function(jd) {
          $('#stage').html('<p> Message: ' + jd.message + '</p>');
       });
    });

    $("#stop").click(function(event){
       $.getJSON('/api/homerobo/stop', function(jd) {
          $('#stage').html('<p> Message: ' + jd.message + '</p>');
       });
    });

 });