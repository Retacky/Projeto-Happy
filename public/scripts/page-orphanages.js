// create map
const map = L.map("mapid").setView([-5.0937358, -42.8111182], 15);

// create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// function to create a marker on map
function addMarker({id, name, lat, lng}) {
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg" alt=""> </a>`
  );

  // create and add marker
  L.marker([Number(lat), Number(lng)], { icon })
    .addTo(map)
    .bindPopup(popup);
}

// Carregando os orfanatos.
let orphanagesSpan = document.querySelectorAll('.orphanages span')
console.log(orphanagesSpan)
orphanagesSpan.forEach((spanOrphanage) => {
  let dataset = spanOrphanage.dataset;
  // create popup overlay
  addMarker(dataset)
});