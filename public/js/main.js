function initMap() {
    console.log("Init map")
  const interestCenter = {
    lat: Number(document.querySelector(".latitudeText").innerHTML),
      lng: Number(document.querySelector(".longitudeText").innerHTML),

  };
 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: interestCenter,
    
  });

  const marker = new google.maps.Marker({
    position: interestCenter,
    map: map,
    title: document.querySelector(".interestName").innerText,
  });
 
  return marker;
}




