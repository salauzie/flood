//     var map;
//     var directionsDisplay;
//     var elevator;
//     var infowindow = new google.maps.InfoWindow();
//     function initialize(location)
//     {
//     console.log(location);
//     var input = document.getElementById('from');
//     var autocomplete = new google.maps.places.Autocomplete(input);
    
//     google.maps.event.addDomListener(window, 'load', initialize); 
//     var input1 = document.getElementById('to');
//     var autocomplete = new google.maps.places.Autocomplete(input1);
    
//     google.maps.event.addDomListener(window, 'load', initialize); 
//       var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
//       var mapOptions = {
//         zoom: 12,
//         center: currentLocation,
//         mapTypeId: 'terrain'
//         };
//         map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions), {mapTypeId: google.maps.MapTypeId.ROADMAP}; 
//       var charleston;
//       var charleston1;
//       var charleston2;
//       var charleston3;
//       // var insidePolygon = polygonColor.containsLatLng(input1);
//       var polygonCoords = [
//         new google.maps.LatLng(32.769067, -79.930258),
//         new google.maps.LatLng(32.769716, -79.936824),
//         new google.maps.LatLng(32.772819, -79.943647),
//         // new google.maps.LatLng(32.786806, -79.942446),
//         // new google.maps.LatLng(32.780852, -79.955170),
//         new google.maps.LatLng(32.775129, -79.94622),
//         new google.maps.LatLng(32.790071, -79.963303),
//         new google.maps.LatLng(32.792352, -79.955835),
//         new google.maps.LatLng(32.790909, -79.954977),
//         new google.maps.LatLng(32.791487, -79.953175),
//         new google.maps.LatLng(32.792785, -79.953775),
//         new google.maps.LatLng(32.792785, -79.953775),
//         new google.maps.LatLng(32.790765, -79.951200),
//         new google.maps.LatLng(32.791487, -79.949999),
//         new google.maps.LatLng(32.791198, -79.949055),
//         new google.maps.LatLng(32.789466, -79.950686),
//         new google.maps.LatLng(32.787085, -79.949398),
//         new google.maps.LatLng(32.784776, -79.949999),
//         new google.maps.LatLng(32.785858, -79.944935),
//         new google.maps.LatLng(32.788240, -79.945621),
//         new google.maps.LatLng(32.789899, -79.942102),
//         new google.maps.LatLng(32.789178, -79.941673),
//         new google.maps.LatLng(32.788298, -79.944334),
//         new google.maps.LatLng(32.783716, -79.941931),
//         new google.maps.LatLng(32.779459, -79.945621),
//         new google.maps.LatLng(32.780794, -79.942102),
//         new google.maps.LatLng(32.777907, -79.943390),
//         new google.maps.LatLng(32.778304, -79.941931),
//         new google.maps.LatLng(32.780036, -79.937382),
//         new google.maps.LatLng(32.775562, -79.936008),
//         new google.maps.LatLng(32.775309, -79.934978),
//         new google.maps.LatLng(32.769067, -79.930258)
//       ];
//       charleston = new google.maps.Polygon({
//         paths: polygonCoords,
//         strokeColor: '#203864',
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: '#5CBDFF',
//         fillOpacity: 0.35
//       });
//       charleston.setMap(map);

//        var polygonCoords1 = [
//         new google.maps.LatLng(32.787072, -79.933906),
//         new google.maps.LatLng(32.790607, -79.926267),
//         new google.maps.LatLng(32.786075, -79.923649),
//         // new google.maps.LatLng(32.788384, -79.924850),
//         new google.maps.LatLng(32.786219, -79.921503),
//         new google.maps.LatLng(32.780735, -79.923220),
//         new google.maps.LatLng(32.780433, -79.930215),
//         new google.maps.LatLng(32.781082, -79.930472),
//         new google.maps.LatLng(32.781804, -79.926267),
//         new google.maps.LatLng(32.783644, -79.926610),
//         new google.maps.LatLng(32.788226, -79.929743),
//         new google.maps.LatLng(32.787108, -79.932361),
//         new google.maps.LatLng(32.787072, -79.933906)
//         ];

//       charleston1 = new google.maps.Polygon({
//         paths: polygonCoords1,
//         strokeColor: '#203864',
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: '#5CBDFF',
//         fillOpacity: 0.35
//       });
//       charleston1.setMap(map);

//       var polygonCoords2 = [
//         new google.maps.LatLng(32.769139, -79.928713),
//         new google.maps.LatLng(32.772495, -79.927340),
//         new google.maps.LatLng(32.773325, -79.925365),
//         // new google.maps.LatLng(32.774046, -79.924593),
//         // new google.maps.LatLng(32.774299, -79.925623),
//         new google.maps.LatLng(32.779892, -79.923778),
//         new google.maps.LatLng(32.779964, -79.924464),
//         // new google.maps.LatLng(32.779892, -79.923778),
//         new google.maps.LatLng(32.773722, -79.926653),
//         // new google.maps.LatLng(),
//         new google.maps.LatLng(32.772892, -79.927812),
//         new google.maps.LatLng(32.773649, -79.930472),
//         new google.maps.LatLng(32.773144, -79.930387),
//         new google.maps.LatLng(32.772386, -79.928026),
//         new google.maps.LatLng(32.769103, -79.929399),
//         new google.maps.LatLng(32.769139, -79.928713),
//         ];

//       var polygonCoords3 = [
//         new google.maps.LatLng(32.802381, -79.931974),
//         new google.maps.LatLng(32.793218, -79.926910),
//         new google.maps.LatLng(32.791487, -79.933691),
//         new google.maps.LatLng(32.793638, -79.934807),
//         new google.maps.LatLng(32.795189, -79.932189),
//         new google.maps.LatLng(32.800708, -79.934978),
//         // new google.maps.LatLng(),
//         // new google.maps.LatLng(),
//         new google.maps.LatLng(32.802381, -79.931974)
//         ];

//       charleston2 = new google.maps.Polygon({
//         paths: polygonCoords2,
//         strokeColor: '#203864',
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: '#5CBDFF',
//         fillOpacity: 0.35
//       });
//       charleston2.setMap(map);

//       charleston3 = new google.maps.Polygon({
//         paths: polygonCoords3,
//         strokeColor: '#203864',
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: '#5CBDFF',
//         fillOpacity: 0.35
//       });
//       charleston3.setMap(map);
//   //       google.maps.event.addListener(map, 'click', function(e) {
//   //   var result;
//   //   if (google.maps.geometry.poly.containsLocation(e.latLng, charleston)) {
//   //     result = 'red';
//   //   } else {
//   //     result = 'green';
//   //   }
//   //   var circle = {
//   //     path: google.maps.SymbolPath.CIRCLE,
//   //     fillColor: result,
//   //     fillOpacity: .2,
//   //     strokeColor: 'white',
//   //     strokeWeight: .5,
//   //     scale: 10
//   //   };
//   //   new google.maps.Marker({
//   //     position: e.latLng,
//   //     map: map,
//   //     icon: circle
//   //   })
//   // });
      
//         var trafficLayer = new google.maps.TrafficLayer();
//           $('#toggle_traffic').click(function () {
//           if (trafficLayer.getMap()){
//             trafficLayer.setMap(null);
//           }
//           else {
//             trafficLayer.setMap(map);
//           }
//         });
//         var weatherLayer = new google.maps.weather.WeatherLayer({
//           temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
//         });
//         var cloudLayer = new google.maps.weather.CloudLayer();
//         $('#toggle_weather').click(function() {
//           if (weatherLayer.getMap() || cloudLayer.getMap()) {
//             weatherLayer.setMap(null);
//             cloudLayer.setMap(null);
//           }
//           else {
//             weatherLayer.setMap(map);
//           }
//         });
//         elevator = new google.maps.ElevationService();
    
//     // Add a listener for the click event and call getElevation on that location
//   google.maps.event.addListener(map, 'click', getElevation);
//       }

// // $(document).on('click', '#reset', function() {
// //   console.log("bla")
// //   // directionsDisplay.setPanel();
// //   // $("#from").val('');
// //   // $("#to").val('');
// //   // $("#panel").html("");
// //   // $("#map-canvas").html("");
// //   calculateRoute(null,null);
// // });

// function calculateRoute(from, to) {
//   var directionsService = new google.maps.DirectionsService();

//   var directionsRequest = {
//     origin: from,
//     destination: to,
//     // waypoints: waypoints,
//     // optimizeWaypoints: true,
//     provideRouteAlternatives: true,
//     travelMode: google.maps.DirectionsTravelMode.DRIVING,
//     unitSystem: google.maps.UnitSystem.IMPERIAL
//   };

//   var rendererOptions = {
//     draggable: true
//   };

//   var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
//     directionsDisplay.setMap(map);
//     console.log('im firing');
//     directionsDisplay.setPanel(document.getElementById('panel'));
//     directionsService.route(
//       directionsRequest,
//       function(response, status)
//       {
//         // responsible for getting alternate routes
//         if (status == google.maps.DirectionsStatus.OK)
//         {
//           for (var i = 0, len = response.routes.length; i < len; i++) {
//                 new google.maps.DirectionsRenderer({
//                     map: map,
//                     directions: response,
//                     routeIndex: i
//                 });
//             }
//           directionsDisplay.setDirections(response);
//           // new google.maps.DirectionsRenderer({
//           //   map: map,
//           //   directions: response
//           // });
//         }
//         else
//           $("#error").append("Unable to retrieve your route<br />");
//         }
//       );
//       // $("#reset").click(function() {

//       $(document).on('click', '#reset', function() {
//         console.log("bla")
//         // directionsDisplay.setPanel();
//         // $("#from").val('');
//         // $("#to").val('');
//         // $("#panel").html("");
//         // $("#map-canvas").html("");
//         // calculateRoute(null,null);
//       });
//     }

// function getElevation(event) {
//   var locations = [];
//   // Retrieve the clicked location and push it on the array
//   var clickedLocation = event.latLng;
//   locations.push(clickedLocation);
//   // Create a LocationElevationRequest object using the array's one value
//   var positionalRequest = {
//     'locations': locations
//   }
//   // Initiate the location request
//   elevator.getElevationForLocations(positionalRequest, function(results, status) {
//     if (status == google.maps.ElevationStatus.OK) {
//       // Retrieve the first result
//       if (results[0]) {
//         // Open an info window indicating the elevation at the clicked position
//         infowindow.setContent('The elevation at this point <br>is ' + results[0].elevation + ' meters.');
//         infowindow.setPosition(clickedLocation);
//         infowindow.open(map);
//       } else {
//         alert('No results found');
//       }
//     } else {
//       alert('Elevation service failed due to: ' + status);
//     }
//   });
// }   
//     $(document).ready(function()
//     {
//       if (typeof navigator.geolocation == "undefined") {
//           $("#error").text("Your browser doesn't support the Geolocation API");
//           return;
//         }
 
//         $("#from-link, #to-link").click(function(event) {
//           event.preventDefault();
//           var addressId = this.id.substring(0, this.id.indexOf("-"));
//           navigator.geolocation.getCurrentPosition(function(position) {
//             var geocoder = new google.maps.Geocoder();
//             geocoder.geocode({
//               "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
//             },
//             function(results, status) {
//               if (status == google.maps.GeocoderStatus.OK)
//                 $("#" + addressId).val(results[0].formatted_address);
//               else
//                 $("#error").append("Unable to retrieve your address<br />");
//             });
//           },

//           function(positionError){
//             $("#error").append("Error: " + positionError.message + "<br />");
//           },
//           {
//             enableHighAccuracy: true,
//             timeout: 10 * 1000 // 10 seconds
//           });
//         });
 
//         $("#calculate-route").submit(function(event) {
//           event.preventDefault();
//           calculateRoute($("#from").val(), $("#to").val());
//         }); 

//         navigator.geolocation.getCurrentPosition(initialize);
//       });