console.log("Arrived to postcrossing!");
$(document).ready(function() {
    var postcards = $('#postcardImageList');
    postcards.find('li.postcard').each(function() {
	var card = $(this);
	var description = card.find('div');
	var link = card.find('a');
	description.append("<br><small><a href=\""+link.attr('href')+"\" download>Save image</a></small>");
    });
});
