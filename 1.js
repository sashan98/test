window.onload = function() {
    var songs = [
        {
            id: 0,
            title: 'Eminem',
            road: '1.mp3'
        },
        {
            id: 1,
            title: 'Drake',
            road:'2.mp3'
        }, 
        {
          id: 2,
          title: 'Imagine Dragons -Thunder',
          road:'3.mp3'
        },
        {
          id: 3,
          title: 'Basta - Sansara',
          road:'4.mp3'
        },
    ];
    var i = 0;
    var audio = new Audio(songs[i].road);
    var playButton = document.querySelector('#play');
    var pauseButton = document.querySelector('#pause');
    var trackTime = document.querySelector('.track-time');
    var streamTime = document.querySelector('.current-time');
    var nextTackButton = document.querySelector('#ttr');
    var backTrackButton = document.querySelector('#ttp');
    var Button = document.querySelector('.container');
    var Button1 = document.querySelector('.progress');

    document.querySelector('#Namesongs').innerHTML = songs[0].title;
    
    backTrackButton.addEventListener("click", backAudio);
    function backAudio(){
      document.querySelector('#Namesongs').innerHTML = songs[i-1].title;
      audio.src = songs[--i].road;
      audio.play();
    }

    nextTackButton.addEventListener("click", nextAudio,false);

    function nextAudio(){
      document.querySelector('#Namesongs').innerHTML = songs[++i].title;
      audio.src = songs[+i].road;
      audio.play();
    }
    
    playButton.addEventListener("click", playAudio, false);
  
    function playAudio() {
      this.style.display = "none";
      pauseButton.style.display = "block";
      audio.play();
    }
  
    pauseButton.addEventListener("click", pauseAudio, false);
  
    function pauseAudio() {
      this.style.display = "none";
      playButton.style.display = "block";
      audio.pause();
    }
  
     audio.addEventListener("timeupdate", controlTime, false);
  
    function controlTime() {
      var seeking = this.currentTime;
      var minutes = Math.floor(this.currentTime / 60);
      var seconds = Math.floor(this.currentTime - minutes * 60);
      var calcs = this.duration;
      var total = this.currentTime / calcs * 100;
      var progressBarUpdate = document.querySelector('.progress-bar');
      progressBarUpdate.style.width = total + "%";
      progressBarUpdate.style.background = "Tomato";
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      var streamTime = document.querySelector('.current-time');
      streamTime.innerText = minutes + ":" + seconds;
  
    }
 
    audio.addEventListener("loadeddata", defaultValues, false);
  
    function defaultValues() {
      var minutes = Math.floor(this.duration / 60);
      var seconds = Math.floor(this.duration - minutes * 60);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      
      trackTime.innerText = minutes + ":" + seconds;
    } 

    audio.onended = function() {
      //Reset Play Button
      pauseButton.style.display = "none";
      playButton.style.display = "block";
      //Reset Progress Bar
      var progressBarUpdate = document.querySelector('.progress-bar');
      progressBarUpdate.style.width = "0%";
      //Reset Time
      streamTime.innerText = "0" + ":" + "00";

      audio.src = songs[++i].road;
      document.querySelector('#id-song-title').innerHTML = songs[i].title;
      audio.play();
      
    };
    document.getElementById('volumeLevel').addEventListener('change', function() {
      changeVolume(this.value);
    })
    function changeVolume(amount) {
      audio.volume = amount;
    }
    /*var div = document.createElement(`div`)
     div .innerHTML =` <div class="play-pause_song">
        <button id="play" class="play-paus">
            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="20px" viewBox="0 0 17 20" version="1.1">
          <title>Play</title>
          <g id="Page-1" st="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Player" transform="translate(-2758.000000, -394.000000)" fill="#333333">
                  <path d="M2758,394 L2758,414 L2775,404 L2758,394 Z" id="Play"/>
              </g>
          </g>
      </svg>
          </button>
          <button id="pause" class="play-paus">
      <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="20px" viewBox="0 0 14 20" version="1.1">
        <title>Pause</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Player" transform="translate(-2710.000000, -394.000000)" fill="#333333">
        <g id="Pause" transform="translate(2710.000000, 394.000000)">
        <g id="Rectangle-131-+-Rectangle-131">
          <rect id="Rectangle-131" x="0" y="0" width="5" height="20"/>
          <rect id="Rectangle-131" x="9" y="0" width="5" height="20"/>
        </g>
        </g>
</g>
</g>
</svg>
</button>
    </div>
    <div class="nexxtsongs">
    <div class="nameSong_song" id="ppp">Название песни</div>
    <div class="duration_song">0:00</div>
    </div>`;
    Button.insertBefore(Button1,div);*/ //почему не добавляет див?

  };
