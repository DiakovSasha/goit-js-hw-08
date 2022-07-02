import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const CURRENT_TIME = 'videoplayer-current-time';

const player = new Player(iframe);

const onPlay = function (data) {
  console.log(data);
  localStorage.setItem(CURRENT_TIME, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));


const stopTime = localStorage.getItem(CURRENT_TIME);
if (stopTime) {
  player.setCurrentTime(stopTime);
}

console.log(stopTime);
