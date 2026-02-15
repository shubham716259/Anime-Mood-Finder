const animeList = [
  {
    title: "Attack on Titan",
    mood: ["Hype", "Dark"],
    energy: "High",
    description: "Humanity fights for survival against giant Titans.",
    image: "image/aot.jpg"   // make sure path is correct
  },
  {
    title: "Your Name",
    mood: ["Romantic"],
    energy: "Medium",
    description: "Two strangers mysteriously swap bodies across time.",
    image: "image/your name.jpg"
  },
  {
    title: "A Silent Voice",
    mood: ["Sad"],
    energy: "Low",
    description: "A story of redemption and forgiveness.",
    image: "image/A_Silent_Voice_.jpg"
  }
];

function findAnime() {
  const mood = document.getElementById("mood").value;
  const energy = document.getElementById("energy").value;
  const resultDiv = document.getElementById("result");

  const filtered = animeList.filter(anime =>
    anime.mood.includes(mood) &&
    anime.energy === energy
  );

  if (filtered.length === 0) {
    resultDiv.innerHTML = "No anime found 😢";
    return;
  }

  const randomAnime =
    filtered[Math.floor(Math.random() * filtered.length)];

  resultDiv.innerHTML = `
    <div class="anime-card">
      <img src="${randomAnime.image}" alt="anime">
      <h3>${randomAnime.title}</h3>
      <p>${randomAnime.description}</p>
    </div>
  `;
}
