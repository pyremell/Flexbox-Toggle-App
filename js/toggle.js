$(document).ready(function() {
  //Hides the text for the 'p' element with class "text"
  $(".text").hide();
  
  //Triggers a click event when the button with class "toggle-btn" is pressed
  $(".toggle-btn").click(function() {
    //Uses .next() to target the sibling of each instance of "toggle-btn" 
    $(this).next().slideToggle(200);
  });
});