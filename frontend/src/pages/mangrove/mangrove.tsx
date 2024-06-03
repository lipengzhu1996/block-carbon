const mangrove = `
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>BlockCarbon Technology</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

  <!-- Favicons -->
  <link href="./static/homepage/img/favicon.png" rel="icon" />
  <link
    href="./static/homepage/img/apple-touch-icon.png"
    rel="apple-touch-icon"
  />·

  <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>

  <!-- Vendor CSS Files -->
  <link href="./static/homepage/vendor/aos/aos.css" rel="stylesheet" />
  <!-- <link href={% static "homepage/vendor/bootstrap/css/bootstrap.min.css" %} rel="stylesheet"> -->
  <link
    href="./static/homepage/vendor/bootstrap-icons/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link
    href="./static/homepage/vendor/boxicons/css/boxicons.min.css"
    rel="stylesheet"
  />
  <link
    href="./static/homepage/vendor/glightbox/css/glightbox.min.css"
    rel="stylesheet"
  />
  <link
    href="./static/homepage/vendor/remixicon/remixicon.css"
    rel="stylesheet"
  />
  <link
    href="./static/homepage/vendor/swiper/swiper-bundle.min.css"
    rel="stylesheet"
  />

  <!-- {% static "homepage/bootstrap/css/bootstrap.min.css" %}  -->
  <!-- Template Main CSS File -->
  <link href="./static/homepage/css/style.css" rel="stylesheet" />

  <!-- =======================================================
  * Template Name: Dewi - v4.7.0
  * Template URL: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->

  <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js"></script>
  <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css" rel="stylesheet" />

  <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></script>
  <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css" type="text/css">

  <script src="https://unpkg.com/@turf/turf@6/turf.min.js"></script>
  <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.2.2/mapbox-gl-draw.js"></script>
  <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.2.2/mapbox-gl-draw.css" type="text/css">
</head>

<style>
  .map {
    top: 0px;
    margin: 0px;
    height: 950px;
    width: 100%;
    position: relative;
  }

  #inputpanel {
    margin: 0px;
    background: black;
  }

  /* #instruction {
    position: relative;
  }
  .info {
    position: relative;
  } */

  .gisSelect {
    /* background: black; */
    color: black;
    /* width: 20px;
    margin: 0px;
    padding: 0px; */
    /* top: 80px;
    left: 5px; */
    /* position: fixed; */
  }

  #info {
    /* background: black; */
    color: white;
    text-align: center;
    width: 100vw;
    margin: 0px;
    padding-end: 10px;
  }

  #bclogo {
    /* background: black; */
    font-weight: 700;
    letter-spacing: 2px;
  }
</style>

<body>

  <div class="pos-f-t">
    <div class="navbar-right fixed-top text-white text-end me-4 fw-bold" id='bclogo'>
      <h2>BlockCarbon</h2>
    </div>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h4 class="text-white">Collapsed content</h4>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>


  <!-- Promo Section - "Map tool" -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3" id="inputpanel">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Subscription-based service
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">

                <!-- Tabs Begin -->
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Mangrove</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Forest</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Other</button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class="mb-2">
                      We filter out area of interest (AOI) by leveraing AI to read terabyte btypes of satellite images.
                    </div>
                    <div class="mb-2">
                      In this demo, we identify locations that found to have mangrove growth between year 1999 and 2019.
                    </div>


                    <div class="form-check gisSelect">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="layer1">
                        <label class="form-check-label" for="flexCheckDefault">
                          Mangrove
                        </label>
                      </div>

                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="layer2">
                        <label class="form-check-label" for="flexCheckChecked">
                          Mangrove years
                        </label>
                      </div>
                    </div>

                    <div class="ms-5" style="color:#51bbd6" ;>
                      Before 2010
                    </div>
                    <div class="ms-5" style="color:#f1f075" ;>
                      2010-2015
                    </div>
                    <div class="ms-5" style="color:#f28cb1" ;>
                      2015-2019
                    </div>

                  </div>
                  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Not included in the demo</div>
                  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Not included in the demo</div>
                </div>
                <!-- Tabs End -->


              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Customized premium service
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">

              <div class="accordion-body">
                <div class="mb-2">
                  Our human experts will work with the AI to satisfy versatile needs from client.
                </div>
                <div class="mb-2">
                  <strong>Draw the area of interest on map for customized imagery service</strong>
                </div>
              </div>

              <!-- <div class="ms-3">
                Draw your own boundary and save.
              </div> -->
              <div class="mx-3 my-0">
                <label for="filenamebox" class="form-label">Project Name</label>
                <input type="" class="form-control" id="filenamebox" placeholder="Project X in South Bangladesh">
              </div>

              <div class="accordion-body">
                <strong>Select imagery</strong>
              </div>
              <div class="form-check gisSelect">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="layer1">
                  <label class="form-check-label" for="flexCheckDefault">
                    Public data
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="layer2">
                  <label class="form-check-label" for="flexCheckChecked">
                    Commercial data
                  </label>
                </div>
              </div>

              <div class="m-3 d-grid gap-2 col-6">
                <button type="button" class="btn btn-primary" id="savedraw">Save</button>
                <button type="button" class="btn btn-primary" id="Retrieve" disabled>Retrieve report</button>
              </div>


            </div>
          </div>

          <!-- <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Raw Images
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>Demo Two: <br> Deforestation in Congo</strong> <br>
                Click on the boundary to compare the start year withe the end year.
              </div>
            </div>
          </div> -->
        </div>
        <div class="form-outline" style="position:fixed;bottom:5px;width:22%;">
          <textarea class="form-control" id="instruction" rows="10"></textarea>
          <label class="form-label" for="instruction"></label>
        </div>
      </div>

      <div class="col-md-9">

        <div class="row" id='mappanel'>
          <div id="map" class="map"></div>
        </div>
        <div class="row">
          <div id="info" class="fixed-bottom text-end"></div>
        </div>
        <!-- <div class="row">
      <div id="instruction"></div>
    </div> -->
        <!-- <div id="gisSelect" class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropb" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Layers
      </button>
      <div class="dropdown-menu" aria-labelledby="dropb" id="dropm">
        <a class="dropdown-item" id="showMangrove">Show mangrove</a>
        <a class="dropdown-item" id="showMangrove1">Show mangrove</a>
      </div>
    </div> -->
      </div>
    </div>
  </div>




  <!-- <div class="container" id='gisSelect'>
    <div class="dropdown">
      <button class="btn btn-dark dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">Layers</button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" id="showMangrove">Show Mangrove</a></li>
        <li><a class="dropdown-item" id="hideMangrove">Hide Mangrove</a></li>
      </ul>
    </div>
  </div> -->




  <script>
    $(document).ready(function() {
      $(".dropdown-toggle").dropdown();
    });
    // $(document).ready(function() {
    //   $('#dropb').click(function() {
    //     console.log('clicked')
    //     $('.dropdown-toggle').dropdown('toggle')
    //   });
    // });

    // $(document).ready(function () {
    //   $('.dropdown-menu').mouseleave(function () {
    //     $(".dropdown-toggle").dropdown('toggle');
    //   });
    // });

    // $(document).on('click', function() {
    //   console.log('clicked')
    //   $('.dropdown-toggle').dropdown('dispose')
    // });

    // $(document).ready(function() {
    //   $('.dropdown-menu').mouseleave(function() {
    //     $(".dropdown-toggle").dropdown('toggle');
    //   });
    // });

    // define access token
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3Blbmdsc2UiLCJhIjoiY2w0ZG5meDBpMDhzdjNwbnJrcG14MzJ6NiJ9.gVzZ0f7j-IscOk_MMCFqag';

    const map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/cpenglse/cl4h6ad6r000b15t4w2b51ybx', // map style URL from Mapbox Studio
      center: [89.62583, 22.18512], // starting position [lng, lat]
      zoom: 10 // starting zoom
      // center: [-68.137343, 45.137451], // starting position
      // zoom: 5 // starting zoom
    });

    map.on('load', async () => {

      map.addSource('mangrove', {
        'type': 'vector',
        'url': 'mapbox://cpenglse.cl66x4p5n03sr20pbdeavnw1e-54yul'
      });

      map.addSource('mangroveYear-8myz6d', {
        'type': 'vector',
        'url': 'mapbox://cpenglse.40b3ba22'
      });
      // then add the layer, referencing the source
      map.addLayer({
        'id': "mangrove",
        'type': 'line',
        'source': 'mangrove',
        'source-layer': 'mangrove',
        'paint': {
          'line-color': '#FFFFFF',
          'line-width': 4
        },
        'layout': {
          // Make the layer visible by default.
          'visibility': 'none'
        },
      });

      map.addLayer({
        'id': 'poly',
        'type': 'fill',
        'source': 'mangrove',
        'source-layer': 'mangrove',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': '#FFFFFF',
          'fill-opacity': 0.1
        },
      });

      map.addLayer({
        'id': "mangroveYear",
        'type': 'line',
        'source': 'mangroveYear-8myz6d',
        'source-layer': 'mangroveYear-8myz6d',
        'paint': {
          'line-color': '#FFFFFF',
          'line-width': 4
        },
        'layout': {
          // Make the layer visible by default.
          'visibility': 'none'
        },
      });

      map.addLayer({
        'id': 'polyYear',
        'type': 'fill',
        'source': 'mangroveYear-8myz6d',
        'source-layer': 'mangroveYear-8myz6d',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-opacity': 1,
          'fill-color': [
            'step',
            ['get', 'value'],
            '#51bbd6',
            2010,
            '#f1f075',
            2015,
            '#f28cb1'
          ],
        },
      });

      const clickedLayer = 'mangrove'
      const clickedLayerFill = 'poly'

      document.getElementById('instruction').innerHTML =
        \`Welcome to BlockCarbon carbon asset verfication system!\`;

      jQuery("#layer1").click(function(e) {

        const visibility = map.getLayoutProperty(
          clickedLayer,
          'visibility'
        );

        // Toggle layer visibility by changing the layout object's visibility property.
        if (visibility === 'none') {
          map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
          map.setLayoutProperty(clickedLayerFill, 'visibility', 'visible');
          document.getElementById('instruction').innerHTML =
            \`Click on the marked areas for details\`;
          // this.className = '';
        } else {
          // this.className = 'active';
          map.setLayoutProperty(
            clickedLayer,
            'visibility',
            'none'
          );
          map.setLayoutProperty(
            clickedLayerFill,
            'visibility',
            'none'
          );
          document.getElementById('instruction').innerHTML =
            "";
        }
      });

      const clickedLayerYear = 'mangroveYear'
      const clickedLayerYearFill = 'polyYear'

      jQuery("#layer2").click(function(e) {

        const visibility = map.getLayoutProperty(
          clickedLayerYear,
          'visibility'
        );

        // Toggle layer visibility by changing the layout object's visibility property.
        if (visibility === 'none') {
          map.setLayoutProperty(clickedLayerYear, 'visibility', 'visible');
          map.setLayoutProperty(clickedLayerYearFill, 'visibility', 'visible');
          document.getElementById('instruction').innerHTML =
            \`Click on the marked areas for details\`;
          // this.className = '';
        } else {
          // this.className = 'active';
          map.setLayoutProperty(
            clickedLayerYear,
            'visibility',
            'none'
          );
          map.setLayoutProperty(
            clickedLayerYearFill,
            'visibility',
            'none'
          );
          document.getElementById('instruction').innerHTML =
            "";
        }
      });


    });

    map.on('mousemove', (e) => {
      var lng = Math.round(e.lngLat['lng'] * 1000000) / 1000000
      var lat = Math.round(e.lngLat['lat'] * 1000000) / 1000000
      document.getElementById('info').innerHTML =
        // \`e.lngLat\` is the longitude, latitude geographical position of the event.
        \`<p> (Longitude: \${lng}, Latitude: \${lat}) <\p>\`;
    });

    // Geocoder
    const coordinatesGeocoder = function(query) {
      // Match anything which looks like
      // decimal degrees coordinate pair.
      const matches = query.match(
        /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
      );
      if (!matches) {
        return null;
      }

      function coordinateFeature(lng, lat) {
        return {
          center: [lng, lat],
          geometry: {
            type: 'Point',
            coordinates: [lng, lat]
          },
          place_name: 'Lat: ' + lat + ' Lng: ' + lng,
          place_type: ['coordinate'],
          properties: {},
          type: 'Feature'
        };
      }

      const coord1 = Number(matches[1]);
      const coord2 = Number(matches[2]);
      const geocodes = [];

      if (coord1 < -90 || coord1 > 90) {
        // must be lng, lat
        geocodes.push(coordinateFeature(coord1, coord2));
      }

      if (coord2 < -90 || coord2 > 90) {
        // must be lat, lng
        geocodes.push(coordinateFeature(coord2, coord1));
      }

      if (geocodes.length === 0) {
        // else could be either lng, lat or lat, lng
        geocodes.push(coordinateFeature(coord1, coord2));
        geocodes.push(coordinateFeature(coord2, coord1));
      }

      return geocodes;
    };

    // Add the control to the map.
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        localGeocoder: coordinatesGeocoder,
        zoom: 4,
        placeholder: 'e.g. Beijing, China',
        mapboxgl: mapboxgl,
        reverseGeocode: true
      })
    );

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      touchEnabled: false,
      // Select which mapbox-gl-draw control buttons to add to the map.
      controls: {
        polygon: true,
        trash: true
      },
      // Set mapbox-gl-draw to draw by default.
      // The user does not have to click the polygon control button first.
      // defaultMode: 'draw_polygon'
    });
    map.addControl(draw);
    //
    // const data = draw.getAll();
    // console.log(data)
    // console.log(data['features'])

    map.on('click', (event) => {
      // if (draw.modes.DRAW_POLYGON != "draw_polygon") {
      const features = map.queryRenderedFeatures(event.point, {
        sourceLayer: ['poly']
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
      document.getElementById('instruction').innerHTML =
        \`Area of Mangrove Growth in Hectare: \${Math.round((feature.properties["areaha"] + Number.EPSILON) * 100) / 100}\`;
      // };
    });

    const saveTemplateAsFile = (filename, dataObjToWrite) => {
      const blob = new Blob([JSON.stringify(dataObjToWrite)], {
        type: "text/json"
      });
      const link = document.createElement("a");

      link.download = filename;
      link.href = window.URL.createObjectURL(blob);
      link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

      const evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      });

      link.dispatchEvent(evt);
      link.remove()
    };

    jQuery("#savedraw").click(function() {

      const data = draw.getAll();
      const geo = data['features'][0]['geometry'];
      document.getElementById('instruction').innerHTML =
        \`Geometry: \${JSON.stringify(geo, undefined,2)}\`;
      const filename = document.getElementById('filenamebox').value;
      console.log("clicked");
      saveTemplateAsFile(\`\${filename}.geojson\`, geo);
    });
  </script>

</body>

</html>`;

export default mangrove;
