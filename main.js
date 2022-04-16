$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
  document.getElementById('ip').innerHTML = "<b>"+data.ip;
  document.title = data.ip;
});
    // play the saponge.mp3 file
    document.getElementById('myAudio').play();
    document.getElementById('myAudio').loop = true;