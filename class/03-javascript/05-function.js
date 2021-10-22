const change=()=> {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0");
    document.getElementById("token").innerText = token;
}

// function change() {
//     const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0");
//     document.getElementById("token").innerText = token;
// };