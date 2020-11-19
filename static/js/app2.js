 $(document).ready(function() {

    $("#start").click(function(event){
       $.getJSON('http://127.0.0.1:5000/api/engine/start', function(jd) {
          $('#stage').html('<p> Name: ' + jd.message + '</p>');
          $('#stage').append('<p>Age : ' + jd.message + '</p>');
          $('#stage').append('<p> Sex: ' + jd.message + '</p>');
       });
    });

 });