document.addEventListener(
  "DOMContentLoaded",
  () => {
   
    var phoneLogo = document.querySelector(".logoMAD");
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      phoneLogo.style.right = value * 0.65;
     
    });

    console.log("ProjectMADTOUR JS imported successfully!");
  },
  false
);
