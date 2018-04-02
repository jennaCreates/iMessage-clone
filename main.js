const emojiIcon = document.querySelector('#emoji-icon');
      emojiContainer = document.querySelector('.emoji-container'),
      emojiOne = document.querySelector('#emoji-one'),
      emojiTwo = document.querySelector('#emoji-two'),
      emojiThree = document.querySelector('#emoji-three'),
      emojiFour = document.querySelector('#emoji-four'),
      emojiFive = document.querySelector('#emoji-five'),
      emojiSix = document.querySelector('#emoji-six'),
      emojiSeven = document.querySelector('#emoji-seven'),
      emojiEight = document.querySelector('#emoji-eight'),
      emojiNine = document.querySelector('#emoji-nine'),
      emojiTen = document.querySelector('#emoji-ten'),
      emojiEleven = document.querySelector('#emoji-eleven'),
      emojiTwelve = document.querySelector('#emoji-twelve'),
      inputField = document.querySelector('#iMessage-field'),
      showModal = document.querySelector('.overlay'),
      blueArrow = document.querySelector('#blue-arrow'),
      modalClose = document.querySelector('#modal-closeBtn'),
      effectsContainer = document.querySelector('.effects-container');
      slam = document.querySelector('#slam');
      loud = document.querySelector('#loud');
      gentle = document.querySelector('#gentle');


emojiIcon.addEventListener('click', showEmojis);
emojiOne.addEventListener('click', addEmojiToInput);
blueArrow.addEventListener('click', showTheModal);
modalClose.addEventListener('click', closeModal);
slam.addEventListener('click', slamEmoji);
loud.addEventListener('click', loud);
gentle.addEventListener('click', gentle);
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
  const addEmojiToModal = document.createElement('div');
  addEmojiToModal.className = 'emojis layoutEmojis';
  addEmojiToModal.id = 'emoji-one';
  effectsContainer.appendChild(addEmojiToModal);
}

function slamEmoji(){
  const slamEmojiOne = document.querySelector('#emoji-one');
  slamEmojiOne.classList.add = 'animate pulse';
}

function closeModal(){
  showModal.style.display = 'none';
}


