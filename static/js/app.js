 $(document).ready(function() {
   
   $("#forward").click(function(event){
      $.getJSON('/api/homerobo/w', function(jd) {
         $('#stage').html('<p> Message: ' + jd.message + '</p>');
      });
   });

   $("#reverse").click(function(event){
      $.getJSON('/api/homerobo/s', function(jd) {
         $('#stage').html('<p> Message: ' + jd.message + '</p>');
      });
   });

   $("#left").click(function(event){
      $.getJSON('/api/homerobo/a', function(jd) {
         $('#stage').html('<p> Message: ' + jd.message + '</p>');
      });
   });

   $("#right").click(function(event){
      $.getJSON('/api/homerobo/d', function(jd) {
         $('#stage').html('<p> Message: ' + jd.message + '</p>');
      });
   });

   $("#stop").click(function(event){
      $.getJSON('/api/homerobo/ ', function(jd) {
         $('#stage').html('<p> Message: ' + jd.message + '</p>');
      });
   });

   $("#cl").click(function(event){
      $.getJSON('/api/homerobo/cl', function(jd) {
         $('#stage').html('<p> Message: ' + jd.message + '</p>');
      });
   });

   $("#cr").click(function(event){
      $.getJSON('/api/homerobo/cr', function(jd) {
         $('#stage').html('<p> Message: ' + jd.message + '</p>');
      });
   });

   $("#cs").click(function(event){
      $.getJSON('/api/homerobo/cs', function(jd) {
         $('#stage').html('<p> Message: ' + jd.message + '</p>');
      });
   });

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

    //$("#stop").click(function(event){
       //$.getJSON('/api/homerobo/stop', function(jd) {
          //$('#stage').html('<p> Message: ' + jd.message + '</p>');
       //});
    //});

 });