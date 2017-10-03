document.addEventListener('DOMContentLoaded', function () {

  var lightSwitch = document.querySelector('button');
  var bodyClass = document.querySelector('body');
  var message = document.querySelector('h1');


  lightSwitch.addEventListener('click', function() {
    if(lightSwitch.classList == 'switch on'){
      lightSwitch.classList = 'switch off';
      bodyClass.classList = 'dark';
      message.innerText = 'Hey, who turned off the lights?';

    }
    else {
      lightSwitch.classList = 'switch on';
      bodyClass.classList = 'light';
      message.innerText = "It's so bright in here!";
    }
  });
})
