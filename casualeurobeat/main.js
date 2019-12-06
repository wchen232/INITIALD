$(document).ready(function(){
  console.log("Document is ready");

  mySounds = [ 'sound1', 'sound2', 'sound3', 'sound4', 'sound5', 'sound6', 'sound7', 'sound8' ]

  function randomSound() {
    var index = Math.floor(Math.random() * mySounds.length);
    var id = mySounds[index];
    var audioElement = document.getElementById(id);
    audioElement.play();
  }

  $(".Image").click(function(){
    // alert("it works!");
    for (i = 0; i < mySounds.length; i++) {
      var id = mySounds[i];
      var audioElement = document.getElementById(id);
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    randomSound();
  });
  // var links = [
  //   'music/Edo Boys - No One Sleep in Tokyo.mp3',
  //   'music/Mako & Sayuki - Wings of Fire.mp3',
  //   'music/Manuel - Gas Gas Gas.mp3',
  //   'music/Max Coveri - Running in the 90`s.mp3',
  //   'music/Mega NRG Man - Back on the Rocks.mp3',
  //   'music/Nathalie - Heartbeat.mp3',
  //   'music/Niko - Night of Fire.mp3',
  //   'music/Vicky Vale - Dancing.mp3'
  // ];
  //
  // mySounds = [ 'sound1', 'sound2', 'sound3', 'sound4', 'sound5' ]
  // function randomSound() {
  //   var index = Math.floor(Math.random() * 1000) % mySounds.length;
  //   var id = mySounds[index];
  //   var audioElement = document.getElementById(id);
  //   audioElement.play();
  // }
  //
  // function randomSong() {
  //   // Make sure we do not display the same video twice in a row
  //   var random = Math.floor(Math.random() * links.length);
  //   document.getElementById("audioID").src = links[random];
  //   document.getElementById("audioID").play();
  // }
  //
  // $('img').click(function() {
  //   var random = Math.floor(Math.random() * links.length);
  //   document.getElementById("audioID").src = links[random];
  //   document.getElementById("audioID").play();
  // }
});
