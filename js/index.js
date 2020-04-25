$(document).ready(function() {

  //When button is clicked, run function
  $("#getRandomQuote").on("click",function(e) {

    //Retrieve JSON and pass data as parameter

      e.preventDefault();
      $.ajax( {
<<<<<<< HEAD
        url: 'https://favqs.com/api/qotd',
        dataType: "json",
        success: function(data) {

        $(".quote").html(data.quote.body);
        $(".author").html(data.quote.author);
        
=======
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        dataType: "json",
        success: function(data) {
          
          $(".quote").html(data[0].content);
          $(".author").html(data[0].title);
>>>>>>> 613cc8ad1ed9b293397b1fe5a1f38606c1f3453d
        },
        cache: false
      });

    });
  });
