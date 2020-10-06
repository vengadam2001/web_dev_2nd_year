var player = {
    Name: "",
    Age : 0,
    game1:0,
    game2:0,
};



//colorChange.html
var icount=0;
        avgr=0;
        function myfun() { 
            icount+=1;
            document.getElementById("inst").style.display = "none"; 
            var shape = Math.floor((Math.random() * 3) + 1); 
            var shape1 = "s" + shape; 
            // <!---Calculating random color---> 
            // <!---An array of 6 for HTML color code ---> 
            var a = new Array(6); 
            var text = ""; 
            // <!--- HTML color code begin with "# "---> 
            text = text + "#"; 
            for (i = 0; i < 6; i++) { 
                // <!---To take values from 1 to 15 only---> 
                a[i] = (Math.floor(Math.random() * 15) + 1); 
                if (a[i] == 10) { 
                    text = text + "A"; 
                } else if (a[i] == 11) { 
                    text = text + "B"; 
                } else if (a[i] == 12) { 
                    text = text + "C"; 
                } else if (a[i] == 13) { 
                    text = text + "D"; 
                } else if (a[i] == 14) { 
                    text = text + "E"; 
                } else if (a[i] == 15) { 
                    text = text + "F"; 
                } else { 
                    text = text + a[i]; 
                } 
            } 
  
            document.getElementById(shape1).style.backgroundColor = text; 
            var a = document.getElementById(shape1); 
            // Calculate the random location  where element has to be placed
            random1 = Math.floor(Math.random() * 250) + 1; 
            random2 = Math.floor(Math.random() * 300) + 1; 
            a.style.position = "absolute"; 
            a.style.left = random1; 
            a.style.top = random2; 
            document.getElementById(shape1).style.display = "block"; 
            var start = Date.now(); 
            //console.log(start);
            document.getElementById(shape1).onclick = function() { 
                if(icount<10){
                var end = Date.now(); 
                //console.log(end);
                document.getElementById(shape1).style.display = "none"; 
                var diff = end - start;
                //console.log(diff);
                calcImgReflex(diff); 
                // var diff1 = diff / 00;
                avgr+=diff; 
                //document.getElementById("time").innerHTML += `<p>reflex time : ${diff}</p>`; 
                myfun();
            }
            else{
                document.getElementById(shape1).style.display = "none";
                avgr/=10;
                document.querySelector("#alert-heading").innerHTML = calcImgReflex(avgr);
                document.querySelector("#game2").innerHTML = `Your reflex time: ${avgr}`;
                localStorage.setItem('g2',avgr);
                // player.game2[1] = calcImgReflex(avgr);
                //console.log(player);
                document.querySelector("#proceed-alert").style.display="block";

            } 
            } 
  
        }
//
//imageRotate.html
var current_rotation, startTime, endTime;
var pic;
function picselect(){
    var picarray = ["pic1","pic2","pic3","pic4"];
    var num = Math.floor((Math.random()*4)+0);
    pic = `#${picarray[num]}`;
    document.querySelector(pic).style.display = 'block';
    document.querySelector("#imageRotate").style.display = 'block';
}

function setrotation(){
    document.querySelector("#instruction").style.display = 'none';
    picselect();
    current_rotation = Math.floor((Math.random()*360)+0);
    if(current_rotation%40 != 0){
        current_rotation -= (current_rotation%40);
    }
    document.querySelector(pic).style.transform = 'rotate(' + current_rotation + 'deg)';
    startTime=Date.now();
    //console.log(startTime)
}

function clockwise() {
    current_rotation += 40;
    document.querySelector(pic).style.transform = 'rotate(' + current_rotation + 'deg)';
}

function anti_clockwise(){
    current_rotation -= 40;
    document.querySelector(pic).style.transform = 'rotate(' + current_rotation + 'deg)';
}

function calcImgReflex(responseTime){
    var responseString=""; 
    //console.log(responseTime);
    if (responseTime < 2000) 
        responseString="Well done!"; 
    if (responseTime >= 2000 && responseTime < 3500) 
        responseString="Nice!"; 
    if (responseTime >=3500 && responseTime < 4500) 
        responseString="Could be better..."; 
    if (responseTime >=4500 && responseTime < 5500) 
        responseString="Keep practicing!"; 
    if (responseTime >=5500 && responseTime < 6500) 
        responseString="Have you been drinking?"; 
    if (responseTime >=6500) 
        responseString="Did you fall asleep?";  
    return (responseString); 
}

function verify(){
    console.log(current_rotation);
    if(current_rotation % 360 == 0){
        ///console.log("You are correct");
        document.getElementById('answercheck').style.display = 'none';
        document.getElementById('rotate-clock').style.display = 'none';
        document.getElementById('rotate-anti').style.display = 'none';
        document.querySelector(pic).style.display = 'none';
        endTime=Date.now();
        //console.log(endTime); 
        var responseTime=(endTime-startTime-30);
        //var responseTime=(endTime.getTime()-startTime.getTime())/1000;
        document.querySelector("#proceed-alert").style.display="block";
        document.querySelector("#alert-heading").innerHTML = calcImgReflex(responseTime);
        document.querySelector("#game1").innerHTML = `Your reflex time: ${responseTime}`;
        player.game1 = responseTime;
        localStorage.setItem('g1',responseTime);
        // player.game1 = calcImgReflex(responseTime);
        //document.getElementById("hello").href="http://117.222.141.133:20002/home/"+JSON.stringify(player);
        //console.log(player);
        
    }
    else{
        //console.log("Wrong!");
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
}

document.querySelector("#rotate-clock").addEventListener('click', clockwise);
document.querySelector("#rotate-anti").addEventListener('click', anti_clockwise);
//


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      // x.innerHTML = "Geolocation is not supported by this browser.";
      console.log("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
  player.Latitude=position.coords.latitude;
  player.Longitude=position.coords.longitude;
  }

  function sendData()
{
player.gender=document.getElementById("gender").value;
player.Name=document.getElementById("name").value;
localStorage.setItem("name",player.Name);
player.Age=document.getElementById("age").value;
player.Latitude=NaN;
player.Longitude=NaN;
player.game1= parseInt(localStorage.getItem('g1'));
player.game2= parseInt(localStorage.getItem('g2'));
player.game3= parseInt(localStorage.getItem('g3'));
getLocation();
console.log(["object",player]);
console.log(`hello  ${window.location.origin}home/${JSON.stringify(player)} `);
document.getElementById("hello").href="http://117.213.88.218:20001/home/"+JSON.stringify(player);

}

