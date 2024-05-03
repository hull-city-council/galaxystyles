const apiKey = CONFIGURATION.mapsApiKey;

const mapTiles = 'bld-fts-buildingpart-1';

const maxFeatures = 1000;

const mapOptions = CONFIGURATION.mapOptions;

const leafletMap = L.map('leaflet-map', mapOptions);

const locations = CONFIGURATION.locations;

const basemap = L.tileLayer(`https://api.os.uk/maps/raster/v1/zxy/Outdoor_3857/{z}/{x}/{y}.png?key=${apiKey}`).addTo(leafletMap);

let sel = -1;

for ( let i=0; i<locations.length; i++)
{
    markerCount = parseInt(i, 10) +1;
    iconSettings = {
        mapIconUrl: '<svg viewBox="0 0 27 41"><defs><radialGradient id="shadowGradient"><stop offset="10%" stop-opacity="0.4"></stop><stop offset="100%" stop-opacity="0.05"></stop></radialGradient></defs><ellipse cx="13.5" cy="34.8" rx="10.5" ry="5.25" fill="url(#shadowGradient)"></ellipse><path fill="black" d="M27,13.5C27,19.07 20.25,27 14.75,34.5C14.02,35.5 12.98,35.5 12.25,34.5C6.75,27 0,19.22 0,13.5C0,6.04 6.04,0 13.5,0C20.96,0 27,6.04 27,13.5Z"></path><path opacity="0.25" d="M13.5,0C6.04,0 0,6.04 0,13.5C0,19.22 6.75,27 12.25,34.5C13,35.52 14.02,35.5 14.75,34.5C20.25,27 27,19.07 27,13.5C27,6.04 20.96,0 13.5,0ZM13.5,1C20.42,1 26,6.58 26,13.5C26,15.9 24.5,19.18 22.22,22.74C19.95,26.3 16.71,30.14 13.94,33.91C13.74,34.18 13.61,34.32 13.5,34.44C13.39,34.32 13.26,34.18 13.06,33.91C10.28,30.13 7.41,26.31 5.02,22.77C2.62,19.23 1,15.95 1,13.5C1,6.58 6.58,1 13.5,1Z"></path><text x="50%" y="40%" dy=".13em" font-size="16" font-weight="bold" text-anchor="middle" fill="#FFF">'  + markerCount + '</text></svg>'
    };

    L.marker([locations[i].coords.lat,
            locations[i].coords.lng],
        {
            icon: L.divIcon({
                html: L.Util.template(iconSettings.mapIconUrl, iconSettings),
                className: 'map-icon' + (i+1),
                iconAnchor: [12, 32],
                iconSize: [28, 30],
                id: (i+1),
            })
        }
    ).bindPopup(
        '<b>' + locations[i].title +  '</b><br />' +
        locations[i].address1 + '<br />' +
        locations[i].address2).addTo(leafletMap).on('click', iconClick);
}

function clickHandler() {
    leafletMap.closePopup();
    $('.location-result').removeClass("selected");
    $(this).trigger("focus");
    $(this).toggleClass("selected");
    $('.icon' +sel).trigger("unfocus");
    sel = $(this).data('id');
    leafletMap.flyTo([$(this).data('lat'), $(this).data('lng')], 15, {animate: true, duration: 2});
    $('.map-icon' +sel).click();
}
document.querySelectorAll('.location-result')
    .forEach(e => e.addEventListener("click", clickHandler));

function iconClick(e){
    $('.location-result').removeClass("selected");
    $("li[data-id='" + this.options.icon.options.id +"']").toggleClass("selected");
}
