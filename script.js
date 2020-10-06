var character = document.querySelector(".two");
var block = document.querySelector(".three");
var gk=document.querySelector(".one");
var dk=document.getElementById("loop");
var d=document.getElementById("loo");
var flag=1
dk.addEventListener("click",function(){
    document.querySelector("#title").style.display = "none";
            document.querySelector("#loop").style.display = "none";
    character.classList.remove("two")
    block.classList.remove("three")
    gk.classList.remove("one")
    character.classList.add("character")
    block.classList.add("block")
    gk.classList.add("game")
    pop();

})


var counter;
counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
// function kickstart(){
//     gk.classList.add("game")
// }


function pop(){
    var checkDead = setInterval(function() {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft<45 && blockLeft>-45 && characterTop>=300 ){
            block.style.animation = "none";
            alert("Game Over. Score: "+Math.floor(counter/100));
            var de=prompt("Enter 'stop' or click Cancel to try again");
            if(de=="stop"){
                setTimeout(function(){
                    character.classList.remove("character")
                    block.classList.remove("block")
                    gk.classList.remove("game")
                    character.classList.add("two")
                    block.classList.add("three")
                    gk.classList.add("one")
            
                },500)
                flag=0;
            var s = Math.floor(counter/100);
            document.querySelector("#score").style.display = "block";
            document.querySelector("#scoreSpan").innerHTML = `Score: ${s}`;
            localStorage.setItem('g3',s);
            }
            
            counter=0;
            block.style.animation = "block 1s infinite linear";
        }else if(flag==1){
            counter++;
            // location.reload();
            //document.querySelector(".score").style.display = "block";
            //document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        }
    }, 10);
}