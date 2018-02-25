// メッセージ投稿機能の非同期化
$(function(){
  function buildHTML(message){
    var html = `<div class = "group-main-content" data-message-id= ${message.id}>
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
        $ (function(){
          var number = $(".main-chat-content").get(0).scrollHeight;
          $('.main-chat-content').animate({
            scrollTop: number
          });
        })
    })
    .fail(function(){
        alert('error');
    })
    return false;

  })
// 自動更新機能

  $(function(){
    $(function(){
      // 5秒ごとに、update関数を動かす。
      setInterval(update, 5000);
    });
      // ここからupdate関数の詳細
    function update(){
      // group-main-contentというクラスがある場合
      if($('.group-main-content')[0]){
        var message_id = $('.group-main-content:last').data("message-id");
      // group-main-contentというクラスがない場合
      }else{
        var message_id = 0
      }
      $.ajax({
        url: location.href, //urlは現在のページを指定
        type: 'GET', //メソッドを指定
        data: {
          message: {id: message_id}
        },
        dataType: 'json'
      })
      .always(function(data){
        if(data.length !== 0)
          // dataがある場合は、以下の処理を行う。
          $.each(data, function(i, data){
            // 更新分のHTMLをとってきて変数htmlに代入
            var html = buildHTML(data);
            // main-chat-contentクラスにhtmlを加える。
            $(".main-chat-content").append(html);
          });
      });
    }

  });
})


