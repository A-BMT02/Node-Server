const { addData } = require("./utils")

const http = require("http") ; 


const server = http.createServer((req , res) => {
    if(req.url === "/students" && req.method === "POST") {
        let data = "" ; 
         req.on('data' , chunk => {
             data+=chunk ; 
         } )
         req.on('end' , () => {
             const final = JSON.parse(data) ; 
             addData(final) ;
             res.end() ;
         })

          


    }
})

server.listen(4000) ; 

console.log("server is running") ; 