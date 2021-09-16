
function computedIndention() {

  let containerElement = document.querySelector('.container')
  let mapBillet = document.querySelector('.map__billet')

  let offsetLeft = containerElement.getBoundingClientRect().left
  mapBillet.style.right = `calc(100% - (${offsetLeft}px + 380px))`;

  window.addEventListener('resize', () => {
    let offsetLeft = containerElement.getBoundingClientRect().left
    mapBillet.style.right = `calc(100% - (${offsetLeft}px + 380px))`;
  })
}

computedIndention()
