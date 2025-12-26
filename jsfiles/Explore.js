const destinations = [
  {
    name: "Wayanad Wonders",
    location: "📍 Kerala, India",
    img: "../ImgSDP/Wayanad.jpg",
    desc: "A green paradise filled with waterfalls, caves, and spice plantations.",
    time: "October – May",
    food: "Malabar Parotta, Kerala Sadya",
    highlights: "Edakkal Caves, Pookode Lake, Banasura Dam",
    gem: "Hidden Gem: Meenmutty Falls — Kerala’s second largest waterfall.",
    fact: "Wayanad means ‘land of paddy fields’ in Malayalam."
  },
  {
    name: "Old Manali",
    location: "📍 Himachal Pradesh, India",
    img: "../ImgSDP/Manali.jpg",
    desc: "A peaceful Himalayan village famous for wooden homes, cafes, and apple orchards.",
    time: "March – June",
    food: "Siddu, Trout Fish",
    highlights: "Hadimba Temple, Solang Valley, Manu Temple",
    gem: "Hidden Gem: Jogini Waterfall — a scenic trek away from the village.",
    fact: "Manali is named after Sage Manu — believed to be the creator of humanity."
  },
  {
    name: "Hawa Mahal",
    location: "📍 Jaipur, Rajasthan",
    img: "../ImgSDP/Jaipur.jpg",
    desc: "The 'Palace of Winds' — an iconic pink sandstone masterpiece with 953 windows.",
    time: "October – March",
    food: "Dal Baati Churma, Ghevar",
    highlights: "City Palace, Jantar Mantar, Johari Bazaar",
    gem: "Hidden Gem: Panna Meena ka Kund — a symmetrical ancient stepwell.",
    fact: "Built in 1799 for royal women to observe street life unseen."
  },
  {
    name: "Alleppey Backwaters",
    location: "📍 Kerala, India",
    img: "../ImgSDP/Kerala.jpg",
    desc: "A paradise of houseboats, palm trees, and calm lagoons — the Venice of the East.",
    time: "November – February",
    food: "Karimeen Pollichathu, Appam with Stew",
    highlights: "Vembanad Lake, Alappuzha Beach, Houseboats",
    gem: "Hidden Gem: Kuttanad — where paddy fields lie below sea level.",
    fact: "Alleppey has over 900 km of waterways!"
  },
  {
    name: "Queen of Hills - Shimla",
    location: "📍 Himachal Pradesh, India",
    img: "../ImgSDP/Shimla.jpg",
    desc: "Colonial charm, pine forests, and mountain views make Shimla a timeless hill station.",
    time: "March – June / December – January",
    food: "Chana Madra, Babru",
    highlights: "Mall Road, Ridge, Kufri",
    gem: "Hidden Gem: Mashobra — serene pine forests away from crowds.",
    fact: "Shimla was once the summer capital of British India."
  },
  {
    name: "Tea Gardens of Darjeeling",
    location: "📍 West Bengal, India",
    img: "../ImgSDP/Darjeeling.jpg",
    desc: "Cool mountain breeze, toy trains, and lush tea estates define this hill town.",
    time: "March – May / September – December",
    food: "Momos, Thukpa",
    highlights: "Tiger Hill, Batasia Loop, Peace Pagoda",
    gem: "Hidden Gem: Tinchuley Village — a quiet eco-friendly retreat.",
    fact: "Darjeeling’s toy train is a UNESCO World Heritage site."
  },
  {
    name: "Ooty Rose Garden",
    location: "📍 Tamil Nadu, India",
    img: "../ImgSDP/Ooty.jpg",
    desc: "A floral paradise with over 20,000 rose varieties nestled in the Nilgiri Hills.",
    time: "April – June",
    food: "Varkey Biscuits, Ooty Chocolate",
    highlights: "Rose Garden, Botanical Garden, Ooty Lake",
    gem: "Hidden Gem: Avalanche Lake — serene and rarely crowded.",
    fact: "Ooty’s Rose Garden is the largest in India."
  },
   {
    name: "Goa Beach",
    location: "📍 Goa, India",
    img: "../ImgSDP/Goa.jpg",
    desc: "Golden sands, lively nightlife, and Portuguese charm — Goa is India’s top tropical escape.",
    time: "October – February",
    food: "Goan Fish Curry, Bebinca",
    highlights: "Baga Beach, Fort Aguada, Dudhsagar Falls",
    gem: "Hidden Gem: Cola Beach — a tranquil lagoon surrounded by palm trees.",
    fact: "Did you know? Goa was under Portuguese rule for over 450 years!"
  },
  {
    name: "Vattakanal",
    location: "📍 Tamil Nadu, India",
    img: "../ImgSDP/Vattakanal.jpg",
    desc: "A misty hill village known as 'Little Israel of India', perfect for quiet stays.",
    time: "September – March",
    food: "Shakshuka, Israeli Falafel",
    highlights: "Dolphin’s Nose, Echo Point, Vattakanal Falls",
    gem: "Hidden Gem: Altaf’s Café — serving views with Israeli cuisine.",
    fact: "Vattakanal attracts backpackers from Israel after their military service."
  },
  {
    name: "Varkala Temple",
    location: "📍 Kerala, India",
    img: "../ImgSDP/Varakaltemple.jpg",
    desc: "An ancient temple atop red cliffs overlooking the Arabian Sea.",
    time: "October – March",
    food: "Fish Curry, Puttu and Kadala Curry",
    highlights: "Janardanaswamy Temple, Varkala Cliff, Black Beach",
    gem: "Hidden Gem: Edava Lakes — peaceful backwaters near Varkala.",
    fact: "The Janardanaswamy Temple is over 2000 years old."
  },
  {
    name: "Coorg",
    location: "📍 Karnataka, India",
    img: "../ImgSDP/Coorg.jpg",
    desc: "Known as the ‘Scotland of India’ for its misty hills and coffee estates.",
    time: "October – April",
    food: "Pandi Curry, Noolputtu",
    highlights: "Abbey Falls, Dubare Camp, Namdroling Monastery",
    gem: "Hidden Gem: Mandalpatti — stunning hilltop with panoramic views.",
    fact: "Coorg produces 40% of India’s coffee."
  },
  {
    name: "Varkala Beach",
    location: "📍 Kerala, India",
    img: "../ImgSDP/Varkala.jpg",
    desc: "Golden sands beneath red cliffs — a calm seaside haven for relaxation.",
    time: "October – March",
    food: "Seafood Thali, Kerala Sadya",
    highlights: "Varkala Cliff, Kappil Beach, Edava Lakes",
    gem: "Hidden Gem: Odayam Beach — peaceful stretch near Varkala Cliff.",
    fact: "Varkala is the only place in southern Kerala where cliffs meet the sea."
  }
];

const placesContainer = document.getElementById("places-container");

destinations.forEach(place => {
  const div = document.createElement("div");
  div.classList.add("place");
  div.innerHTML = `
    <img src="${place.img}" alt="${place.name}">
    <div class="place-info">
      <h2>${place.name}</h2>
      <p>${place.location}</p>
      <p>${place.desc}</p>
      <p><strong>🕓 Best Time:</strong> ${place.time}</p>
      <p><strong>🍴 Must Try:</strong> ${place.food}</p>
      <p><strong>⭐ Highlights:</strong> ${place.highlights}</p>
      ${place.gem ? `<p><strong>🗺️ ${place.gem}</strong></p>` : ""}
      ${place.fact ? `<p><em>${place.fact}</em></p>` : ""}
    </div>
  `;
  placesContainer.appendChild(div);
});
