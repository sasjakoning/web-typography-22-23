const bodyElement = document.querySelector("body")
console.log(bodyElement)
const options = {
  attributes: true
}



function callback(mutationList, observer) {
  mutationList.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if(bodyElement.classList.value.includes('sound8') || bodyElement.classList.value.length == 7){
        console.log(" setting timeout")
        let baseVal = 1
        let scaleVal = 5

        setInterval(() => {
            document.getElementById("filter1").children[0].setAttribute("baseFrequency", `0.0${baseVal}`)
            document.getElementById("filter2").children[0].setAttribute("baseFrequency", `0.0${baseVal}`)
            document.getElementById("filter3").children[0].setAttribute("baseFrequency", `0.0${baseVal}`)
            document.getElementById("filter4").children[0].setAttribute("baseFrequency", `0.0${baseVal}`)
            
            document.getElementById("filter1").children[1].setAttribute("scale", `${scaleVal}`)
            document.getElementById("filter2").children[1].setAttribute("scale", `${scaleVal}`)
            document.getElementById("filter3").children[1].setAttribute("scale", `${scaleVal}`)
            document.getElementById("filter4").children[1].setAttribute("scale", `${scaleVal}`)
            baseVal++
            scaleVal++
        }, 5000);
      }
    }
  })
}

const observer = new MutationObserver(callback)
observer.observe(bodyElement, options)