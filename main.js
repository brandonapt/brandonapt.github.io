window.onload = function() {

  $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
    document.getElementById('ip').innerHTML = "<b>"+data.ip;
    document.title = data.ip;
  });
  window.AudioContext = window.AudioContext||window.webkitAudioContext; //fix up prefixing
      // play the saponge.mp3 file
      var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
      if (!isChrome && !isSafari) {
          $('#iframeAudio').remove()
      }
      else {
          $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
      }
  
  }