$(function () {
	var images=["images/flower1.jpeg","images/flower2.jpg","images/flower3.png","images/flower4.jpg","images/flower5.jpeg","images/flower6.jpg","images/flower7.jpg","images/flower8.jpeg","images/flower9.jpeg","images/flower10.jpeg"];
	for(let i=0;i<images.length;i++) {
	$("#images").append("<img src='' alt= 'img'>");
		$("div img").eq(i).attr("src",images[i]);
		$("div img").eq(i).click(function () {
			$("#body").html("<img src='',alt='img'>");
			$("#body img").attr("src",images[i]);
		})


		}


});