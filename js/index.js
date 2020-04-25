$(document).ready(function() {

  //When button is clicked, run function
  $("#getRandomQuote").on("click",function(e) {

    //Retrieve JSON and pass data as parameter

      e.preventDefault();
      $.ajax( {
        url: 'https://favqs.com/api/qotd',
        dataType: "json",
        success: function(data) {

        $(".quote").html(data.quote.body);
        $(".author").html(data.quote.author);
        
        },
        cache: false
      });

    });
  });
