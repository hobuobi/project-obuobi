$(document).ready(function(){
$('#spotlight').hide();
$(function(){
		$("#type").typed({
			strings: ["DESIGNER.", "ENGINEER.","LEADER.","RUNNER.","INNOVATOR."],
			typeSpeed: 0,
      backDelay: 1000,
      loop: true
		});
	});

/*$(function(){
  if( ($("#type").text() == 'ENGINEER.') || ($("#type").text() == 'INNOVATOR.')){
    console.log("VOWELSSSS");
    $('.banner').first().text('I AM AN');
  }
  else { $('.banner').first().text('I AM A') }
})
*/
$(".menu-item").click(function(){
  var name = "#"+ $(this).text();
  console.log(name);
  $('html, body').animate({
      scrollTop: $(name).offset().top
  }, 700);
})
$(".menu-sig").click(function(){
  $('html, body').animate({
      scrollTop: $("body").offset().top
  }, 700);
})


$('.port-card').click(function(){
  console.log('clickity');
  $('#spotlight').fadeIn(300);
});
$('#spotlight').click(function(){
  $(this).fadeOut(300);
})
$('#menu')
  .mouseenter(function(){
    console.log('in');
    $('#menu-items').slideDown();
  })
  .mouseleave(function(){
    console.log('out');
    $('#menu-items').slideUp();
  });

});
