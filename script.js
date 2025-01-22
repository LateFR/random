function newColor(){
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}
function random_px(){
  return Math.floor(Math.random()*500)
}
setInterval(()=>{
  document.querySelector("div").style.background = `repeating-linear-gradient(
          190deg,
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
          -190deg,
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
          23deg,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px,
          ${newColor()} ${random_px()}px
        )`;
},1000)
