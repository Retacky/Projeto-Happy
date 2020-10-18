// create map
const map = L.map('mapid').setView([-5.0937358,-42.8111182], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lgn = event.latlng.lng
    document.querySelector("[name='lat'").value = lat
    document.querySelector("[name='lng']").value = lgn
    marker && map.removeLayer(marker)
    marker = L.marker([lat, lgn], {icon}).addTo(map)
})

// add photo
function addPhotoField() {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    const input = newFieldContainer.children[0];
    if(!input.value) {
        return;
    }
    input.value = ""
    container.appendChild(newFieldContainer)
}

// delete photo link
function deleteField(event) {
    const currentSpan = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1) { 
        currentSpan.parentNode.children[0].value = ''
        return
    }
    currentSpan.parentNode.remove()
}


// select yes or no
function toggleSelect(event) {
    const clickedButton = event.currentTarget
    let actived = clickedButton.classList.contains('active')
    document.querySelectorAll('.active').forEach(activedBtn => activedBtn.classList.remove('active'))
    clickedButton.classList.add('active')
    const input = document.querySelector('#open_on_weekends')
    input.value = clickedButton.dataset.value
}

// validating the form values
function validate(event) {
    if(!marker) {
        event.preventDefault()
        alert('Você não definiu o ponto do orfanato no mapa.')
    }
}