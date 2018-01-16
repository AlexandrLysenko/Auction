/*..............Responsive Menu....................*/

$(function() {
  $('.menu__icon').click(function() {
    if($('.menu__items').is(':visible')) {
      $('.menu__items').removeClass('showitems'); 
    }
    else {
      $('.menu__items').addClass('showitems'); 
    }   
 }); 
});

$(function() {
  $('.item__link').click(function() {
   $('.menu__items').removeClass('showitems')
 }); 
});


/*............Adding google maps...........*/

function myMap() {
	var centerLatLng = new google.maps.LatLng(41.887067,  -87.680688);
    var mapOptions = {
        center: centerLatLng,
        zoom: 18
    }
	var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
	var marker = new google.maps.Marker({
		position: centerLatLng, 
		title: '2130 Fulton Street, Chicago, IL',             
		map: map,
		animation: google.maps.Animation.BOUNCE                         
	});
}
	google.maps.event.addDomListener(window, 'load', myMap);