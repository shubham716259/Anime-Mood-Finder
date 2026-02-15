async function findAnime() {
  const mood = document.getElementById("mood").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = '<div class="loader"></div>';

  let genre = "";

  // Mood → Genre mapping
  if (mood === "Hype") genre = "1";       // Action
  if (mood === "Sad") genre = "8";        // Drama
  if (mood === "Romantic") genre = "22";  // Romance
  if (mood === "Dark") genre = "41";      // Suspense
  if (mood === "Relaxing") genre = "36";  // Slice of Life

  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?genres=${genre}&limit=12`
    );

    const data = await response.json();

    const randomAnime =
      data.data[Math.floor(Math.random() * data.data.length)];

    resultDiv.innerHTML = `
      <div class="anime-card">
        <img src="${randomAnime.images.jpg.image_url}">
        <h3>${randomAnime.title}</h3>
        <p>${randomAnime.synopsis?.substring(0,180) || "No description available"}...</p>
        <p>⭐ Score: ${randomAnime.score || "N/A"}</p>
      </div>
    `;
  } catch (error) {
    resultDiv.innerHTML = "Error loading anime 😢 Try again.";
    console.error(error);
  }
}
