$(function() {
  $("#transcript").accordion({
    collapsible: true,
    heightStyle: "content",
    active: false
  });

  $(window).on('resize', function() {
    if($(window).width() < 1600){
      $('.navbtn').on('click', function(){
        $(this).toggleClass('open');
        $('nav').toggleClass('openMenu');
      });

      $('nav a').on('click', function(){
          $('.navbtn').toggleClass('open');
          $('nav').toggleClass('openMenu');
      });

      $('.navbtn').on('touchstart', function(){
        $(this).toggleClass('open');
        $('nav').toggleClass('openMenu');
      });

      $('nav a').on('touchstart', function(){
          $('.navbtn').toggleClass('open');
          $('nav').toggleClass('openMenu');
      });
    };
    if($(window).width() >= 1600){
      $('.navbtn, nav a').unbind();
    }
  });

  $('#goodSubmit').on('click', function(e){
    e.preventDefault();

    if ($('.err').html()){
      $('.err').detach();
    }

    let goodOutput = "<p class='err'>This is a good place to put an error! It is close to the field the 'error' was placed in, and will draw the user's attention to it.</p>"

    $('#goodExample').after(goodOutput);
  });

  $('#badSubmit').on('click', function(e){
    e.preventDefault();

    if ($('.err').html()){
      $('.err').detach();
    }

    let badOuput = "<p class='err'>This is a bad place to put an error! It is far away from the error in user input. Especially on a large form, it will be hard for the user to find where the error was created. Always leave error messages near where the error was created, not far away.</p>"

    $('#badOutput').after(badOuput);
  });

  $('#markup button').on({
    mouseenter: function() {
      $(this).html("I am being hovered" );
    },
    mouseleave: function() {
      $(this).html("Interact with me! <br> (hover, click, etc!)");
    },
    click: function() {
      $(this).html("I was clicked!");   
    },
    focus: function() {
      $(this).html("I am being focused!");   
    }
  });
  
  var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);


});
