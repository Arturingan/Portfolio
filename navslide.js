
$(document).ready(function(){
  $(".burger").click(function(){
    $(".slide").slideToggle("slow");
  });
});


function scrollToTop() { 
  window.scrollTo({top: 0, behavior: 'smooth'});
} 