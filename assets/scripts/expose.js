// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const volIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');
  const mainImage = document.querySelector('#expose img');

  // which volume
  volSlider.addEventListener('input', (event) => {
    const volume = event.target.value;
    audioElement.volume = volume / 100;

    if (volume == 0) {
      volIcon.src = 'assets/icons/volume-level-0.svg';
    } 
    else if (volume > 1 && volume < 33) {
      volIcon.src = 'assets/icons/volume-level-1.svg';
    } 
    else if (volume > 33 && volume < 67) {
      volIcon.src = 'assets/icons/volume-level-2.svg';
    } 
    else {
      volIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // button
  playButton.addEventListener('click', () => {
    if (audioElement.paused) {
      audioElement.play();
    } 
    else {
      audioElement.pause();
    }

    if (hornSelect.value === 'party-horn') {
      const javaScriptConfetti = new JSConfetti();
      javaScriptConfetti.addConfetti();
    }
  });

  // which horn
  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    mainImage.src = `assets/images/${selectedHorn}.svg`;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

}

