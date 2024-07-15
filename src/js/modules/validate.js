// Валидация

// Инпут маска

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

// ------------------------------------------------- Старое подключение

// if ((document.querySelector(".input-tel").value.indexOf('_') == -1)) // Если нужно по макету чтобы при введение числа в инпуте появлялась допустим галочка , то инпут маска маской не будет давать это сделать, тогда делаем вот такое условие
new JustValidate('.contacts__form', {
  colorWrong: "#FF6972",
  rules: {
    name: {
      required: true,
      minLength: 2,
      strength: {
        custom: '[а-яА-Я\d]',
      },
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Введите ваше имя',
      minLength: 'Минимальное количество букв - 2',
      strength: 'Недопустимый формат',
    },
    tel: 'Введите ваш телефон'
  },


  // Отправка на почту
  submitHandler: function (form, values, ajax) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено")
        }
      }
    }

    xhr.open("POST", "mail.php", true);
    xhr.send(formData)

    form.reset();
  }
});


/* Обязательно инпутам добавить name и проверь пути к mail.php в js и html

<form action="mail.php" class="contacts__form" method="post" enctype="multipart/form-data">
<h3 class="contacts__form-subtitle">Заказать обратный звонок</h3>
<input type="hidden" name="admin_email[]" value="exigonyashka@yandex.ru">
<input type="hidden" name="form_subject" value="Заявка с сайта">
<label class="form-label margin-top"><input type="text" name="name" placeholder="Имя*" required
    data-validate-field="name" id="name" aria-label="Введите своё имя"></label>
<label class="form-label"><input type="tel" name="phone" placeholder="Телефон*" required
    data-validate-field="tel" data-validate-rules="phone" id="tel"
    aria-label="Введите свой телефон"></label>
<button class="contacts__form-btn" type="submit">Заказать</button>
</form> 

*/

// ------------------------------------------------- Старое подключение

// ------------------------------------------------- Новое подключение

const validator = new JustValidate('#form', { // можно использовать классы вместо ид

  errorFieldStyle: { // Стили для инпута
    backgroundColor: 'red',
  },
  errorLabelStyle: { // Стили для ошибки
    color: '#F13F58',
  }

});

validator
  .addField('#login', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите ваш логин или email',
    },
    {
      rule: 'minLength',
      value: true,
      errorMessage: 'Минимальное количество букв - 1',
    },
  ])
  .addField('#email', [{ // можно использовать классы вместо ид
      rule: 'required',
      value: true,
      errorMessage: 'Введите ваш логин или email',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный email',
    },
  ])
  .addField('#checkpoint', [{
    validator: (value) => { // Своя проверка, будет работать как rule
      const ckeckPoint = document.getElementById("checkpoint");
      return Boolean(ckeckPoint.value == controlStoke)
    },
    errorMessage: 'Название ошибки',
  }, ])
  .addField('#phone', [{
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
  .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже
    let formData = new FormData(event.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  })

//   <form action="#" class="form" method="POST" enctype="multipart/form-data">
//   <label class="form__label">
//     <input class="input input-name" type="text" placeholder="Введите имя">
//   </label>
//   <label class="form__label">
//     <input class="input input-mail" type="email" name="Email"
//       placeholder="Введите email">
//   </label>
//   <label class="form__label">
//     <input class="input input-tel" type="tel" name="Телефон"
//       placeholder="Введите телефон">
//   </label>
//   <label class="form__label">
//     <textarea class="textarea" name="Сообщение" id="" cols="30" rows="10"
//       placeholder="Введите ваше сообщение"></textarea>
//   </label>
//   <input class="input" type="file" name="file[]" multiple id="myfile">
//   <button class="button">Отправить</button>
// </form>