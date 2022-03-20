const { addData } = require("./utils") ; 
const { returnData } = require("./utils") ;
const { updateData } = require('./utils') ; 
const { deleteData }  = require('./utils') ; 
const  { createProduct} = require("./utils") ; 

const http = require("http") ; 


const server = http.createServer((req , res) => {

    if(req.url === "/students" && req.method === "POST") {
        createProduct(req , res) ;        
    }
    else if(req.url === "/students" && req.method === "GET") {
        returnData(req , res) 
    }
    else if(req.url === "/students" && req.method == "PUT") {
        updateData(req,res) ; 
    }
    else if(req.url.match(/\/students\/([0-9]+)/) && req.method === "DELETE") {
        const id = req.url.split('/')[2] ; 
        deleteData(id , res) ; 
    }

})

server.listen(4000) ; 

console.log("server is running") ; 