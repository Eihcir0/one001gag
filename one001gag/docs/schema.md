# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
image_id    | integer   | not null, foreign key (references image), indexed
user_id     | integer   | not null, foreign key (references users), indexed
nsfw        | boolean   | not null, default: false
url         | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
content     | string    | not null

## votes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
item_id     | integer   | not null, foreign_key (polymorphic references comment or post)


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
item_id     | integer   | not null, foreign key (references post), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed
