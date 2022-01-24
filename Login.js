@@ -0,0 +1,10 @@
$(document).ready(function(){
  $('#oksignup').click(function(){
  	$('#login').addClass("reg");
  	$('#signup').removeClass("reg");
  });
  $('#oklogin').click(function(){
  	$('#signup').addClass("reg");
  	$('#login').removeClass("reg");
  });
}); 
