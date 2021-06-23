let clicked = false;

document.getElementById("button").onclick = function() {
    if(!clicked) {
        let date = new Date;
        date = date.getHours();
        
        let hour = new Date
        hour = hour.getHours();
        
        let minute = new Date
        minute = minute.getMinutes();
        
        let seconds = new Date
        seconds = seconds.getSeconds();
        
        let milliseconds = new Date
        milliseconds = milliseconds.getMilliseconds();
        
        hour = hour % 12
        
        document.getElementById("a").innerHTML = "You clicked the buzzer at " + hour + " : " + minute + " : "+ seconds + " : " + milliseconds
        clicked = true;
        }
        
    }


