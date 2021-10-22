function changePhone1(){
    const phone1 = document.getElementById("phone1").value // 010
    if(phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

function changePhone2(){
    const phone2 = document.getElementById("phone2").value
    if(phone2.length === 4) {
        document.getElementById("phone3").focus()
    }
}

const change=()=> {
   const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
        document.getElementById("token").innerHTML = "<span style='color:#"+ token + "'>" + token + "</span>"
        let time = 179
        setInterval(function(){
            if(time >= 0) {
                const minutes = String(Math.floor(time / 60)).padStart(2,"0");
                const seconds = String(time % 60).padStart(2, "0")
                document.getElementById("time").innerText = minutes + ":" + seconds
                time = time - 1
                document.getElementById("tokenBtn").getAttribute = ("disabled")
            }
        }, 1000)
    }