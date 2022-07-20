
//                   PARTE CODE

function gas() {

let n1 = parseFloat(document.getElementById("n1").value);
let n2 = parseFloat(document.getElementById("n2").value);
let res = document.getElementById("res")

let value = n1 / n2

if (value < 0.7 ){
    res.innerHTML = `resultado é etanol com ${value.toFixed(4)} pontos`

} else if (value > 0.7) {
    res.innerHTML = `o resultado é gasolina com ${value.toFixed(4)} pontos`
} else if(value == 0.7) {
    res.innerHTML = `Qualquer um pois o valor deu ${value.toFixed(4)} pontos`
}


}

//                     PARTE SCROLL SMOOTH

const menuLinks = document.querySelectorAll('.op a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 500;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}