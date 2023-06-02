/*when strict mode is enabled 
1- the variables must be declared before they are used
2 -Function declarations must be at the top of the scope in which
they are declared
3 - With statement is not allowed
4 - the eval function is more restricted
5 - Arguments object is read-only
6 - delete opereator cannot be used to delete properties of built in objects


'use strict';
//Import the http module

var http = require('http');

//Assign the value of PORT to the port variable. If PORT is not set
// it defaults to 8000. 

var port = process.env.PORT || 8000;

//Create a variable server using http.createServer method. It takes a 
//callback function with two parameters 'req' (requested object) and 'res' (response object) 
// this function will be called when a request is received by our Server.

var server = http.createServer(function(req, res) {

    //Define an array called "guests" with two string elements

    var guests = ['Mary', 'Don'];

    // JSON.stringify is used to convert guests array into a JSON string

    var guestsJSON = JSON.stringify(guests);

    //set the content type of the header to indicate that the response is JSON format

    res.setHeader('Content-Type', 'application/json');

    // this sends the JSON string as a response body and terminates the response
    // this method is used to end the response and send the data to the client

    res.end(guestsJSON);
});

 server.listen makes it listen to the specified port
when the server is started successfully it executes the callback function
which logs a messsage to the console indicating the port on which the server
is listening AKA listening on port 8000 */

const http = require('http');
const path = require('path');
const fs = require('fs');
const port = 8000

const server = http.createServer(function(req,res){
    if(req.method === 'GET' && req.url === '/pets'){
        const petsPath = path.join(__dirname, 'pets.json')
        fs.readFile(petsPath,'utf-8', function(err, data){
            if(err){
                console.error(err.message)
            }
            
        })

    }



})


//server.listen(port, function() {
//    console.log('Listening on port', port);
//});
