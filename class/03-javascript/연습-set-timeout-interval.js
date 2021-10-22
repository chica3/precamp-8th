setTimeout(function(){
    console.log("기능 실행!")
}, 2000);
// 기능 실행
setInterval(() => {
    console.log("안녕하세요!!")
}, 1000);
// 25 안녕하세요!!
let time = 10
setInterval(function(){
    if(time >= 0){
        console.log(time)
        time = time - 1
    }
}, 1000);

//3분 타이머
let time = 180
setInterval(function(){
    if(time >= 0) {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        console.log(minutes + "분 " + seconds + "초")
        time = time - 1
    }
}, 1000)