class Sounds {
  constructor(selector, seconds) {
    this.keys = document.querySelectorAll(".key");
    this.clickSound = "https://bostan.me/images/click.mp3";

    this.init();
  }

  playSound(sound) {
    new Audio(sound).play();
  }

  init() {
    this.keys.forEach((key) => {
      key.addEventListener("mousedown", () => {
        return this.playSound(this.clickSound);
      });
    });
  }
}

class Timer {
  constructor(selector, seconds) {
    this.elem = document.querySelector(selector);
    this.seconds = seconds;
    this.totalTime = seconds * 100;
    this.startTime = +new Date();

    this.start();
  }

  restart = () => {
    this.elem.innerHTML = "00:00:00";
    this.startTime = +new Date();
    this.start();
  };

  count = () => {
    const timePassed = Math.floor((+new Date() - this.startTime) / 10);

    if (timePassed >= this.totalTime) {
      this.restart();
    } else {
      this.elem.innerHTML = this.formatTime(timePassed);
    }
  };

  fillZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  formatTime = (time) => {
    var mi = Math.floor(time / (60 * 100));
    var ss = Math.floor((time - mi * 60 * 100) / 100);
    var ms = time - Math.floor(time / 100) * 100;

    return (
      this.fillZero(mi) + ":" + this.fillZero(ss) + ":" + this.fillZero(ms)
    );
  };

  start = () => {
    setInterval(this.count, 1);
  };
}

class Synthesizer {
  constructor() {
    this.initAnimations();
    this.initSounds();
    this.initTimer();
  }

  initAnimations() {
    document.querySelector(".case").classList.add("case--animated");
  }

  initSounds() {
    new Sounds();
  }

  initTimer() {
    const timerSeconds = 8;
    new Timer(".js-timer", timerSeconds);
  }
}

new Synthesizer();
