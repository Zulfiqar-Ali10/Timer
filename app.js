
const currentTime = () => {
    let curTime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = curTime; 
}
currentTime();

const setInter = setInterval(()=>{
    currentTime();
}, 1000);


// setTimeout(()=>{
//     clearTimeout(setInter);
// }, 8000);