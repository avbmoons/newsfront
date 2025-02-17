let timeSite = document.getElementById('currentTimeSite');

setInterval(function () {
  let currentTime = new Date();
  timeSite.innerHTML = currentTime.toLocaleString();
}, 1000);






