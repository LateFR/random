function newColor(){
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

setInterval(()=>{
  console.log("change")
  document.body.style.backgroundColor = newColor()
},1000)
