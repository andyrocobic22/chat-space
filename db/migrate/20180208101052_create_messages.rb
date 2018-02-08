class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.references :user ,  foreign_key: :true , index: :ture
      t.references :group,  foreign_key: :true , index: :ture
      t.string  :image
      t.text    :text  
      t.timestamps
    end
  end
end
