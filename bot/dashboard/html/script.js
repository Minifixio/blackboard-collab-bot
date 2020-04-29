const apiUrl = 'http://localhost:3000/api'

$(function (){

  var commandListTemplate = '<tr class="is-selected"><td class="mdl-data-table__cell--non-numeric"><b>${command}</b></td><td class="mdl-data-table__cell--non-numeric">${desc}</td></tr>'
  $.template("commandListTemplate", commandListTemplate);

  $("#commands-table > thead > tr > th:nth-child(1) > label").addClass('is-selected');

  $("#start-button").click(function() {
    $.ajax({
        type: "POST",
        contentType : "application/json",
        url: `${apiUrl}/start`,
        data: JSON.stringify({
            url: $("#bot-url-input").val(),
            name: $("#bot-name-input").val()
        }),
        dataType: 'json',
      });
  })

  $("#listen-button").click(function() {
    let url = `${apiUrl}/listen`
    $.ajax({
        url: url,
        type: 'GET'
      }); 
  })

  $.get(`${apiUrl}/commands`, function(data) {
    data.forEach(command => {
      $.tmpl("commandListTemplate", {command: command.name, desc: command.description}).appendTo("#commands-table");
    });
  })

  $("#test-button").click(function() {
    let url = "http://localhost:3000/api/test";
    $.getJSON({
        url: url
      }); 
  })

  $("#test-button").click(function() {
    let url = "http://localhost:3000/api/test";
    $.getJSON({
        url: url
    }); 
  })

  $("#button-test-input").click(function() {
    let url = "http://localhost:3000/api/test/click";
    $.getJSON({
        url: url
    });
  })

  $(document).on("keypress", function(e) {
    console.log(e)
  })
})


