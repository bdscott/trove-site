$(function(){
	
	$('blockquote#trove-mission').hide();
	
	var quote = $('blockquote#moments-promo');

	quote.hide().contents().each(function() {
	   var words;
	   if (this.nodeType === 3) {
	       words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
		   words = words.replace(",", '<span>,</span>');
			words = words.replace(";", "<span>;</span>");
			words = words.replace(".", "<span>.</span>");
	       $(this).replaceWith(words);
	   } else if (this.nodeType === 1) {
	       this.innerHTML = '<span> ' + this.innerHTML.split(/\s+/).join(' </span><span> ') + ' </span>';
	   }
	});

	  // Remove any empty spans that were added
	quote.find('span').hide().each(function() {
	   if(!$.trim(this.innerHTML) ) {
	       $(this).remove();
	   }
	});

	quote.show().find('span').each(function(i) {
	   $(this).delay(300 * i).fadeIn(500);
	}).promise().done(function(){
		$('blockquote#moments-promo > span').delay(300);
		$('blockquote#trove-mission').fadeIn(3000);
		//$('blockquote#moments-promo').animate({ 'visibility' : 'hidden' }, 1000).slideUp(5000);
		
		
	});

});