 function countDown(){
    // Set the date we're counting down to
      var countDownDate = new Date("Dec 20, 2020 23:59:00").getTime();

      // Update the count down every 1 second
      var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      $('#days').html(days);
      $('#hours').html(hours);
      $('#minutes').html(minutes)
      $('#seconds').html(seconds)

      if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
        $('#days').html(0);
        $('#hours').html(0);
        $('#minutes').html(0)
        $('#seconds').html(0)
      }

    }, 1000);
  }