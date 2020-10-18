const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false
}

// get values from HTML
const spanInformations = document.querySelectorAll('.orphanage-informations')[0]
const { lat, lng } = spanInformations.dataset

// create map
const map = L.map('mapid', options).setView([lat, lng], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker
L.marker([lat, lng], { icon }).addTo(map)

spanInformations.remove()
// image gallery
function selectImage(event) {
    const button = event.currentTarget
    const buttons = document.querySelectorAll('.active')
    buttons.forEach(btn => {
        console.log(btn.classList)
        btn.classList.remove('active')
    })
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')
    imageContainer.src = image.src
    button.classList.add('active')
}