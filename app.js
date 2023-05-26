hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('x');
    nav.classList.toggle('open');
});

mapboxgl.accessToken = 'pk.eyJ1IjoidGdsYXp6IiwiYSI6ImNsZjZ0aGo4ZzFxMGUzb3IwcmloZHYzZWgifQ.sfSpvq6ZevT5lUO45bZf5w';

let loc = [14.432920703901994, 50.08725860834356];

var map = new mapboxgl.Map({
    container: 'map',
    center: loc,
    zoom: 14,
    style: 'mapbox://styles/tglazz/clhg9sguk01c001qyhwwi8xy0'
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

let marker = document.createElement('div');
marker.id = 'marker';

let popup = new mapboxgl.Popup({ offset: 70 })
    .setHTML('<div id="hello">Prague City University</div>');

new mapboxgl.Marker(marker, { anchor: 'bottom' })
    .setLngLat(loc)
    .addTo(map)
    .setPopup(popup);
