// JavaScript Document
/*<!--function show(x)
	  {
		  var onshow = x.getAttribute('a1'); 
	  document.getElementById(onshow).style.display='block';
	  }
	  function hide(x)
	  { 
	     var onhide = x.getAttribute('a1');
	  document.getElementById(onhide).style.display='none';
	  }
	  function lick()
	  {
		   document.getElementById('pic1').style.display='none';
		  }-->*/
       function MM_jumpMenu(targ,selObj,restore){ //v3.0
        eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
       if (restore) selObj.selectedIndex=0;
}
$(document).ready(function() { 

var sprytextfield1 = new Spry.Widget.ValidationTextField("sprytextfield1", "integer", {validateOn:["blur", "change"], minChars:6, maxChars:10});
var sprypassword1 = new Spry.Widget.ValidationPassword("sprypassword1", {validateOn:["blur", "change"], minChars:6, maxChars:10});

$('.nav_ul1>li').hover(function(){
	$('li:first').css({"background":"none"})
	$('li:first>a').css({"color":"white"})
	$(this).find('ul').stop().show("fast")
	$(this).animate({"background-color":"white"})
	$(this).find('a:first').css({"color":"black"})   
	},function(){
		$(this).find('ul').stop().hide("slow")
		$(this).find('a:first').css({"color":"white"}) 
		$(this).css({"background":"none"})
		})

$('.close').click(function(){
	$('#pic1').stop().hide("fast")
	})
	
	  $('#marquee').kxbdSuperMarquee({
				distance:323,
				time:2,
				navId:'#marNav',
				direction:'left'
			}); 
			
			 $('.two2>ul').find('li').hover(function(){
			$(this).addClass('change') 
		 },function(){
			 $(this).removeClass('change')
			 })
			
			$('.one_right3>ul').find('li').hover(function(){
			$(this).addClass('change') 
		 },function(){
			 $(this).removeClass('change')
			 })
			 
			 $('.four_right3>ul').find('li').hover(function(){
			$(this).addClass('change') 
		 },function(){
			 $(this).removeClass('change')
			 })
			 
	});