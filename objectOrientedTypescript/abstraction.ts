//abstraction

//idea - implement pore korbo

/*
1. interface - 
2. abstract class 
*/

//idea
interface MediaPlayer {
  start(): void;
  stop(): void;
  pause(): void;
}

//implementation
class MusicPlayer implements MediaPlayer {
  start() {
    console.log("Playing music...");
  }
  stop() {
    console.log("Stopping music...");
  }
  pause() {
    console.log("Pausing music...");
  }
}

const musicPlayer = new MusicPlayer(); //instance

musicPlayer.start();
musicPlayer.pause();
musicPlayer.stop();

//abstract class

abstract class MediaPlayer2 {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class MusicPlayer2 extends MediaPlayer2 {
  play() {
    console.log("Playing music...");
  }
  stop() {
    console.log("Stopping music...");
  }
  pause() {
    console.log("Pausing music...");
  }
}

const musicPlayer2 = new MusicPlayer2();

musicPlayer2.play();
