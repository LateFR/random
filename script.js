function newColor(){
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

setInterval(()=>{
  document.querySelector("div").style.background = `repeating-linear-gradient(
          190deg,
          ${newColor()} 40px,
          ${newColor()} 80px,
          ${newColor()} 120px,
          ${newColor()} 160px,
          ${newColor()} 200px,
          ${newColor()} 240px,
          ${newColor()} 280px,
          ${newColor()} 300px
        ),
        repeating-linear-gradient(
          -190deg,
          ${newColor()} 30px,
          ${newColor()} 60px,
          ${newColor()} 90px,
          ${newColor()} 120px,
          ${newColor()} 150px,
          ${newColor()} 180px,
          ${newColor()} 210px,
          ${newColor()} 230px
        ),
        repeating-linear-gradient(
          23deg,
          ${newColor()} 50px,
          ${newColor()} 100px,
          ${newColor()} 150px,
          ${newColor()} 200px,
          ${newColor()} 250px,
          ${newColor()} 300px,
          ${newColor()} 350px,
          ${newColor()} 370px
        )`;
},1000)
