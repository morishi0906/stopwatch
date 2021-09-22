(function(){

    var time = document.getElementById('time');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

    var startTime;
    var elapsedTime = 0;
    var timerId;
    var timeToadd = 0;

    function updateTimetText(){
        
        var h = Math.floor(elapsedTime /3600000);
        var m = Math.floor(elapsedTime / 60000);
        var s = Math.floor(elapsedTime / 1000) % 60;
        var ms = elapsedTime % 1000;

        h = ('0' + h).slice(-2);
        m = ('0' + m).slice(-2); 
        s = ('0' + s).slice(-2);
        ms = ('0' + ms).slice(1,2);

        time.textContent = h + ':' + m + ':' + s + '.' + ms;
    }

    function countUp(){
        timerId = setTimeout(function(){
            elapsedTime = Date.now() - startTime + timeToadd;
            updateTimetText();
            countUp();
        },10);
    }

    start.addEventListener('click',function(){
        startTime = Date.now();
        countUp();
    });

    stop.addEventListener('click',function(){
       clearTimeout(timerId);
       timeToadd += Date.now() - startTime;
    });

    reset.addEventListener('click',function(){
        elapsedTime = 0;
        timeToadd = 0;
        updateTimetText();

    });
})();
