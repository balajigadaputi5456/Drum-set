var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);//onclick
}
function handleclick()
{
    var ins=this.innerHTML;
    makesound(ins);
    buttonanimation(ins);
    
}
document.addEventListener("keydown",handlebutton);
function handlebutton(event)
{
    makesound(event.key);
    buttonanimation(event.key);
}
function makesound(key)
{
    switch(key)
    {
        case "w":
                var audio=new Audio('tom-1.mp3');
                audio.play();
                break;
        case "a":
                var audio=new Audio('tom-2.mp3');
                audio.play();
                break;
        case "s":
                var audio=new Audio('tom-3.mp3');
                audio.play();
                break;
        case "d":
                var audio=new Audio('tom-4.mp3');
                audio.play();
                break;
        case "j":
                var audio=new Audio('snare.mp3');
                audio.play();
                break;
        case "k":
                var audio=new Audio('crash.mp3');
                audio.play();
                break;
        case "l":
                var audio=new Audio('Kick-bass.mp3');
                audio.play();
                break;
    }
}
function buttonanimation(currentkey)
{
    var activekey=document.querySelector("."+currentkey);
    activekey.classList.add("pressed");
    setTimeout(function(){
        activekey.classList.remove("pressed");
    },100);
}
 
