// Яндекс карта

// !!!!!!!!!!!!!!!!! Карта яндекс работает только с апи ключом разработчика, делается в яндекс кабинет разработчика. По правилам ничего с карты удалять нельзя, никакие метки. Если нужно удалить то нужно купить платный апи ключ и написать яндекс !!!!!!!!!!!!!!!!!!

const mapClass = document.querySelector(".contacts__map")
if (mapClass) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map", {
        center: [59.94, 30.31],
        zoom: 14,
      },
    );
    // var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.76932, 37.63952), {}, { // Если нужно чтобы точка была всегда по центру
    var myPlacemark = new ymaps.Placemark([59.9431223132132, 30.321231321], {}, { // Если нужно чтобы точка была слегка смещена
      iconLayout: 'default#image',
      iconImageHref: '../../img/baloon.png',
      iconImageSize: [20, 20],
    });

    myMap.geoObjects.add(myPlacemark);
    // myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    // myMap.controls.remove('searchControl'); // удаляем поиск
    // myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    // myMap.controls.remove('typeSelector'); // удаляем тип
    // myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // myMap.controls.remove('rulerControl'); // удаляем контрол правил
  }


  // для позднего появления карты 

  // let flag = 0; 

  // window.addEventListener("scroll", function () { 
  //   let scrollY = window.scrollY;
  //   let mapOffset = this.document.querySelector("#map").offsetTop;
  //   if (scrollY >= mapOffset - 1000 && flag == 0) {
  //     ymaps.ready(init);

  //     function init() {
  //       const myMap = new ymaps.Map(
  //         "map", {
  //           center: [59.94, 30.31],
  //           zoom: 14,
  //         },
  //       );
  //       // var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.76932, 37.63952), {}, { // Если нужно чтобы точка была всегда по центру
  //       var myPlacemark = new ymaps.Placemark([59.9431223132132, 30.321231321], {}, { // Если нужно чтобы точка была слегка смещена
  //         iconLayout: 'default#image',
  //         iconImageHref: '../../img/baloon.png',
  //         iconImageSize: [20, 20],
  //       });

  //       myMap.geoObjects.add(myPlacemark);
  //       myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  //       myMap.controls.remove('searchControl'); // удаляем поиск
  //       myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  //       myMap.controls.remove('typeSelector'); // удаляем тип
  //       myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  //       myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  //       myMap.controls.remove('rulerControl'); // удаляем контрол правил
  //     }
  //   }

  // })
}


// html

/* 
        <div class="contacts__map" id="map"></div>
        
<script src="https://api-maps.yandex.ru/2.1/?apikey=91917327-f7a2-42ba-b391-62f86c9c6dee&lang=ru_RU"></script> с api ключем
<script src="https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU"></script>

*/