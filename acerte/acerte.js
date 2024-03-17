var sec=0
var min=0
var hor=0
var interval
function twoDigitis(digit) {
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}
function start(){
    inteval = setInterval(watch,1000);
}
function pause(){
    clearInterval(inteval);
}
function stop(){
    clearInterval(inteval);
    sec=0
    min=0
    hor=0
    document.getElementById('watch').innerText = '00:00:00';
}
function watch(){
    sec++;
    if(sec==60){
        min++
        if(min==60){
            hor++
            min=0
        }
        sec=0
    }
    document.getElementById('watch').innerText = twoDigitis(hor) +':'+ twoDigitis(min) +':'+ twoDigitis(sec);
}