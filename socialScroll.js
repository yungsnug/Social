window.min = 90000; // 1.5 min
window.max = 120000; // 2 min

window.jQuery = $;
window.counter = 0;

function likeAndScroll() {
  var heart = jQuery('.coreSpriteHeartOpen');
  heart.click();
  var heartRegion = heart.getBoundingClientRect();
  window.scrollTo(0, heartRegion.top + window.pageYOffset);
  counter++;
  console.log("like count", counter);
}

function likePhoto() {
  var heart = jQuery('.coreSpriteHeartOpen');
  if(!heart) {
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(function() {
      likeAndScroll();
    }, 8000);
  } else {
    likeAndScroll();
  }
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
