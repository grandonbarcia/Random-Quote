$(document).ready(function() {
  
  //When button is clicked, run function
  $("#getRandomQuote").on("click",function() {

    //Retrieve JSON and pass data as parameter
   $.getJSON("https://talaikis.com/api/quotes/random/", function(data) {

      //Output json data to respective classes on page
      $(".quote").html(data.quote);
      $(".author").html(data.author);
    });
  });
});
