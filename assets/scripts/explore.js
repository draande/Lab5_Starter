// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectVoice = document.getElementById('voice-select');
  const text = document.getElementById('text-to-speak');
  const face = document.querySelector('section#explore img');
  const talkButton = document.querySelector('button');

  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices();
    
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('language', voices[i].lang);
      option.setAttribute('name', voices[i].name);
      selectVoice.appendChild(option);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  populateVoices();

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(text.value);
    
    const selectedOption = selectVoice.selectedOptions[0].getAttribute('name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
        break;
      }
    }

    utterance.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
    }

    utterance.onend = () => {
      face.src = 'assets/images/smiling.png';
    }

    speechSynthesis.speak(utterance);
  });
}

