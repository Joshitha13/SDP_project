var homestayList = document.getElementById("homestayList");
var fromSelect = document.getElementById("fromDate");
var toSelect = document.getElementById("toDate");
var checkBtn = document.getElementById("checkBtn");
var homestays = [
  { name:"Palm Grove Room", location:"Varkala, Kerala", price:2500, rating:4.5, image:"../ImgSDP/palm_grove.jpg", availableDates:["2025-12-15","2025-12-18","2025-12-21"] },
  { name:"Royal Suite", location:"Jaipur, Rajasthan", price:3600, rating:4.8, image:"../ImgSDP/royal.webp", availableDates:["2025-12-16","2025-12-20","2025-12-27"] },
  { name:"Mountain Cozy Room", location:"Manali, HP", price:2200, rating:4.6, image:"../ImgSDP/mountain.webp", availableDates:["2025-12-15","2025-12-19","2025-12-22"] },
  { name:"Beachfront Room", location:"Goa", price:3200, rating:4.7, image:"../ImgSDP/beach.jpg", availableDates:["2025-12-17","2025-12-21","2025-12-30"] },
  
  { name:"Backwater Suite", location:"Alleppey, Kerala", price:3000, rating:4.5, image:"../ImgSDP/backwaters.jpg", availableDates:["2025-12-15","2025-12-16","2025-12-25"] },
  { name:"Snow Peak Room", location:"Shimla, HP", price:2700, rating:4.4, image:"../ImgSDP/snowpeak.jpg", availableDates:["2025-12-20","2025-12-24","2025-12-28"] },
  
  { name:"Tea Garden Room", location:"Darjeeling, WB", price:3100, rating:4.8, image:"../ImgSDP/tea_garden.webp", availableDates:["2025-12-16","2025-12-18","2025-12-27"] },
  { name:"Hilltop Harmony Room", location:"Ooty, TN", price:2900, rating:4.7, image:"../ImgSDP/hilltop.jpg", availableDates:["2025-12-15","2025-12-22","2025-12-29"] },
 
  { name:"Forest Edge Room", location:"Wayanad, Kerala", price:2900, rating:4.7, image:"../ImgSDP/forest.jpg", availableDates:["2025-12-18","2025-12-22","2025-12-30"] },
  { name:"Valley Mist Room", location:"Kodaikanal, TN", price:2700, rating:4.6, image:"../ImgSDP/valleymist.jpg", availableDates:["2025-12-15","2025-12-23","2025-12-27"] },
  { name:"Sunset Retreat Room", location:"Varkala, Kerala", price:2700, rating:4.6, image:"../ImgSDP/sunset.jpg", availableDates:["2025-12-16","2025-12-21","2025-12-28"] },
  { name:"Cloudscape Villa Room", location:"Coorg, Karnataka", price:3300, rating:4.9, image:"../ImgSDP/cloudscape.avif", availableDates:["2025-12-20","2025-12-24","2025-12-30"] },
  
];

function fillDateSelects() {
  var start = 15;
  var end = 30;
  for (var d = start; d <= end; d++) {
    var day = d.toString();
    if (day.length === 1) { day = "0" + day; }
    var value = "2025-12-" + day;
    var opt1 = document.createElement("option");
    opt1.value = value;
    opt1.textContent = day + "-12-2025";
    fromSelect.appendChild(opt1);
    var opt2 = document.createElement("option");
    opt2.value = value;
    opt2.textContent = day + "-12-2025";
    toSelect.appendChild(opt2);
  }
}

function showList(list) {
  homestayList.innerHTML = "";
  if (list.length === 0) {
    homestayList.innerHTML = "<div class='no-results'>No homestays available for this range 😔</div>";
    return;
  }
  list.forEach(function(h) {
    var card = document.createElement("div");
    card.className = "card";
  card.innerHTML = `
  <img src="${h.image}" alt="${h.name}">
  <div class="card-content">
    <h3>${h.name}</h3>
    <p><b>📍 ${h.location}</b></p>
    <p class="price">₹${h.price} / night</p>
    <p>⭐ ${h.rating}</p>
    <button class="book-btn" onclick="bookNow('${h.name}')">Book Now</button>
  </div>
`;

    homestayList.appendChild(card);
  });
}

fillDateSelects();
showList(homestays);

checkBtn.onclick = function() {
  var from = fromSelect.value;
  var to = toSelect.value;
  if (!from || !to) {
    alert("Please choose both From and To dates.");
    return;
  }
  if (from > to) {
    alert("From date must be before or same as To date.");
    return;
  }

  var filtered = homestays.filter(function(h) {
    for (var i = 0; i < h.availableDates.length; i++) {
      var d = h.availableDates[i];
      if (d >= from && d <= to) {
        return true;
      }
    }
    return false;
  });

  showList(filtered);
};
function bookNow(name) {
  alert("✅ You selected: " + name + "\nProceed to booking confirmation!");
}