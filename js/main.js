
      function initMap() {
      	let moodev = {lat: -34.397, lng: 150.644};
      	const image ={
      		url:'https://avatars1.githubusercontent.com/u/51347075?s=40&v=4',
      	    size: new google.maps.Size(50, 50)
      	 };
      	

        const map = new google.maps.Map(document.getElementById('map'), {
          center: moodev,
          zoom: 8
        });
     
        const marker = new google.maps.Marker({
		    position: moodev,
    		map: map,
    		title: 'Moodev!',
    		icon: image
 		});
 		
        const infowindow = new google.maps.InfoWindow({
    		content: '<p> ola é a moodev</p>'
  		});

  		marker.addListener('click',function(){
  			infowindow.open(map,marker);
  		});

  		
      }
