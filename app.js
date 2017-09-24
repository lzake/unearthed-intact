$(document).ready(function() {
    $('select').material_select();
    $('#autocomplete-input').focus();

    $('.likelihood').select(function() {
      event.preventDefault();
    })
    $('.risk').select(function() {
      event.preventDefault();
    })
    $('.submit').click(function() {
      event.preventDefault();
      alert("Thanks for submitting your risk assessment! Here's a great dad joke in return. What time did the man go to the dentist? Tooth hurt-y!")
      location.reload();
    })
    $('.please-add').click(function() {
      event.preventDefault();
      var appended = `<div class="input-field col s12">
      <select>
        <option selected>Electrocution</option>
        <option>Slip/Trip/Fall</option>
        <option>Heights</option>
        <option>Air Quality</option>
      </select>
      <label>Risk Category</label>
    </div>
    <div class="mitigation input-field col s12">
        <input id="icon_prefix" type="text" class="validate">
        <label for="icon_prefix">How can I mitigate this risk?</label>
    </div>
    <form class="likelihood" action="#">
      <p>
        <input name="group3" type="radio" id="test111" />
        <label class="green lighten-2 black-text" for="test111">Low</label>
        <input name="group3" type="radio" id="test222" />
        <label class="green lighten-3 black-text" for="test222">&#160;</label>
        <input name="group3" type="radio" id="test333" />
        <label class="yellow black-text" for="test333">&#160;</label>
        <input name="group3" type="radio" id="test444" />
        <label class="orange black-text" for="test444">&#160;</label>
        <input name="group3" type="radio" id="test555" />
        <label class="red black-text" for="test555">High</label>
      </p>
    </form>

    <p class="text">What is the likelihood I will get hurt?</p>

    <form class="risk" action="#">
      <p>
        <input name="group4" type="radio" id="test119" />
        <label class="green lighten-2 black-text" for="test119">Low</label>
        <input name="group4" type="radio" id="test229" />
        <label class="green lighten-3 black-text" for="test229">&#160;</label>
        <input name="group4" type="radio" id="test339" />
        <label class="yellow black-text"for="test339">&#160;</label>
        <input name="group4" type="radio" id="test449" />
        <label class="orange black-text"for="test449">&#160;</label>
        <input name="group4" type="radio" id="test559" />
        <label class="red black-text" for="test559">High</label>
      </p>
    </form>
    <p class="text">How severe are the consequences?</p>`
      $(`${appended}`).appendTo('.new')
      $('select').material_select();
    })

    $('#send').click(function() {
      event.preventDefault();
      var message = $('#autocomplete-input').val();
      $(`${"<p class='messages'>" + message + "</p>"}`).appendTo('.my-message');
      $('#autocomplete-input').val("");
      $('#autocomplete-input').focus();
    })
});
