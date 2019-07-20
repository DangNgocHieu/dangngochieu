$(document).ready(function(){
	var stt=0;
	starImg=$("div.slide_one:first").attr("stt");
	endImg=$("div.slide_one:last").attr("stt");
	$("div.slide_one").each(function(){
		if($(this).is(':visible'))
			stt= $(this).attr("stt");
	});
	$("#next").click(function(){
		if(stt == endImg){
			stt=-1;
		}
		next=++stt;
		$("div.slide_one").hide();
		$("div.slide_one").eq(next).show();
	});
	$("#prev").click(function(){
		if(stt == 0){
			stt=endImg;
			prev= stt++;
		}
		prev= --stt;
		$("div.slide_one").hide();
		$("div.slide_one").eq(prev).show();
	});
// });
// var i=0;
// var images=[];
// var time=3000;
// images[0]='slide_one'
// images[1]='slide_one'
// function changImage(){
// 	document.slide.src = images[i];
// 	if(i<images.leng -1){
// 		i++;
// 	}else{
// 		i=0;
// 	}
// 	setTimeout("changImage",time);
// }
// window.onload= changImage;