$(document).ready(function(){
	//Load default page
	page_load('shirts');
});

function page_load(category){

	if (category == "shirts") {
		$.ajax({
			url:'http://174.129.248.23/brainstation/shop/'+encodeURI(category),
			type:'GET',
			dataType:'jsonp',
			success:function(data){
				get_shirts(data);
			},
			error:function(data){
				console.log(data);
			}
		});
	}

	else if (category == "pants") {
		$.ajax({
			url:'http://174.129.248.23/brainstation/shop/'+encodeURI(category),
			type:'GET',
			dataType:'jsonp',
			success:function(data){
				get_pants(data);
			},
			error:function(data){
				console.log(data);
			}
		});
	}

	else {
		$.ajax({
			url:'http://174.129.248.23/brainstation/shop/'+encodeURI(category),
			type:'GET',
			dataType:'jsonp',
			success:function(data){
				get_shoes(data);
			},
			error:function(data){
				console.log(data);
			}
		});
	}

}

function get_shirts(data){
	console.log(data);
	images = data.shirts;
	console.log(images);
	//$('#instagram-pics').html('');
	for(image in images){
		console.log(images[image].image);
		var image_url = images[image].image;
		$('.product-img').append('<img src="'+image_url+'" alt="">');
		
	}
	//$('#image-container').css('top','0px');
	//clearInterval(animation);
}

function get_pants(data){
	console.log(data);
	images = data.pants;
	console.log(images);
	//$('#instagram-pics').html('');
	for(image in images){
		console.log(images[image].image);
		var image_url = images[image].image;
		$('.product-img').append('<img src="'+image_url+'" alt="">');
		
	}
	//$('#image-container').css('top','0px');
	//clearInterval(animation);
}

function get_shoes(data){
	console.log(data);
	images = data.shoes;
	console.log(images);
	//$('#instagram-pics').html('');
	for(image in images){
		console.log(images[image].image);
		var image_url = images[image].image;
		$('.product-img').append('<img src="'+image_url+'" alt="">');
		
	}
	//$('#image-container').css('top','0px');
	//clearInterval(animation);
}