$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
  document.getElementById('ip').innerHTML = "<b>"+data.ip;
  document.title = data.ip;
});
window.AudioContext = window.AudioContext||window.webkitAudioContext; //fix up prefixing
    // play the saponge.mp3 file
    document.getElementById('myAudio').play();
    document.getElementById('myAudio').loop = true;