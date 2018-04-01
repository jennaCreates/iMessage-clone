const emojiIcon = document.querySelector('#emoji-icon');
const emojiContainer = document.querySelector('.emoji-container');
const emojiOne = document.querySelector('#emoji-one');
const emojiTwo = document.querySelector('#emoji-two');
const emojiThree = document.querySelector('#emoji-three');
const emojiFour = document.querySelector('#emoji-four');
const emojiFive = document.querySelector('#emoji-five');
const emojiSix = document.querySelector('#emoji-six');
const emojiSeven = document.querySelector('#emoji-seven');
const emojiEight = document.querySelector('#emoji-eight');
const emojiNine = document.querySelector('#emoji-nine');
const emojiTen = document.querySelector('#emoji-ten');
const emojiEleven = document.querySelector('#emoji-eleven');
const emojiTwelve = document.querySelector('#emoji-twelve');
const inputField = document.querySelector('#iMessage-field');
const showModal = document.querySelector('.overlay');
const blueArrow = document.querySelector('#blue-arrow');


emojiIcon.addEventListener('click', showEmojis);
emojiOne.addEventListener('click', addEmojiToInput);
blueArrow.addEventListener('click', showTheModal);
// showModal.addEventListener('click', sendEmojiAnim);


function showEmojis(){
  if (emojiContainer.style.display === 'none'){
    emojiContainer.style.display = 'flex';
  } else {
    emojiContainer.style.display = 'none';
  }
}

function addEmojiToInput(){
  document.querySelector('#iMessage-field').placeholder = '';
  inputField.style.background = 'url(img/Layer-1.png)';
  inputField.style.backgroundRepeat = 'no-repeat';
  inputField.style.backgroundSize = '30px';
  inputField.style.backgroundPosition = 'center';
  emojiContainer.style.display = 'none'
}

function showTheModal(){
  showModal.style.display = 'block';
}


