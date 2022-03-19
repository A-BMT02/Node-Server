const { addData } = require("./utils") ; 
const { returnData } = require("./utils") ;
const { updateData } = require('./utils') ; 
const { deleteData }  = require('./utils') ; 

const http = require("http") ; 


const server = http.createServer((req , res) => {
    if(req.url === "/students" && req.method === "POST") {
        let data = "" ; 
         req.on('data' , chunk => {
             data+=chunk ; 
         } )
         req.on('end' , () => {
             const final = JSON.parse(data) ; 
             addData(final , res) ;
         })
    }
    else if(req.url === "/students" && req.method === "GET") {
        returnData(req , res) 
        //res.write(getData()) ;
    }
    else if(req.url === "/students" && req.method == "PUT") {
        let data = "" ; 

        req.on('data' , chunk => {
            data+=chunk ; 
        }) 
         
        req.on("end" , () => {  
        updateData(JSON.parse(data) , res) ; 
        })

    }
    else if(req.url.match(/\/students\/([0-9]+)/) && req.method === "DELETE") {
        const id = req.url.split('/')[2] ; 
        deleteData(id , res) ; 
        
    }

})

server.listen(4000) ; 

console.log("server is running") ; 