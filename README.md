# rest_api


## Testing the API using curl because why not

```zsh

# MOVIE

# list all films
curl -X GET http://localhost:5000/movie
# add "testo film" to the db (no need to indicate post as it is the default)
curl -d '{"title": "testo film"}'  -H 'Content-Type: application/json' http://localhost:5000/movie
# add "testo 2" with actors (no need to indicate post as it is the default)
curl -d '{"title": "testo 2", "actors": ["John", "Tom"]}' -H 'Content-Type: application/json' http://localhost:5000/movie
# delete "testo film"
curl -X DELETE -H 'Content-Type: application/json' "http://localhost:5000/movie/title/testo%20film"
# delete "testo 2" using an actor
curl -X DELETE -H 'Content-Type: application/json' "http://localhost:5000/movie/actors/Tom"
curl -X PATCH -d '{"filterKey": "title", "filterVal": "testo film", "updateKey": "actors", "updateVal": ["Tom", "Mark", "Lucas"]}'  -H 'Content-Type: application/json' http://localhost:5000/movie


# USER

# create user POST http://localhost:5000/user body.username, body.email, body.password
curl -d '{"username": "pajojo", "email": "pajojo@gmail.com", "password": "test123"}'  -H 'Content-Type: application/json' http://localhost:5000/user
    # {"user":"pajojo","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMyMjg3NGI4OTQzZDNjOTc5NTRmZTMiLCJpYXQiOjE2NDc0NTQzMjR9.alJsG5W6ZrEs82x0PN3dYvxNEHD2JAqa_WMr9R_lH50"}

# // full login POST http://localhost:5000/login body.username and body.password
curl -d '{"username": "pajojo", "password": "test123"}'  -H 'Content-Type: application/json' http://localhost:5000/login

# // token login GET http://localhost:5000/user   header.Authorization: "Bearer TOKEN"
curl -X GET -H 'Content-Type: application/json' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMyMjg3NGI4OTQzZDNjOTc5NTRmZTMiLCJpYXQiOjE2NDc0NTQzMjR9.alJsG5W6ZrEs82x0PN3dYvxNEHD2JAqa_WMr9R_lH50" http://localhost:5000/user

# // update password PATCH http://localhost:5000/user body.password, header bearer token, 
curl -X PATCH -d '{"password": "test321"}'  -H 'Content-Type: application/json'  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMyMjg3NGI4OTQzZDNjOTc5NTRmZTMiLCJpYXQiOjE2NDc0NTQzMjR9.alJsG5W6ZrEs82x0PN3dYvxNEHD2JAqa_WMr9R_lH50" http://localhost:5000/user

# check it worked with full login
curl -d '{"username": "pajojo", "password": "test321"}'  -H 'Content-Type: application/json' http://localhost:5000/login

# delete user
curl -X DELETE -H 'Content-Type: application/json'  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMyNWE4NDYxOTBlZmIyM2NjMTVkY2UiLCJpYXQiOjE2NDc0NjcxNDB9.nNQAbB0wwIg2dCqKGg96IixVL1TmIFXiPUuq-Lbcwi4" http://localhost:5000/user
```





• Create a full REST API with a DB layer, token
auth and password hashing.

• At least a user model with relevant routes and
controllers to cover CRUD.

• All routes must be tested in Thunder Client/
Insomnia/Postman.

Stretch goal - Create a second model for data
storage, must be
in some way linked to the user database entries.


[9.3] Create a basic web server using Express.js (serve static files)