function newColor(){
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}
function random_px(){
  return Math.floor(Math.random()*500)
}

function random_deg(){
  return Math.floor(Math.random()*720-360)
}

const params = new URLSearchParams(window.location.search)
let time=500
if (params.has("f")){
  time=Number(params.get("f"))
}
setInterval(()=>{
  document.body.style.background = `repeating-linear-gradient(
          ${random_deg()}deg,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px
        ),
        repeating-linear-gradient(
          ${random_deg()}deg,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px
        ),
        repeating-linear-gradient(
          ${random_deg()}deg,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px
        )`;
},time)
