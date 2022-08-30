var cookies = 0;
var up = 1;


$(document).ready(function(){
  $(".cookie").click(function(){
      cookies += up;   
      $(".counter").text(cookies);
  })
});


$(document).ready(function() {
  $(".doubler").click(function() {
    if (cookies >= 200) {
      cookies -= 200;
      up += 2;
    }
  })
})

$(document).ready(function() {
  $(".auto").click(function() {
    if (cookies >= 450) {
      cookies -= 450;
      setInterval(function () {
        cookies += 1;
        $(".counter").text(cookies);
      }, 333);
    }
  })
})


$(document).ready(function() {
  $(".oven").click(function() {
    if (cookies >= 775) {
      cookies -= 775;
      up += 10;
    }
  })
})


$(document).ready(function() {
  $(".kitchen").click(function() {
    if (cookies >= 2200) {
      cookies -= 2200;
      setInterval(function () {
        cookies += 1;
        $(".counter").text(cookies);
      }, 142);
    }
  })
})


$(document).ready(function() {
  $(".factory").click(function() {
    if (cookies >= 35000) {
      cookies -= 35000;
      up += 55;      
    }
  })
})



$(document).ready(function() {
  $(".planet").click(function() {
    if (cookies >= 100000) {
      cookies -= 100000;
      setInterval(function () {
        cookies += 1;
        $(".counter").text(cookies);
      }, 5);
    }
  })
})


$(document).ready(function() {
  $(".nuclear").click(function() {
    if (cookies >= 250000) {
      cookies -= 250000;
      setInterval(function () {
        cookies += 1;
        $(".counter").text(cookies);
      }, 1.5);
    }
  })
})
