console.log("Arrived to postcrossing!");
$(document).ready(function() {
    var postcards = $('#postcardImageList');
    postcards.find('li.postcard').each(function() {
	var card = $(this);
	var description = card.find('div');
	var link = card.find('a');
	description.append("<br><small><a href=\""+link.attr('href')+"\" download>Save image</a></small>");
    });

    // Individual postcard
    var postcardControls = $('#postcardControls');
    if ( postcardControls.length ) {
	var image = postcardControls.parent().parent().parent().find('img');
	if ( image.length ) {
	    var src = image.attr('src')
	    postcardControls.append('<span><a href="'+src+'" download>Save&nbsp;image</a></span>');
	}
    }
});
