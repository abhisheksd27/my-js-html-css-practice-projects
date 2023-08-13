console.log("welcome to spotify")
// initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



let songs=[
    {songName:" song 1 name", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:" song 1 name", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:" song 1 name", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:" song 1 name", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:" song 1 name", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:" song 1 name", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:" song 1 name", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:" song 1 name", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:" song 1 name", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:" song 1 name", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
    

]

//audioElement.play()

//handle play.pause click 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events and it is not working 
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgressBar.value = progress;
})

//prograss bar change and it is not working

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value *audioElement.duration;
})