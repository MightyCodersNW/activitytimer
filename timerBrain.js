function countdownTimer(){
    //following section of JS code for 30min timer borrowed from https://codepen.io/falak786/pen/oddYYd
    var sec         = 10,
    countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';      
        secpass();
    }, 1000);

    function secpass() {
        'use strict';    
        var min     = Math.floor(sec / 60),
            remSec  = sec % 60;
    
        if (remSec < 10) {        
            remSec = '0' + remSec;    
        }

        if (min < 10) {        
            min = '0' + min;    
        }
        countDiv.innerHTML = min + ":" + remSec;
    
        if (sec > 0) {   
            sec = sec - 1;
        } else {
            clearInterval(countDown);
            countDiv.innerHTML = 'Break Time!';
            //End Borrowed code
            let range=document.getElementById('activities').lastElementChild.id
            let randact = Math.floor(Math.random() * range + 1)
            let selected = document.getElementById(randact)
            selected.setAttribute('class','selected')
        }
    }

}

const addToList = ()=>{
    let entry = document.getElementById("newActivity").value
    let prev = document.getElementById('activities').lastElementChild.id
    let newID = ++prev
    let activity = document.createElement('li')
    activity.setAttribute('id', newID)
    let brk = document.createElement('br')
    activity.innerHTML = entry
    document.getElementById('activities').appendChild(activity)
    document.getElementById("newActivity").value = "";
    event.preventDefault()
};

function reset(){
    let acts = document.querySelector('li[class]')
    acts.removeAttribute('class', 'selected')
}