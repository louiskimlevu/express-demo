# Description
Architecture of an Express application made of 3 APIs, /users, /session, /messages.

# APIs
GET /users
GET /users/#id
GET /session
GET /messages
GET /messages/#id
POST /messages/#id headers => 'Content-Type:application/json', body => json format
DELETE /messages/#id


# How to create a new message

curl -X POST -H 'Content-Type:application/json' localhost:3000/messages -d '{"text":"salut"}' | python -m json.tool

# How to retrieve messages

curl -X GET localhost:3000/messages | python -m json.tool

# How to delete a new message

curl -X DELETE http://localhost:3000/messages/1 | python -m json.tool

# Restrieve user session

curl -X GET localhost:3000/session | python -m json.tool

