$(document).ready(function(){
	//Load default page
	page_load('shirts');
	//Filter by product
	$('.shirt-item').click(get_shirts);
	$('.pants-item').click(get_pants);
	$('.shoes-item').click(get_shoes);
});

function get_shirts () {
	clear_items();
	page_load('shirts');
}

function get_pants () {
	clear_items();
	page_load('pants');
}

function get_shoes () {
	clear_items();
	page_load('shoes');
}

function clear_items () {
	for (var i = 0; i < 5; i++) {
		$('.product-img[data-index="'+i+'"]').html('');
		$('.product-name[data-index="'+i+'"]').html('');
		$('.product-price[data-index="'+i+'"]').html('');
	}
}

function page_load(category){

	if (category == "shirts") {
		$.ajax({
			url:'http://174.129.248.23/brainstation/shop/'+encodeURI(category),
			type:'GET',
			dataType:'jsonp',
			success:function(data){
				load_shirts(data);
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
				load_pants(data);
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
				load_shoes(data);
			},
			error:function(data){
				console.log(data);
			}
		});
	}

}

function load_shirts(data){
	shirt_obj = data.shirts;
	var i = 0;
	var j = 0;
	var k = 0;

	for (image in shirt_obj) {
		var shirt_img = shirt_obj[image].image;
		$('.product-img[data-index="'+i+'"]').append('<img src="'+shirt_img+'" alt="">');
		i++;
	}

	for (name in shirt_obj) {
		var shirt_name = shirt_obj[name].name;
		$('.product-name[data-index="'+j+'"]').append(shirt_name);
		j++;
	}

	for (price in shirt_obj) {
		var shirt_price = shirt_obj[price].price;
		$('.product-price[data-index="'+k+'"]').append('$ '+shirt_price);
		k++;
	}
}

function load_pants(data){
	pants_obj = data.pants;
	var i = 0;
	var j = 0;
	var k = 0;

	for (image in pants_obj) {
		var pants_img = pants_obj[image].image;
		$('.product-img[data-index="'+i+'"]').append('<img src="'+pants_img+'" alt="">');
		i++;
	}

	for (name in pants_obj) {
		var pants_name = pants_obj[name].name;
		$('.product-name[data-index="'+j+'"]').append(pants_name);
		j++;
	}

	for (price in pants_obj) {
		var pants_price = pants_obj[price].price;
		$('.product-price[data-index="'+k+'"]').append('$ '+pants_price);
		k++;
	}
}

function load_shoes(data){
	shoes_obj = data.shoes;
	var i = 0;
	var j = 0;
	var k = 0;

	for (image in shoes_obj) {
		var shoes_img = shoes_obj[image].image;
		$('.product-img[data-index="'+i+'"]').append('<img src="'+shoes_img+'" alt="">');
		i++;
	}

	for (name in shoes_obj) {
		var shoes_name = shoes_obj[name].name;
		$('.product-name[data-index="'+j+'"]').append(shoes_name);
		j++;
	}

	for (price in shoes_obj) {
		var shoes_price = shoes_obj[price].price;
		$('.product-price[data-index="'+k+'"]').append('$ '+shoes_price);
		k++;
	}
}