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

ymaps.ready(init);
function init(){

  let myMap = new ymaps.Map("mymap", {
    center: [55.13,83.00],
    zoom: 11,
    controls: ['fullscreenControl'],
    behaviors: ['drag', 'dblClickZoom', 'multiTouch']
  });

  let multiRoute = new ymaps.multiRouter.MultiRoute({
    // Точки маршрута.
    referencePoints: [
      [55.025927962966,82.92174633473742],
      [55.06018602241668,82.91290969577021],
      [55.195775638651995,83.14488700000003],
    ]
  }, {
    // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
    boundsAutoApply: true,
    wayPointStartIconColor: "#FFFFFF",
    wayPointVisible: false
  });

  let placemark = new ymaps.Placemark([55.025927962966,82.92174633473742], {
    hintContent: '<strong>Православный храм<strong>\n' +
      'Красный просп., 17А, Новосибирск, Россия',
    balloonContent: 'Православный храм, <br> Красный просп., 17А, Новосибирск, Россия',
    iconCaption: 'Часовня Николая Чудотворца',
  });

  let placemark2 = new ymaps.Placemark([55.06018602241668,82.91290969577021], {
    hintContent: 'Площадь имени Калинина<br>Метро Заельцовская, Новосибирск, Россия',
    balloonContent: 'Площадь имени Калинина, Новосибирск, Россия',
    iconCaption: 'Метро Заельцовская',
  });

  let placemark3 = new ymaps.Placemark([55.19042011727574,83.13975243127996], {
    hintContent: 'п. Октябрьский, ул. Локтинская, д. 10/2, Новосибирск Россия',
    balloonContent: 'Россия, Новосибирская область, Мошковский район, посёлок Октябрьский, микрорайон Светлый',
    iconCaption: 'Жилой район "Светлый"',
  });

  myMap.geoObjects.add(placemark);
  myMap.geoObjects.add(placemark2);
  myMap.geoObjects.add(placemark3);
  myMap.geoObjects.add(multiRoute);
}

