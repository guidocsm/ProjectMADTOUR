
function initMapNew() {
console.log("Init map")
  const interestCenter = {
    lat: Number(document.querySelector(".latitudeCenter").innerHTML),
    lng: Number(document.querySelector(".longitudeCenter").innerHTML),

  };
 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: interestCenter,
    
  });

  const marker = new google.maps.Marker({
    position: interestCenter,
    map: map,
    title: document.querySelector(".interestName")?.innerText,
  });

  const geocoder = new google.maps.Geocoder();
 
  document.querySelector('.submit').addEventListener('click', function (e) {
    e.preventDefault()
    
    geocodeAddress(geocoder, map);
  });
 
  return marker;
}

 
function geocodeAddress(geocoder, map) {
  let address = document.querySelector('.address').value;
 
  geocoder.geocode({ 'address': address }, function (results, status) {
 
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });

      console.log(document.querySelector(".latitudeText"));
      document.querySelector('.latitudeText').value = results[0].geometry.location.lat();
      document.querySelector('.longitudeText').value = results[0].geometry.location.lng();
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


function initMapDetails() {
  console.log("Init map");
  const interestCenter = {
    lat: Number(document.querySelector(".latitudeCenter").innerHTML),
    lng: Number(document.querySelector(".longitudeCenter").innerHTML),
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: interestCenter,
  });

  const marker = new google.maps.Marker({
    position: interestCenter,
    map: map,
    title: document.querySelector(".interestName")?.innerText,
  });

  const geocoder = new google.maps.Geocoder();

  document.querySelector(".submit").addEventListener("click", function (e) {
    e.preventDefault();

    geocodeAddress(geocoder, map);
  });

  return marker;
}

// const geocoder = new google.maps.Geocoder();

// document.querySelector('.submit').addEventListener('click', function (e) {
//   e.preventDefault()
//   console.log("algo")
//   geocodeAddress(geocoder, map);
// });

function geocodeAddress(geocoder, map) {
  let address = document.querySelector(".address").value;

  geocoder.geocode({ address: address }, function (results, status) {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });

      console.log(document.querySelector(".latitudeText"));
      document.querySelector(".latitudeText").value = results[0].geometry.location.lat();
      document.querySelector(".longitudeText").value = results[0].geometry.location.lng();
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

function initMapEdit() {
  console.log("Init map");
  const interestCenter = {
    lat: Number(document.querySelector(".latitudeCenter").innerHTML),
    lng: Number(document.querySelector(".longitudeCenter").innerHTML),
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: interestCenter,
  });

  const marker = new google.maps.Marker({
    position: interestCenter,
    map: map,
    title: document.querySelector(".interestName")?.innerText,
  });

  const geocoder = new google.maps.Geocoder();

  document.querySelector(".submit").addEventListener("click", function (e) {
    e.preventDefault();

    geocodeAddress(geocoder, map);
  });

  return marker;
}

// const geocoder = new google.maps.Geocoder();

// document.querySelector('.submit').addEventListener('click', function (e) {
//   e.preventDefault()
//   console.log("algo")
//   geocodeAddress(geocoder, map);
// });

function geocodeAddress(geocoder, map) {
  let address = document.querySelector(".address").value;

  geocoder.geocode({ address: address }, function (results, status) {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });

      console.log(document.querySelector(".latitudeText"));
      document.querySelector(".latitudeText").value = results[0].geometry.location.lat();
      document.querySelector(".longitudeText").value = results[0].geometry.location.lng();
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

