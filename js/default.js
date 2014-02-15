$(function(){
	
	var quoteCount = $('blockquote').length;
	var currentQuote = 1;
	$('blockquote[data-quote-order!=1]').hide();
	
	//$('blockquote[data-quote-order=1]').runQuote();
	
	
	
	var runQuote = function(){	
		var quote = $('blockquote[data-quote-order='+currentQuote+']');

		quote.hide().contents().each(function() {
		   var words;
		   if (this.nodeType === 3) {
		       words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
			   words = words.replace(",", "<span>,</span>");
				words = words.replace(";", "<span>;</span>");
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
			$('blockquote[data-quote-order='+currentQuote+'] > span').delay(300).animate({'color' : 'transparent'}, 400).setTimeout(function(){
					alert('hey');
					$(this).parent().fadeOut();
				}, 5000);
			
		});
	}
	
	runQuote();

});