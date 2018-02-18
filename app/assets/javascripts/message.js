$(function(){
  function buildHTML(text){
    var html = `<div class ="group-content cf">
                  <div class ="user_name">
                    ${message.user.name}
                  </div>
                  <div class ="data">
                    ${message.created_at}
                  </div>
                <div class ="comment">  
                  ${message.text}    
                </div>`
    return html         
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new formData(this);
    var url = $(this).attr('action')
    $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
  })
  .done(function(){
    var html = buildHTML(data);
    $('group-main-content').append(html)
    $('message_text').val('')
  })
  .fail(function(){
    alert('error');
  })
})
