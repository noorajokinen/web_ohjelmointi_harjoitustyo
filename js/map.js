function initMap() {
    // create a map, point to the central of Finland
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 65.2426034, lng: 25.7472567},
        zoom: 5
    });
    
        // content string will display course info texts
    var contentString = "";
    // info window will display above content string
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
        // load and show markers
    $.ajax({
		url: 'json/alkot.json'
    }).fail(function() {
            console.log("fail!");
    }).done(function(data) {
        
        // loop through all courses
       $.each(data.stores, function(index,store) {
            
                        // get position lat and lng
           var storesLatLng = {lat: store.latitude, lng: store.longitude};
            // marker
            var marker = new google.maps.Marker({
                position: storesLatLng,
                map: map,
                // include data to marker -> show in infowindow
                title: store.name,
                osoite: store.address,
                postinro: store.postalCode,
                city: store.city,
                puhnro: store.phone,
                auki0: store.OpenDay0,
                auki1: store.OpenDay1
                
           });
           
                        // marker event handling
           marker.addListener('click', function() {
                infowindow.setContent(
                    '<div id="content">'+
                    '<h1 id="heading">'+this.title+'</h1>'+'<p>'+this.osoite+", "+this.postinro+" "+this.city+'</p>'+
                    '<p>'+"Puhelin: "+this.puhnro+'</p>'+
                    '<p>'+"Avoinna ma-pe: "+this.auki0+'</br>'+"Avoinna la: "+this.auki1+'</p>'
                );
                // show info window
                infowindow.open(map, this);
            });
        }); // each
    }); // ajax done
}// init map