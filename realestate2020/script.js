var map;
var locationData = [];
var markers = [];

var polygon = null;

var placeMarkers = [];

 var locationData = [
    {
        image:
            "https://content.mediastg.net/dyna_images/mls/3012/950015895.jpgx?w=80&h=80&d=2020-02-26T09-14-45",
        heading: "14306 Henry Ruff Rd, Livonia, MI 48154",
        body: "IMMACULATELY MAINTAINED LIVONIA COLONIAL LOCATED IN THE HEART OF LYNDON MEADOWS SUB. LARGE OPEN FOYER WELCOMES YOU IN TO THIS STUNNING HOME. GORGEOUS NATURAL WOOD FLOORING SURROUNDS THE BEAUTIFULLY DECORATED LIVING ROOM AND FORMAL DINING ROOM AREA. CUSTOM BUILT-IN SHELVING, CROWN MOLDING AND LARGE BAY WINDOW ARE JUST FEW FEATURES THIS GEM OFFERS. THE KITCHEN OFFERS ATTRACTIVE CABINETRY, CORIAN COUNTER TOPS, GLASS TILE BACK SPLASH, PANTRY AND COMES WITH ALL APPLIANCES, INCLUDING WASHER & DRYER! OPEN FAMILY ROOM WITH NATURAL FIREPLACE, ADDITIONAL BUILT-INS AND DOOR WALL LEADING TO THE LARGE FENCED LOT. EASILY ENTERTAIN ALL YOUR GUESTS IN THE PROFESSIONALLY FINISHED BASEMENT (2019) THIS FABULOUS SPACE OFFERS A GRANITE BAR, RECESSED LIGHTING, EGRESS WINDOWS, NATURAL WOOD BEAMS & TONS OF STORAGE. UPDATES INCLUDE: BATHROOMS 2017, NEW ROOF 2015, FOUNDATION SYSTEMS OF MICH 2019, 100 AMP ELECTRIC UPGRADE 2019 AND FURNACE IN 2007.",
        subheading:
            "4 Beds | 3 Baths | 2,000 Sq.ft | Single Family | MLS#2200015462",
        startingPrice: "From $500,000",
        lat: 42.388026,
        lng: -83.343413,
        zIndex: 4
    },
    {
        image:
            "https://content.mediastg.net/dyna_images/mls/3012/219119733.jpgx?w=80&h=80&d=2019-12-03T10-15-53",
        heading: "4928 Hayes St, Wayne, MI 48184",
        subheading:
            "3 Beds | 1 Bath | 1,100 sq.ft | Single-Family | MLS#219119733",
        body:
            "Welcome Home to Hayes St! This gorgeous brick ranch features a spacious open kitchen and dining area which make entertaining easy as pie! NEW Roof being installed 1/7/20. All appliances stay! Stunning warm laminate flooring flows into the inviting living room area. Furnace and A/C installed in 2012. You will never be without power because this fabulous also has a Whole house Gas Generator! The 1.5 car Garage has additional large storage shed. Large covered back patio area. Seller is providing the Certificate of Occupancy!",
        lat: 42.272624,
        lng: -83.350198,
        zIndex: 3
    },
    {
        image:
            "https://content.mediastg.net/dyna_images/mls/3012/219102321.jpgx?w=80&h=80&d=2019-10-05T10-48-06",
        heading: "1105 Woodnoll Dr, Flint, MI 48507",
        subheading: "6 Beds | 3 Baths | 1,800 sq.ft | MLS#21910321",
        body:
            "Welcome Home to Hayes St! This gorgeous brick ranch features a spacious open kitchen and dining area which make entertaining easy as pie! NEW Roof being installed 1/7/20. All appliances stay! Stunning warm laminate flooring flows into the inviting living room area. Furnace and A/C installed in 2012. You will never be without power because this fabulous also has a Whole house Gas Generator! The 1.5 car Garage has additional large storage shed. Large covered back patio area. Seller is providing the Certificate of Occupancy!",
        lat: 42.938369,
        lng: -83.693432,
        zIndex: 3
    },
    {
        image:
            "https://content.mediastg.net/dyna_images/mls/3012/950013075/950013075-24-alt.jpgx?w=80&h=80&d=2020-02-14T16-37-27",
        heading: "706 Vansull, Westland, MI 48185",
        subheading: "3 Beds | 1 Bath | 1,200sq.ft | MLS#2200012447",
        body:
            "INCREDIBLY MAINTAINED BRICK RANCH LOCATED IN POPULAR BILTMORE MANOR SUB. THIS HOME HAS ALL THE SPACE YOU NEED AND THEN SOME! LIVING ROOM, FAMILY ROOM WITH FIREPLACE AND ATTACHED FLORIDA ROOM. IMAGINE STEPPING THROUGH YOUR DOOR WALL TO ENJOY YOUR HUGE HEATED IN-GROUND POOL... THIS PRIVATE SPACE IS AN ABSOLUTE ENTERTAINMENT OASIS! THIS HOME FEATURES A CONTEMPORARY SPACIOUS EAT-IN RETRO KITCHEN WITH AN ISLAND AND BUILT IN APPLIANCES. TONS OF COUNTER SPACE AND STORAGE. YOU WILL FALL IN LOVE WITH THE EXTRA 900 SQ FT OF FINISHED BASEMENT LIVING SPACE THAT WAS RENOVATED IN 2006 WHICH ALSO OFFERS A SECOND FIREPLACE, MORE STORAGE AND LAUNDRY AREA. NEW ROOF IN 2017 AND A/C IN 2013. SELLER IS PROVIDING THE C OF O WHICH MEANS ALL YOU HAVE TO IS MOVE IN A RELAX! TAXES ARE CURRENTLY NON-HOMESTEAD AND WILL DECREASE WITH NEW HOMEOWNER.",
        lat: 42.314682,
        lng: -83.374463,
        zIndex: 2
    }
];
var reMax = {
          path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
          fillColor: 'yellow',
          fillOpacity: 0.8,
          scale: 0.5,
          strokeColor: 'gold',
          strokeWeight: 14,
    position: {lat: 42.348440, lng: -83.386254},
        };
      
function initMap() {
    var options = {
        center: {lat: 42.348440, lng: -83.386254},
        zoom: 9.5,
        styles: [
            {
                elementType: "geometry",
                stylers: [
                    {
                        color: "#f5f5f5"
                    }
                ]
            },
            {
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161"
                    }
                ]
            },
            {
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#f5f5f5"
                    }
                ]
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#858ea1"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eff0f2"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575"
                    }
                ]
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e1f4c1"
                    }
                ]
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#858ea1"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#f8f9fa"
                    }
                ]
            },
            {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#858ea1"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dbdee4"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#858ea1"
                    }
                ]
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#858ea1"
                    }
                ]
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eff0f2"
                    }
                ]
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eff0f2"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dbdee4"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e"
                    }
                ]
            }
        ],
        gestureHandling: "greedy",
        mapTypeControl: true
    };

    var map = new google.maps.Map(document.getElementById("map"), options);
    

    var timeAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById("search-within-time-text")
    );
    var zoomAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById("zoom-to-area-text")
    );
    zoomAutocomplete.bindTo("bounds", map);
    var searchBox = new google.maps.places.SearchBox(
        document.getElementById("places-search")
    );
    searchBox.setBounds(map.getBounds());

    /////
    
   
    
    

    document
        .getElementById("zoom-to-area")
        .addEventListener("click", function() {
            zoomToArea();
        });

    searchBox.addListener("places_changed", function() {
        searchBoxPlaces(this);
    });
    document
        .getElementById("go-places")
        .addEventListener("click", textSearchPlaces);
    document.getElementById('search-within-time').addEventListener('click', function() {
          searchWithinTime();
        });

    //////////

    function zoomToArea() {
        var geocoder = new google.maps.Geocoder();
        var address = document.getElementById("zoom-to-area-text").value;
        if (address == "") {
            window.alert("You must enter an area, or address.");
        } else {
            geocoder.geocode(
                {
                    address: address,
                    componentRestrictions: { locality: "Michigan" }
                },
                function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        map.setCenter(results[0].geometry.location);
                        map.setZoom(12);
                    } else {
                        window.alert(
                            "We could not find that location - try entering a more" +
                                " specific place."
                        );
                    }
                }
            );
        }
    }
function searchWithinTime() {
        // Initialize the distance matrix service.
        var distanceMatrixService = new google.maps.DistanceMatrixService;
        var address = document.getElementById('search-within-time-text').value;
        // Check to make sure the place entered isn't blank.
        if (address == '') {
          window.alert('You must enter an address.');
        } else {
          hideMarkers(markers);
          // Use the distance matrix service to calculate the duration of the
          // routes between all our markers, and the destination address entered
          // by the user. Then put all the origins into an origin matrix.
          var origins = [];
          for (var i = 0; i < markers.length; i++) {
            origins[i] = markers[i].position;
          }
          var destination = address;
          var mode = document.getElementById('mode').value;
          // Now that both the origins and destination are defined, get all the
          // info for the distances between them.
          distanceMatrixService.getDistanceMatrix({
            origins: origins,
            destinations: [destination],
            travelMode: google.maps.TravelMode[mode],
            unitSystem: google.maps.UnitSystem.IMPERIAL,
          }, function(response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK) {
              window.alert('Error was: ' + status);
            } else {
              displayMarkersWithinTime(response);
            }
          });
        }
      }

      // This function will go through each of the results, and,
      // if the distance is LESS than the value in the picker, show it on the map.
      function displayMarkersWithinTime(response) {
        var maxDuration = document.getElementById('max-duration').value;
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;
        // Parse through the results, and get the distance and duration of each.
        // Because there might be  multiple origins and destinations we have a nested loop
        // Then, make sure at least 1 result was found.
        var atLeastOne = false;
        for (var i = 0; i < origins.length; i++) {
          var results = response.rows[i].elements;
          for (var j = 0; j < results.length; j++) {
            var element = results[j];
            if (element.status === "OK") {
              // The distance is returned in feet, but the TEXT is in miles. If we wanted to switch
              // the function to show markers within a user-entered DISTANCE, we would need the
              // value for distance, but for now we only need the text.
              var distanceText = element.distance.text;
              // Duration value is given in seconds so we make it MINUTES. We need both the value
              // and the text.
              var duration = element.duration.value / 60;
              var durationText = element.duration.text;
              if (duration <= maxDuration) {
                //the origin [i] should = the markers[i]
                markers[i].setMap(map);
                atLeastOne = true;
                // Create a mini infowindow to open immediately and contain the
                // distance and duration
                var infowindow = new google.maps.InfoWindow({
                  content: durationText + ' away, ' + distanceText +
                    '<div><input type=\"button\" value=\"View Route\" onclick =' +
                    '\"displayDirections(&quot;' + origins[i] + '&quot;);\"></input></div>'
                });
                infowindow.open(map, markers[i]);
                // Put this in so that this small window closes if the user clicks
                // the marker, when the big infowindow opens
                markers[i].infowindow = infowindow;
                google.maps.event.addListener(markers[i], 'click', function() {
                  this.infowindow.close();
                });
              }
            }
          }
        }
        if (!atLeastOne) {
          window.alert('We could not find any locations within that distance!');
        }
      }
    function searchBoxPlaces(searchBox) {
        hideMarkers(placeMarkers);
        var places = searchBox.getPlaces();
        if (places.length == 0) {
            window.alert("We did not find any places matching that search.");
        } else {
            createMarkersForPlaces(places);
        }
    }
    function textSearchPlaces() {
        var bounds = map.getBounds();
        hideMarkers(placeMarkers);
        var placesService = new google.maps.places.PlacesService(map);
        placesService.textSearch(
            {
                query: document.getElementById("places-search").value,
                bounds: bounds
            },
            function(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    createMarkersForPlaces(results);
                }
            }
        );
    }
    function hideMarkers(markers) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    }
    function createMarkersForPlaces(places) {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < places.length; i++) {
            var place = places[i];
            var icon = {
                url: place.icon,
                size: new google.maps.Size(35, 35),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(15, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
            var marker = new google.maps.Marker({
                map: map,
                icon: {
                    url:
                        "https://raw.githubusercontent.com/brittanyyee/territories/master/onix%20sales%20map/venuepin.png"
                },
                title: place.name,
                position: place.geometry.location,
                id: place.place_id
            });
            var placeInfoWindow = new google.maps.InfoWindow();
            marker.addListener("click", function() {
                if (placeInfoWindow.marker == this) {
                    console.log("This infowindow already is on this marker!");
                } else {
                    getPlacesDetails(this, placeInfoWindow);
                }
            });
            placeMarkers.push(marker);
            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        }
        map.fitBounds(bounds);
    }
    function getPlacesDetails(marker, infowindow) {
        var service = new google.maps.places.PlacesService(map);
        service.getDetails(
            {
                placeId: marker.id
            },
            function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    infowindow.marker = marker;
                    var innerHTML = "<div>";
                    if (place.name) {
                        innerHTML += "<strong>" + place.name + "</strong>";
                    }
                    if (place.formatted_address) {
                        innerHTML += "<br>" + place.formatted_address;
                    }
                    if (place.formatted_phone_number) {
                        innerHTML += "<br>" + place.formatted_phone_number;
                    }
                    if (place.opening_hours) {
                        innerHTML +=
                            "<br><br><strong>Hours:</strong><br>" +
                            place.opening_hours.weekday_text[0] +
                            "<br>" +
                            place.opening_hours.weekday_text[1] +
                            "<br>" +
                            place.opening_hours.weekday_text[2] +
                            "<br>" +
                            place.opening_hours.weekday_text[3] +
                            "<br>" +
                            place.opening_hours.weekday_text[4] +
                            "<br>" +
                            place.opening_hours.weekday_text[5] +
                            "<br>" +
                            place.opening_hours.weekday_text[6];
                    }
                    if (place.photos) {
                        innerHTML +=
                            '<br><br><img src="' +
                            place.photos[0].getUrl({
                                maxHeight: 100,
                                maxWidth: 200
                            }) +
                            '">';
                    }
                    innerHTML += "</div>";
                    infowindow.setContent(innerHTML);
                    infowindow.open(map, marker);
                    infowindow.addListener("closeclick", function() {
                        infowindow.marker = null;
                    });
                }
            }
        );
    }
    setMarkers(map);
}

///// set markers and infowindow stuff ////
    function setMarkers(map) {
  var image = new google.maps.MarkerImage(
    "data:image/png;base64,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",
    null,
    null,
    null,
    new google.maps.Size(28, 38)
  );
  var infoWindow = new google.maps.InfoWindow();

  for (var i = 0; i < locationData.length; i++) {
    var data = locationData[i];
    var marker = new google.maps.Marker({
      position: { lat: data.lat, lng: data.lng },
      icon: image,
      map: map,
      title: data.title,
      zIndex: data.zIndex
    });

    // Attach click handler to marker
    (function(marker, data) {
      google.maps.event.addListener(marker, "click", e => {
        infoWindow.setContent(
          "<div class='info-card'>" +
            "<div class='info-card-top'>" +
            "<img src='" +
            data.image +
            "' class='info-card-image'>" +
            "<div class='info-card-meta'>" +
            "<div class='info-card-heading'>" +
            data.heading +
            "</div>" +
            "<div class='info-card-subheading'>" +
            data.subheading +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='info-card-bottom'>" +
            "<p>" + data.body + "</p>" +
            "</div>" +
            "</div>"
        );
        map.setCenter(marker.getPosition());
        infoWindow.open(map, marker);
      });
    })(marker, data);

    markers.push(marker);
  }
  google.maps.event.addListener(map, "click", function() {
    infoWindow.close();
  });
}



