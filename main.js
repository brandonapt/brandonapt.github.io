window.onload = function() {

$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
  document.getElementById('ip').innerHTML = "<b>"+data.ip;
  document.title = data.ip;
});
window.AudioContext = window.AudioContext||window.webkitAudioContext; //fix up prefixing
    // play the saponge.mp3 file
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    if ( navigator.vendor.toLowerCase().includes('apple')) {
      document.body.addEventListener('touchstart', function() {
        alert('safari')
        $('#iframeAudio').remove()
        var audio = new Audio('sponge.mp3');
        audio.play();
        audio.loop = true
      }, false);
    }
       $('#playAudio').remove() 

}