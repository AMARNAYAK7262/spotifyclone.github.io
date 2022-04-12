console.log("Welcome to spotify ");
let songsIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPLay");
let myprogressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songsName: "Salam-e-Ishq",
    filePath: "songs/1.mp3",
    coversPath: "covers/1.jpg",
  },
  {
    songsName: "Let me love You",
    filePath: "songs/2.mp3",
    coversPath: "covers/2.jpg",
  },
  {
    songsName: "Proper Patola",
    filePath: "songs/3.mp3",
    coversPath: "covers/3.jpg",
  },
  {
    songsName: "Night Changes",
    filePath: "songs/4.mp3",
    coversPath: "covers/4.jpg",
  },
  {
    songsName: "Memories",
    filePath: "songs/5.mp3",
    coversPath: "covers/5.jpg",
  },
  {
    songsName: "Girl Like you",
    filePath: "songs/6.mp3",
    coversPath: "covers/6.jpg",
  },

  {
    songsName: "Sugar",
    filePath: "songs/7.mp3",
    coversPath: "covers/7.jpg",
  },
  {
    songsName: "Brown Rand dai",
    filePath: "songs/8.mp3",
    coversPath: "covers/8.jpg",
  },
  {
    songsName: "One Bottle Down",
    filePath: "songs/9.mp3",
    coversPath: "covers/9.jpg",
  },
  {
    songsName: "Born To shine",
    filePath: "songs/10.mp3",
    coversPath: "covers/10.jpg",
  },
];
songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coversPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songsName;
});

//Handle play/pause of songs
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    gif.style.opacity = 0;
  }
});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  console.log("timeUpdate");
  //update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressBar.value = progress;
});

myprogressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songsIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songsIndex + 1}.mp3`;
      masterSongName.innerText = songs[songsIndex].songsName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songsIndex >= 9) {
    songsIndex = 0;
  } else {
    songsIndex += 1;
  }
  audioElement.src = `songs/${songsIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songsIndex].songsName;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songsIndex <= 0) {
    songsIndex = 0;
  } else {
    songsIndex -= 1;
  }
  audioElement.src = `songs/${songsIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songsIndex].songsName;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
