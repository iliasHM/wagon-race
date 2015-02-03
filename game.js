$(document).ready(function() {

  $('#ready').click(function() {
    $(this).hide();
    $('#instructions').hide();
    $('h1').addClass("slideRight");
    $('#game').addClass('slideLeft');
    $('.btn').addClass('slideRight');
  });

// Game play
  var winner = 0;
  $(document).on('keyup', function(event) {
    // var p_index = 1
    // var q_index = 1

    if ($("td.active").hasClass('final')) {
      if (winner == 1) {
        $("#player1_race > td.active" ).removeClass('active slideRight').next().addClass('active');
        $('#game').delay(1000).hide(0);
        $('#victory_red').delay(1000).show(0);
        $('.btn').delay(1000).hide(0);
      }
      else {
        $("#player2_race > td.active" ).removeClass('active slideRight').next().addClass('active');
        $('#game').delay(1000).hide(0);
        $('#victory_yellow').delay(1000).show(0);
        $('.btn').delay(1000).hide(0);
      };
      // if ($(this).closest('tr').attr('id') == 'player1_race') {
      //   $(#victory-red).css("display", "block");
      // };
    }
    if ($("td.active").hasClass('final2')) {

    }
    else {
      if (event.which == 81) {
      $("#player1_race > td.active" ).removeClass('active slideRight').next().addClass('active slideRight');
      winner = 1;
      }
      if (event.which == 80){
      $("#player2_race > td.active" ).removeClass('active slideRight').next().addClass('active slideRight');
      winner = 2;
      };
      if (event.which == 90) {
      $("#player1_race > td.active" ).removeClass('active slideRight').next().next().next().addClass('active slideRight');
      winner = 1;
      }
    }
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
  });
  $('.btn').on('click', function(event) {
   $('td.active').removeClass("active slideRight")
   $('tr td:first-child').addClass("active slideRight")
 });
});

