if @new_message.present? # @new_messageに中身があれば
  json.array! @new_message.each do |message|# 配列かつjson形式で@new_messageを返す
    json.name message.user.name
    json.text message.text
    json.image message.image.url
    json.created_at message.created_at.strftime("%Y年%m月%d日 %H時%M分")
    json.id message.id
  end
end
