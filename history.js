let history=[]
let target=0

document.addEventListener("keydown",(event)=>{
    if (!pause){
        return
    }
    if (event.code=="ArrowLeft"){
        target+=1
        if (target<10){
            target=10
        document.body.style.background=history[target]
        }
    }
    else if (event.code=="ArrowRight"){
        target-=1
        if (target<0){
            target=0
        document.body.style.background=history[target]
        }
    }
})
setInterval(()=>{
    let background=window.getComputedStyle(document.body).background
    
    if (history[0]!=background && !pause){
        history.unshift(background)
        target=0
        console.log("New backround")
    }
    if (history.length>10){
        history.pop()
        target=0
    }
},time)

