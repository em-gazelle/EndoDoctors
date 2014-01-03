Handlebars.registerHelper('pluralize', function(n, thing) {
	//pluralizer
	if (n === 1) {
	return '1' + ' ' + thing + ' ' + 'has' ;
	} else {
	return n + ' '  + thing + 's' + ' ' + 'have'; 
	}
});

