$(function(){

  var search_list = $("#user-search-result");
  var search_no_list = $("#user-search-result");
  var add_list = $("#chat-group-user-8");

  function appendUser(user){
    var html =`<div class="chat-group-user clearfix">
                 <p class="chat-group-user__name">${user.name}</p>
                 <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
               </div>`
    search_list.append(html);
  }
  function appendNoUser(user){
    var html =`<div class="chat-group-user clearfix">
                 <p class="chat-group-user__name">${user}</p>
               </div>`
    search_no_list.append(html);
  }

  function addUser(id, name){
    var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value='${id}'>
                <p class='chat-group-user__name'>${name}</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>`
    return html;
  }
  $('#user-search-field').on('keyup', function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: input,
      dataType: 'json'
    })
    .done(function(users){
      $("#user-search-result").empty();
      if (users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else{
        appendNoUser("そんな人はいません");
      }
    })
    .fail(function(){
      alert('検索失敗');
    })
  });
  $(document).on("click",".chat-group-user__btn--add",function(){
    var id = $(this).data("user-id");
    var name = $(this).data("user-name");
    var html = addUser(id,name);
    add_list.append(html);
    $(this).parent().remove();
  });
  $(document).on("click",".js-remove-btn",function(){
    console.log("OK");
    $(this).parent().remove();
  });
});
