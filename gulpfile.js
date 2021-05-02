import random from '@aspiesoft/random-number-js';

function defaultTask(cb) {

    function AnimationAction(e) {
        console.log('AnimationAction');

        var buttonId = e.target.id;
        var fadeTarget = document.getElementById(buttonId);
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 200);
    }

    function AddCrazyButtonAction(e) {
        console.log('AddCrazyButtonAction');

        var buttons = document.getElementsByTagName('button');
        var totalBtn = buttons.length;

        var btn = document.createElement("button");
        var btnNo = Date.now() + 1;

        btn.id = btnNo;
        btn.innerHTML = "Click me!";
        btn.addEventListener("click", canDoes[2]);
        document.body.appendChild(btn);
    }

    function RemoveCrazyButtonAction(e) {
        console.log('RemoveCrazyButtonAction');
        var buttonId = e.target.id;

        var buttons = document.getElementsByTagName('button');

        if (buttons.length == 1) {
            alert('Sorry there is no button to remove. :-(');
            return;
        }

        for (let i = 0; i < buttons.length; i++) {
            var curbtn = buttons[i];
            if (buttonId !== curbtn.id) {
                curbtn.remove();
                break;
            }
        }
    }

    function ShowWeatherAction(e) {
        console.log('ShowWeatherAction');
        // API
        const Http = new XMLHttpRequest();
        const url = 'http://api.weatherapi.com/v1/current.json?key=f4adfec58394496ea1684801210404&q=Tokyo, Japan&aqi=yes';
        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = (e) => {

            if (Http.responseText) {
                var response = JSON.parse(Http.responseText);

                alert('Current temperature in Tokyo, Japan, ' + response.current.temp_c + 'C and ' + response.current.temp_c + 'F.');
            }
        }
    }
    var c = 0;

    function CountAction(e) {
        console.log('CountAction');

        var buttonId = e.target.id;
        var target = document.getElementById(buttonId);

        target.onclick = function () {
            c++;
            e.target.innerHTML = "Click me!" + c;
        };
    }

    function updateStatus() {
        button.textContent = 'Clicked ' + ++count + ' times';
    }

    const canDoes = [AnimationAction, AddCrazyButtonAction, RemoveCrazyButtonAction, ShowWeatherAction, CountAction];

    function createCrazyButtons(target) {
        var container = document.getElementsByTagName(target);

        for (let i = 0; i < random(3, 5); i++) { //Math.floor(Math.random() * 5) + 1
            var btn = document.createElement("button");

            btn.innerHTML = "Click me!";
            btn.id = Date.now() + i;
            btn.addEventListener("click", canDoes[i]);
            console.log('Just did %s', i);
            container[0].appendChild(btn);
        }
    }
    cb();
}

const _default = defaultTask;
export { _default as default };