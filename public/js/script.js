document.addEventListener(
  "DOMContentLoaded",
  () => {
   
    var parallaxRestaurant = document.querySelector(".parallaxRestaurant");
     var parallaxMonument = document.querySelector(".parallaxMonument");
     var parallaxMuseum = document.querySelector(".parallaxMuseum");
     var parallaxClub = document.querySelector(".parallaxClub");
      var parallaxImg = document.querySelector(".parallaxImg");
    
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
    //parallaxImg.style.left = value * 0.55;
      parallaxRestaurant.style.left = value * 0.55 - 190;
      parallaxMuseum.style.left = value * 0.78;
      parallaxMonument.style.right = value * 0.75-190;
       parallaxClub.style.right = value * 0.78;
     
    });

    console.log("ProjectMADTOUR JS imported successfully!");
  },
  false
);
