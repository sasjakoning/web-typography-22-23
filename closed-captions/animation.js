// const bodyElement = document.querySelector("body")
// console.log(bodyElement)
// const options = {
//   attributes: true
// }

// function callback(mutationList, observer) {
//   mutationList.forEach(function(mutation) {
//     if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
//       if(bodyElement.classList == "sound8"){
//         console.log(" setting timeout")
//         setTimeout(() => {
//             console.log(" timeout done")
//             document.getElementById("filter1").setAttribute("numOctaves", "10");
//             document.getElementById("filter2").setAttribute("numOctaves", "10");
//             document.getElementById("filter3").setAttribute("numOctaves", "10");
//             document.getElementById("filter4").setAttribute("numOctaves", "10");
//         }, 5000);
//       }
//     }
//   })
// }

// const observer = new MutationObserver(callback)
// observer.observe(bodyElement, options)