// Кастомный range 

// не забыть подключить файлы nouislider
const rangeSlider = document.querySelector(".wrapper-input__range");
const btnClose = document.querySelector(".wrapper-value__button"); // Закрыть оболочку вывода значений
const priceWrapperValue = document.querySelector(".wrapper-value__quantity") // Если куда-то нужно вывести значение инпутов, если нет то комменитируем
const priceWrapper = document.querySelector(".wrapper-value") // Если куда-то нужно вывести значение инпутов, если нет то комменитируем , так же расскоментировать код ниже

btnClose.addEventListener("click", function () { // Закрыть оболочку вывода значений
  priceWrapper.classList.remove("wrapper-value-active")
})


noUiSlider.create(rangeSlider, {
  start: [2000, 150000], // сколько ползунков
  connect: true,  // сколько ползунков
  // tooltips: true, // показывает на каком значение находится элемент управления активным телом range
  animationDuration: 100,
  step: 1,  // на сколько единиц перемещается ползунок
  handleAttributes: [{
      'aria-label': 'уменьшить цену'
    },
    {
      'aria-label': 'повысить цену'
    },
  ],
  behaviour: 'tap',
  decimals: 0,
  range: {
    'min': 0,
    'max': 225000,
  }
});
const firstPrice = document.querySelector(".from-input"); // инпут со значением от
const secondPrice = document.querySelector(".to-input"); // инпут со значением до
const inputPrice = [firstPrice, secondPrice];

rangeSlider.noUiSlider.on("update", function (values, handle) {
  inputPrice[handle].value = Math.round(values[handle])

  // priceWrapperValue.innerHTML = "До " + secondPrice.value // так же удаляем если не нужно никуда записывать значения  с инпутов

  // priceWrapper.classList.add("wrapper-value-active") // так же удаляем если не нужно никуда записывать значения  с инпутов
})

// rangeSlider.noUiSlider.on('update', function (values, handle) { // если не работает верхний код
//   termInput.value = Math.round(values[handle]); // куда передается значение с ползунка при перемещение
// });

const setRangeSlider = (i, value) => {
  let arr = [null, null]
  arr[i] = value;

  rangeSlider.noUiSlider.set(arr)
}

inputPrice.forEach((el, index) => {  // связывает инпут и ползунок, при изменение информации в инпуте ползунок перемещается, оставлять этот код если используешь два ползунка
  el.addEventListener("change", (e) => {
    setRangeSlider(index, e.currentTarget.value);
  });

  // termInput.addEventListener('change', function () { // Тоже самое но если 1 ползунок
  //   termRangeSlider.noUiSlider.set(this.value);
  // });

});