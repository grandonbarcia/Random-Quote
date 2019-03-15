$(document).ready(function() {

  //When button is clicked, run function
  $("#getRandomQuote").on("click",function(e) {

    //Retrieve JSON and pass data as parameter

      e.preventDefault();
      $.ajax( {
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        dataType: "json",
        success: function(data) {
          
          $(".quote").html(data[0].content);
          $(".author").html(data[0].title);
        },
        cache: false
      });

    });
  });
