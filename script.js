// function mobileNav() {
//     var x = document.getElementsByClassName("navigation");
//     if (x.className === "navigation") {
//         console.log("test");
//       x.className += " responsive";
//     } else {
//         console.log("finito");
//       x.className = "navigation";
//     }
//   }

$(document).ready(function(){
  
    $(".icon").click(function(){
        $("ul.navigation").toggleClass("show");
    });

});