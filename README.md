## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index|
|mail|string|null: false, unique: true|

### Association
- has_many :groups through: :members
- has_many :comments
- has_many :members



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index|


### Association
- has_many :users through: :members
- has_many :comments
- has_many :members


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string||
|text|text||


### Association
- belongs_to :user
- belongs_to :group
