
// 这里控制genre展示顺序
const genres = [
  "pop",
  "rock",
  "rap",
  "classical",
  "world",

  "jazz",
  "blues",
  "rnb",
  "electronic",
  "country"
];

/**
 * Audio mapping layer
 * Only modify this part when changing samples
 */
const audioMap = {
  pop: {
    suno: "audio/gt/pop/pop_ballad-pop_suno_001_01.wav",
     svs:  "audio/visinger2/pop/pop_ballad-pop_suno_001_01.wav"
  },
  rock: {
    suno: "audio/gt/rock/rock_punk-rock_suno_000_04.wav",
     svs:  "audio/visinger2/rock/rock_punk-rock_suno_000_04.wav"
  },
  rap: {
    suno: "audio/gt/rap/rap_old-skool-rap-pioneers_suno_000_16.wav",
     svs:  "audio/visinger2/rap/rap_old-skool-rap-pioneers_suno_000_16.wav"
  },
  classical: {
    suno: "audio/gt/classical/classical_opera_suno_005_18.wav",
     svs:  "audio/visinger2/classical/classical_opera_suno_005_18.wav"
  },
  jazz: {
    suno: "audio/gt/jazz/jazz_bebop-jazz_suno_000_06.wav",
     svs:  "audio/visinger2/jazz/jazz_bebop-jazz_suno_000_06.wav"
  },

  blues: {
    suno: "audio/gt/blues/blues_delta-blues_suno_000_14.wav",
     svs:  "audio/visinger2/blues/blues_delta-blues_suno_000_14.wav"
  },
  rnb: {
    suno: "audio/gt/rnb/rnb_motown-soul_suno_000_01.wav",
     svs:  "audio/visinger2/rnb/rnb_motown-soul_suno_000_01.wav"
  },
  world: {
    suno: "audio/gt/world/world_africa_suno_000_08.wav",
     svs:  "audio/visinger2/world/world_africa_suno_000_08.wav"
  },
  electronic: {
    suno: "audio/gt/electronic/electronic_house_suno_000_18.wav",
     svs:  "audio/visinger2/electronic/electronic_house_suno_000_18.wav"
  },
  country: {
    suno: "audio/gt/country/country_bluegrass-country_suno_001_02.wav",
     svs:  "audio/visinger2/country/country_bluegrass-country_suno_001_02.wav"
  },

};

const container = document.getElementById("audio-table");

genres.forEach((genre) => {
  const entry = audioMap[genre];

  if (!entry) {
    console.warn(`Missing audio mapping for genre: ${genre}`);
    return;
  }

  const block = document.createElement("div");
  block.className = "genre-block";

  block.innerHTML = `
    <div class="genre-title">${genre.toUpperCase()}</div>

    <div class="audio-row">
      <div class="label">Suno GT</div>
      <audio controls src="${entry.suno}"></audio>
    </div>

    <div class="audio-row">
      <div class="label">SVS Model</div>
      <audio controls src="${entry.svs}"></audio>
    </div>
  `;

  container.appendChild(block);
});
