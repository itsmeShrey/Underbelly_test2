/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

new WOW().init();

function initMap() {
  var uluru = { lat: 37.227837, lng: -95.700513 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

const inputs = document.querySelectorAll(".inputField");

inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

const galleryitems = document.querySelectorAll(".gallary-overlay");
const kartForm = document.querySelector(".container");
const addBtn = document.querySelector(".addBtn");

galleryitems.forEach((item)=>{
    item.addEventListener('click', ()=>{
            kartForm.classList.remove('displayNone');                
            kartForm.classList.add('displayBlock');                
        })
    })
    addBtn.addEventListener('click', ()=>{
        kartForm.classList.remove('displayBlock');                
        kartForm.classList.add('displayNone');                
})

