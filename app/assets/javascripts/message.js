$(function(){
  function buildHTML(message){
    var html = `<div class = "group-main-content">  
                  <div class ="group-content cf">
                    <div class ="user_name">
                      ${ message.name }
                    </div>
                    <div class ="date">
                      ${ message.date }
                    </div>
                  </div>
                  <div class ="comment">  
                    ${ message.text }
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
    })
    .done(function(data){
        var html = buildHTML(data);
        $('.main-chat-content').append(html)
        $('#message_text').val('')
        $(function() {
          var target = $('.main-chat-content').height;
          $('.main-chat-content').scrollTop(target);
        });
    })
    .fail(function(){
        alert('error');
    })
    return false;

  })

})


