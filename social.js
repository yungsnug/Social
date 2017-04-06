window.min = 90000; // 1.5 min
window.max = 120000; // 2 min

window.mine = $;
window.counter = 0;

function likePhoto() {
  var heart = mine('.coreSpriteHeartOpen');
  if(heart) {
    mine('.coreSpriteHeartOpen').click();
    counter++;
    console.log("like count", counter);
  }
  mine('.coreSpriteRightPaginationArrow').click();
}

likePhoto();

(function loop() {
  var rand = Math.round(Math.random() * (max - min)) + min;
  setTimeout(function() {
    if(counter < 600) {
      likePhoto();
      loop();
    }
  }, rand);
}());

//-----------------------------------------------------

var int = setInterval(function(){

}, Math.floor(Math.random() * (max - min + 1) + min););

//-----------------------TWITTER------------------------------

a = setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);
  $('.not-following .user-actions-follow-button.js-follow-btn').click();
}, 1000);
