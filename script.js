function newColor(){
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}
function random_px(){
  return Math.floor(Math.random()*500)
}

function random_deg(){
  return Math.floor(Math.random()*720-360)
}
function linear_gradient(){
  return `repeating-linear-gradient(
          ${random_deg()}deg,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px
        )`
}

function start_interval(){
  interval= setInterval(()=>{
    document.body.style.background = `${linear_gradient()},
                                        ${linear_gradient()},
                                        ${linear_gradient()}`;
    },time)
}
function stop_interval(){
  clearInterval(interval)
}
const params = new URLSearchParams(window.location.search)
let time=500
let interval
if (params.has("f")){
  time=Number(params.get("f"))
}

let pause=false
document.addEventListener("keydown",(event)=>{
  console.log(event.code)
  if (event.code=="Space"){
    pause=!pause
    if (pause){
      stop_interval()
    }else{
      start_interval()
    }
  }
})

start_interval()
