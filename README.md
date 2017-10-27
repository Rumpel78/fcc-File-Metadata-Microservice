# FreeCodeCamp API Projects

## File Metadata Microservice

* **Objective**:  Build a full stack JavaScript app that is functionally similar to this: <https://aryanj-file-size.herokuapp.com/> and deploy it to Heroku.
* **User Story**: I can submit a FormData object that includes a file upload
* **User Story**: When I submit something, I will receive the file size in bytes within the JSON response

### To run this app with docker:
* Build image: `docker build -t rumpel78/fmetadata .`
* Run container: `docker run -p8080:8080 --name fcc_fmetadata rumpel78/fmetadata`
* Open in browser: http://localhost:8080
* To remove the container run: `docker rm fcc_fmetadata -f`

### To run this app with nodejs and without docker:
* Enter source directory: `cd src`
* Install packages: `npm install`
* Start nodjs server: `npm start`

See the result under: https://fmetadata.app.rzipa.at/  
To take a look at the other projects go to https://app.rzipa.at
