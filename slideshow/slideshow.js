var images = ["branch.jpeg", "bridge.jpeg", "corner.jpeg", "ribar.jpeg", "rose.jpeg", "seedlings.jpeg"];
var count = 0;

$("#start").click(startSlideshow);
$("#stop").click(stopSlideshow);

function displayImage() {
	$("#image-holder").html("<img src=" + images[count] + " width='500px;'>");
}

function nextImage() {
	count++;
	$("#image-holder").html("<img src='loading.png'/>")
	setTimeout(displayImage, 1000);

	if (count==images.length) {
			count=0;
	}
}

function startSlideshow() {
	showImage = setInterval(nextImage, 3000)
}

function stopSlideshow() {
	clearInterval(showImage);
}

displayImage();











