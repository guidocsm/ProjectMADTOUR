document.addEventListener(
  "DOMContentLoaded",
  () => {
   
    var parallaxRestaurant = document.querySelector(".parallaxRestaurant");
     var parallaxMonument = document.querySelector(".parallaxMonument");
     var parallaxMuseum = document.querySelector(".parallaxMuseum");
     var parallaxClub = document.querySelector(".parallaxClub");

    
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      
      parallaxRestaurant.style.left = value * 0.55;
      parallaxMuseum.style.left = value * 0.78;
      parallaxMonument.style.right = value * 0.75;
       parallaxClub.style.right = value * 0.78;
     
    });

    console.log("ProjectMADTOUR JS imported successfully!");
  },
  false
);
