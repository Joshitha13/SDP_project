var homestayList = document.getElementById("homestayList");

var homestays = [
  { name:"Varkala Beach", location:"Varkala, Kerala", image:"../ImgSDP/Varkala.jpg" },
  { name:"Hawa Mahal", location:"Jaipur, Rajasthan", image:"../ImgSDP/Jaipur.jpg" },
  { name:"Old Manali", location:"Manali, HP", image:"../ImgSDP/Manali.jpg" },
  { name:"Goa Beach", location:"Goa", image:"../ImgSDP/Goa.jpg" },
  { name:"Allapuzha Back Waters", location:"Alleppey, Kerala", image:"../ImgSDP/Kerala.jpg" },
  { name:"Queen of Hill Station", location:"Shimla, HP", image:"../ImgSDP/Shimla.jpg" },
  { name:"Tea Garden", location:"Darjeeling, WB", image:"../ImgSDP/Darjeeling.jpg" },
  { name:"Ooty Rose Garden", location:"Ooty, TN", image:"../ImgSDP/ooty.jpg" },
  { name:"Wayanad Wonders", location:"Wayanad, Kerala", image:"../ImgSDP/Wayanad.jpg" },
  { name:"Vattakanal", location:"Kodaikanal, TN", image:"../ImgSDP/Vattakanal.jpg" },
  { name:"Varkala Temple", location:"Varkala, Kerala", image:"../ImgSDP/Varakaltemple.jpg" },
  { name:"Coorg Temple", location:"Coorg, Karnataka", image:"../ImgSDP/Coorg.jpg" }
];

function showList(list) {
  homestayList.innerHTML = "";
  if (list.length === 0) {
    homestayList.innerHTML = "<div class='no-results'>No homestays available 😔</div>";
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
      </div>
    `;
    homestayList.appendChild(card);
  });
}

showList(homestays);