var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.93863106417265,30.3230545],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

}

var link = document.querySelector(".write-us-button");

var popup = document.querySelector(".modal-write-us");

var close = popup.querySelector(".btn-close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
