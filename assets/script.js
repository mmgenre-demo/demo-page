// 这里控制genre展示顺序
const genres = [
  "rock",
  "rap",
  "classical",
  "pop",
  "world",

  "jazz",
  "blues",
  "rnb",
  "electronic",
  "country"
];

/**
 * Audio mapping layer
 * Only modify filename (song id)
 */
const audioMap = {
  pop:        "pop_ballad-pop_suno_001_01.wav",
  rock:       "rock_punk-rock_suno_000_04.wav",
  rap:        "rap_old-skool-rap-pioneers_suno_000_16.wav",
  classical:  "classical_opera_suno_005_18.wav",
  jazz:       "jazz_bebop-jazz_suno_000_06.wav",
  blues:      "blues_delta-blues_suno_000_14.wav",
  rnb:        "rnb_neo-soul_suno_000_24.wav",
  world:      "world_africa_suno_000_08.wav",
  electronic: "electronic_house_suno_000_18.wav",
  country:    "country_bluegrass-country_suno_001_02.wav",
};

const container = document.getElementById("audio-table");

genres.forEach((genre) => {

  const filename = audioMap[genre];

  if (!filename) {
    console.warn(`Missing audio mapping for genre: ${genre}`);
    return;
  }

  const sunoPath = `audio/gt/${genre}/${filename}`;
  const svsPath  = `audio/visinger2/${genre}/${filename}`;

  const block = document.createElement("div");
  block.className = "genre-block";

  block.innerHTML = `
    <div class="genre-title">${genre.toUpperCase()}</div>

    <div class="audio-row">
      <div class="label">Suno GT</div>
      <audio controls src="${sunoPath}"></audio>
    </div>

    <div class="audio-row">
      <div class="label">SVS Model</div>
      <audio controls src="${svsPath}"></audio>
    </div>
  `;

  container.appendChild(block);
});
