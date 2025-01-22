function newColor(){
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

setInterval(()=>{
  document.body.style.background = '
    radial-gradient(
      circle at 50% 0,
      ${newColor()},
      ${newColor()} 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      ${newColor()},
      ${newColor()} 70.71%
    ),
    radial-gradient(
      circle at 93.3% 75%,
      ${newColor()},
      ${newColor()} 70.71%
      )
      ${newColor()};'
},1000)
