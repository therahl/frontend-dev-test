var comments = [
	{name: "Vito Corleone", comment: "I'm gonna make him an offer he can't refuse.", timestamp: 69379200000},
	{name: "Terry Benedict", comment: "Congratulations... You're a dead man!", timestamp: 1007683200000},
	{name: "Jessica Rabbit", comment: "I'm not bad. I'm just drawn that way.", timestamp: 583113600000},
	{name: "Martin Brody", comment: "You're gonna need a bigger boat.", timestamp: 172281600000},
	{name: "Jack Dawson", comment: "I'm the king of the world!", timestamp: 882489600000},
	{name: "The Terminator", comment: "Hasta la vista, baby.", timestamp: 678326400000},
	{name: "The Joker", comment: "Why so serious..?", timestamp: 1215993600000}
];

var imageList = [
	'images/slideshow/1.jpg',
	'images/slideshow/2.jpg',
	'images/slideshow/3.jpg'
];

var i = 0;

setInterval(function(){
	i = i < imageList.length ? i : 0;
	console.log(imageList[i]);
	$('#slide-show img').fadeOut(500, function(){
		$(this).attr('src', imageList[i]).fadeIn();
		i++
	});
}, 5000)
