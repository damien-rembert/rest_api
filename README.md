# rest_api


## Testing the API using curl because why not

```zsh
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