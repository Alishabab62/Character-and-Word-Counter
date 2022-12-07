const text=document.getElementById('text-box');
const word=document.getElementById('wordCount');
const char=document.getElementById('charCount');
const timer=document.getElementById('timer');
const speed=document.getElementById('speed');
text.addEventListener('input',()=>{
    let wordCount=text.value.split(' ').length;
    let charCount=text.value.split('').length;
    word.innerHTML=wordCount-1;
    char.innerHTML=charCount;
})


interval();
let time=0
function interval(){
    setInterval(()=>{
        time++
        timer.innerHTML=time;
    },1000);
}
