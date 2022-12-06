
var windows = document.getElementsByClassName('window');
var house = document.getElementById("fullHouse");
var snowWrappers = document.getElementsByClassName('snow-wrap');
var windowCounter = 0;

Array.prototype.forEach.call(windows, window => {

    window.addEventListener('mouseenter', function() {
            window.style.setProperty("animation-name", "flickerOut");
            window.style.setProperty('animation-iteration-count', '1');
            window.style.setProperty('animation-duration', '0.5s');
            window.style.opacity = "0";
        
    });

    window.addEventListener('mouseout', function() {
        if (window.getAttribute('running') == "on") {
            window.style.setProperty('animation-name', 'flickerIn');
            setTimeout(function() {
                window.style.opacity = "100%";
                window.style.setProperty('animation-name', 'flicker');
                window.style.setProperty('animation-iteration-count', 'infinite');
                window.style.setProperty('animation-duration', '2s');
            }, 500);
        }
    });

    window.addEventListener('click', function() {
        if (window.getAttribute('running') == "on") {
            window.setAttribute('running', 'off');
            windowCounter++;
            console.log(windowCounter);
        }

        if (windowCounter == 7) {
            house.style.opacity = "0";
            console.log(house.style.opacity);
        }
    });

});

console.log(snowWrappers.length);

Array.prototype.forEach.call(snowWrappers, snowWrapper => {

    const childSnow = snowWrapper.children;

    Array.prototype.forEach.call(childSnow, snow => {
        var top = Math.floor(Math.random() * 99) + 1;
        var left = Math.floor(Math.random() * 99) + 1;
        var opacity = Math.floor(Math.random() * 99) + 40;
        snow.style.top = top.toString() + "vh";
        snow.style.left = left.toString() + "vw";
        snow.style.opacity = opacity.toString() + "%";
    });
});




