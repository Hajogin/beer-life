document.addEventListener('DOMContentLoaded', function(){
  var field_names = [ 'name', 'email', 'phone', 'subject', 'message' ],
      info = document.querySelector('#info'),
      submit = document.querySelector('#send'),
      xhr,
      fields = {};

  function set_message(text) {
    info.innerHTML = text;
    info.style.color = '';
  }

  function set_error(text) {
    info.innerHTML = text;
    info.style.color = 'red';
  }

  function on_success() {
    set_message('Сообщение отправлено');
  }

  function on_failure() {
    set_error(xhr.response);
  }

  if ('XMLHttpRequest' in window === false) {
    set_error('В браузере не обнаружена поддержка XHR');
    return;
  }

  function send() {
    var data = '';

    for (var i = 0, el; i < field_names.length; i++) {
      el = document.querySelector('[name="' + field_names[i] + '"]');
      if (el) {
        data && (data += '&');
        data += field_names[i] + '=' + el.value;
      }
    }

    xhr = new XMLHttpRequest();
    xhr.open('POST', '/send_email.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          on_success();
        } else {
          on_failure();
        }
      }
    };
  }

  submit.addEventListener('click', send);

});