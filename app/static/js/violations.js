// -----------------------------------------------------------------------------------------------
// -------------------------FUNCTIONS ------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

function populateSelect(arr, uid) {
  // select = document.getElementById('caseStatus');
  let options = [];

  if (arr) {
    for (let i = 0; i<arr.length; i++){
      let option = "<option class='dropdown-item'>" + arr[i] + "</option>"
      options.push(option);
    }
  
    if (uid == '#caseStatus') {
      options.unshift("<option class='dropdown-item'>None</option>");
    };
    $(uid).html(options);
    $(uid).selectpicker('refresh');
  };
};

function retrieveStatus(caseType) {
  $.getJSON(`/choices_data/${caseType}`, function(data){
    console.log(data);
    populateSelect(data,'#caseStatus');
  });
};  

function fetchPopup() {
  let select = document.getElementById('pOptions');
  let caseLength = select.options.length;
  if (select.selectedIndex == -1) {
    var obj_info = undefined
  } else {
    let i = select.options[select.selectedIndex].index;
    var obj_info = popupObj[i];
  }

  if (obj_info == undefined) {
    document.getElementById('pCaseCount').innerHTML =  `<b>Case Count:</b> ${caseLength}`;
    document.getElementById('pCaseNum').innerHTML = '';
    document.getElementById('pStatus').innerHTML = '';
    document.getElementById('pDescription').innerHTML = '';
    $('#pOptions').html('');
    $('#pOptions').selectpicker('refresh');
  } else {
    let urlQuery = `https://inspections.grcity.us/CitizenAccess/Cap/GlobalSearchResults.aspx?QueryText=${obj_info.CaseNumber}`
    document.getElementById('pCaseCount').innerHTML = `<b>Case Count:</b> ${caseLength}`;
    document.getElementById('pCaseNum').innerHTML = `<b>Case Number:</b> <a href=${urlQuery} target="_blank">${obj_info.CaseNumber}</a>`;
    document.getElementById('pStatus').innerHTML = `<b>Case Status:</b> ${obj_info.CaseStatus}`;
  
    if (obj_info.Description == null) {
      document.getElementById('pDescription').innerHTML = '<b>Description:</b>';
    } else {
      document.getElementById('pDescription').innerHTML = `<b>Description:</b> ${obj_info.Description}`;
    };
  };
};

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function fetchReport() {
  data = {
    uid: currentUID
  }
  $.ajax({
    type: 'POST',
    url: '/check-status',
    data: JSON.stringify(data),
    contentType:'application/json;charset=UTF-8',
    success: function(data) {
      if (data.ready == 'Ready') {
        $("#download-link").css("visibility", "visible")
        $("#creating-report").css("visibility", "hidden")
        let link = document.getElementById('inner-download')
        link.setAttribute('href',`/download-file/${currentUID}`)
        console.log('Clearing interval')
        clearInterval(myTimer);
      };
    }
  })
};  

// -----------------------------------------------------------------------------------------------
// ------------------------- MAPBOX VARIABLES AND LOGIC ------------------------------------------
// -----------------------------------------------------------------------------------------------
// const parcelFile = 'https://grviolations.s3.us-east-2.amazonaws.com/parcels.geojson'
// const cases      = 'https://grviolations.s3.us-east-2.amazonaws.com/cases.geojson'
const parcelFile = "static/parcels.geojson"
const cases      = "static/cases.geojson"

mapboxgl.accessToken = 'pk.eyJ1IjoiZnJlZXN0b2siLCJhIjoiY2p5bGd1dWg5MDhiZjNvdDgyYmFta2dweCJ9.5pV_bAq161_KlSJgGw0hYQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-85.669,42.965],
  zoom: 14.72,
  maxZoom: 22
});

map.on('load', function() {
  // add sources
  map.addSource("cases", {
    type: "geojson",
    data: cases
  });
  map.addSource('parcels', {
    type: 'geojson',
    data: parcelFile
  });
  // add layers
  map.addLayer({
    id: 'parcelLayer',
    type: 'fill',
    source: 'parcels',
    minzoom: 15,
    paint: {
      'fill-color': 'rgba(107, 112, 108, 0)',
      'fill-outline-color': 'rgba(107, 112, 108, 1)'
    }
  });
  map.addLayer({
    id: 'cases',
    type: "circle",
    source: 'cases',
    filter: ['all',
              ['==', 'Open',true]
            ],
    paint: {
      'circle-color': "#4264FB",
      "circle-radius": 8,
      "circle-stroke-width": 0.5,
      "circle-stroke-color": "#697fe2",
      'circle-stroke-width': 2
    }
  });

  map.addLayer({
    'id': 'parcelLabels',
    'type': 'symbol',
    'source': 'parcels',
    'minzoom': 18,
    'layout': {
      'text-field': ['get', 'Address'],
      'text-variable-anchor': ['top','bottom'],
      // 'text-radial-offset': 0.5,
      'text-justify': 'auto'
    }
  });

  let geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    placeholder: 'Search for an address...',
    setProximity: [-85.65,42.966],
    });
     
  document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

  // add pop-up logic
  map.on('click', 'parcelLayer', function(e) {
    let features = map.queryRenderedFeatures({layers: ['cases']});
    let popupArray = []
    popupObj.length = 0 // empty array of objects for new parcel
    features.forEach(pt => {
      let inside = turf.inside(pt.geometry, e.features[0].geometry);
      if (inside) {
        let obj = {};
        let p = pt.properties;
        let msg = [p.Date, p['Case Type']]

        obj.Date = p.Date;
        obj.CaseNumber = p['Case Number'];
        obj.CaseStatus = p.Status;
        obj.Description = p.Description;

        popupArray.push(msg)
        popupObj.push(obj)
      };
    });

    if (popupArray.length == 0) {
      let header = e.features[0].properties.Address + ' - ' + e.features[0].properties.PNUM;
      document.getElementById('headingOne').innerText = header;
      fetchPopup();
    } else {
      popupArray.sort(function(a,b) {
        return Date.parse(b[0]) - Date.parse(a[0])
      });
      popupObj.sort(function(a,b) {
        return Date.parse(b.Date) - Date.parse(a.Date)
      });
  
      let popupFinal = popupArray.map((item) => item.join(" - "));
  
      populateSelect(popupFinal, '#pOptions');
      let header = e.features[0].properties.Address + ' - ' + e.features[0].properties.PNUM;
      document.getElementById('headingOne').innerText = header;
  
      fetchPopup();
    }

    

  });
     
    // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'parcelLayer', function() {
      map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'parcelLayer', function() {
      map.getCanvas().style.cursor = '';
    });

    map.on('idle', () => {
      let caseQuery = map.queryRenderedFeatures({ layers: ['cases']});
      let featureCount = document.getElementById('featureCount');
      if (caseQuery.length < 1000) {
        featureCount.innerHTML = `Code Compliance Cases:  ${caseQuery.length}`;
      } else {
        let len = caseQuery.length/1000;
        let rounded = len.toFixed(1);
        featureCount.innerHTML = `Code Compliance Cases:  ${rounded}k`;
      }
    });
});

// -----------------------------------------------------------------------------------------------
// ------------------------- VARIABLES & LISTENERS -----------------------------------------------
// -----------------------------------------------------------------------------------------------
let popupObj       = [];
let pOptions       = document.getElementById('pOptions');
let openCaseRadio  = document.getElementById('openCases');
let closeCaseRadio = document.getElementById('closedCases');
let allCaseRadio   = document.getElementById('bothCases');
let caseStatus     = document.getElementById('caseStatus');
let viewDOCX       = document.getElementById('viewDOCX');
let viewCSV        = document.getElementById('viewCSV');
let caseType       = document.getElementById('caseType');
let option         = caseType.options[caseType.selectedIndex].value;
let downloadLink   = document.getElementById('download-link')
let innerDownload  = document.getElementById('inner-download')
let creatingReport = document.getElementById('creating-report')
let currentUID     = null;
let myTimer        = null;

retrieveStatus(option);
downloadLink.style.visibility = "hidden";
creatingReport.style.visibility = "hidden";

innerDownload.onclick = () => {
  data = {
    uid: currentUID
  }
  $.ajax({
    type: 'POST',
    url: '/delete-report',
    data: JSON.stringify(data),
    contentType:'application/json;charset=UTF-8',
    success: function(data) {
        console.log('deleted')
    }
  });
};
viewDOCX.onclick = () => {
  myTimer = setInterval('fetchReport()', 5000);
  creatingReport.style.visibility = "visible";
  downloadLink.style.visibility = "hidden";
  currentUID = uuidv4();
  data = {
    uid: currentUID,
    zoom: map.getZoom(),
    lng: map.getCenter().lng,
    lat: map.getCenter().lat,
    filters: map.getFilter('cases'),
    bbox: map.getBounds(),
  }
  $.ajax({
    type: 'POST',
    url: '/view-docx',
    data: JSON.stringify(data),
    contentType:'application/json;charset=UTF-8',
    success: function(result) {
        console.log(result);
    }
  })
};

pOptions.onchange = () => fetchPopup();

caseType.onchange = () => {
  let option = caseType.options[caseType.selectedIndex].value;
  retrieveStatus(option);

  let filter = map.getFilter('cases');
  if (filter.length == 2) {
    filter.push(['==','Case Type',option]);
  } else if (filter.length > 2) {
    if (option == 'None') {
      filter.splice(2,2);
      caseStatus.options[0].selected = true;
      $('#caseStatus').selectpicker('refresh');
    } else {
      filter[2] = ['==','Case Type',option];
    }
  }
  map.setFilter('cases', filter);
  console.log(map.getFilter('cases'));
};

caseStatus.onchange = () => {
  let option = caseStatus.options[caseStatus.selectedIndex].value;
  let filter = map.getFilter('cases')
  if (filter.length == 3) {
    filter.push(['==','Status',option])
  } else if (filter.length > 3) {
    if (option == 'None') {
      filter.splice(3,1);
    } else {
      filter[3] = ['==','Status',option];
    }
  };
  map.setFilter('cases', filter);
  console.log(map.getFilter('cases'));
};

openCaseRadio.onchange = () => {
  let filter = map.getFilter('cases')
  filter[1] = ['==','Open',true]
  map.setFilter('cases', filter)
  console.log(map.getFilter('cases'));
};

closeCaseRadio.onchange = () => {
  let filter = map.getFilter('cases')
  filter[1] = ['==','Open',false]
  map.setFilter('cases',filter)
  console.log(map.getFilter('cases'));
};

allCaseRadio.onchange = () => {
  let filter = map.getFilter('cases')
  let filter1 = ['==','Open',true]
  let filter2 = ['==','Open',false]

  filter[1] = ['any',filter1,filter2]
  map.setFilter('cases', filter)
  console.log(map.getFilter('cases'));
};


$('#showButton').click(function() {
  $(this).find('.fa-chevron-down,.fa-chevron-up')
    .toggleClass('fa fa-chevron-up fa-lg')
    .toggleClass('fa fa-chevron-down fa-lg');
});