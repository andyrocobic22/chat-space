require 'rails_helper'
describe Message do 
  describe '#create' do
    # ///メッセージを保存できる場合///
    # テキストあり　画像なし。
    it "is valid with text" do
      message = build(:message, image: "")
      expect(message).to be_valid
    end
    #テキストなし　画像あり。
    it "is valid with image" do
      message = build(:message, text: "")
      expect(message).to be_valid
    end
    #テキストあり　画像あり。
    it "is valid with image and text" do
      message = build(:message)
      expect(message).to be_valid
    end 
    # ///メッセージを保存できない場合///
    #テキストなし。画像なし。
    it "is invalid without a text and image" do
      message = build(:message, text: "",image: "")
      message.valid?
      expect(message.errors[:text]).to include('を入力してください') 
    end
    # group_id なし
    it "is invalid without a group_id" do
      message = build(:message, group_id: "")
      message.valid?
      expect(message.errors[:group]).to include('を入力してください') 
    end
    it "is invalid without a user_id" do
      message = build(:message, user_id: "")
      message.valid?
      expect(message.errors[:user]).to include('を入力してください') 
    end
  end
end
