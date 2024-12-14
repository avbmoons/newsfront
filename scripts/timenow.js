let timeElement = document.getElementById('currentTime');
let timeSidebar = document.getElementById('currentTimeSidebar');

setInterval(function () {
  let currentTime = new Date();
  timeElement.innerHTML = currentTime.toLocaleString();
  timeSidebar.innerHTML = currentTime.toLocaleString();
}, 1000);




