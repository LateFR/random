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
// Mélange différents types de gradients pour encore plus de variété
function random_gradient() {
  const types = ["linear", "radial","conic"]; // Types de gradients disponibles
  const randomType = types[Math.floor(Math.random() * types.length)];

  if (randomType === "linear") {
    return linear_gradient();
  } else {
    // Pour `radial-gradient`, ajoute un gradient radial avec des stops aléatoires
    const stops = Array(8)
      .fill(null)
      .map(() => `${newColor()} ${random_px()}px`)
      .join(", ");
    return `radial-gradient(circle, ${stops})`;
  }
}

// Gestion de l'intervalle pour modifier le fond
function start_interval() {
  interval = setInterval(() => {
    document.body.style.background = `${random_gradient()},
                                      ${random_gradient()},
                                      ${linear_gradient()}`;
  }, time);
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
