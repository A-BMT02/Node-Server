const fs = require("fs") ; 
const { join } = require("path");

const addData = async(info , res) => {
    let data = await getData() ; 
    data = JSON.parse(data) ;
    data.push(info) ;
    //console.log( data) ;
    fs.writeFile("./database.json" , JSON.stringify(data) , () =>{
        res.writeHead(200 , {"Content-type" : "text/plain"}) ; 
        res.write("successfully added to file") ; 
        res.end() ; 

    }) ;

}

const getData = () => {
    return new Promise((res , rej) => {
        fs.readFile("./database.json" , "utf-8" , (err , data) => {
        if(err) {
            rej(err) ;  
        } 
        res(data) ;  
        
    } )
    })
   
    //const data = fs.readFileSync("./database.json" , {encoding:'utf8' , flag:'r'}) ; 
     
}

returnData = async (req , res ) => {
   const data = await getData() ;
     
    res.writeHead(201 ,{"Content-type" : "application/json"})
   res.write(data , "utf8" , () => {
       console.log(typeof data) ;
        res.end() ;

   }) ;

}


const updateData = async (data , res) => {
    let serverData = await getData() ; 
    serverData = JSON.parse(serverData) ; 
    serverData.push(data) ;
    fs.writeFile('./database.json' , JSON.stringify(serverData) , () => {
        res.writeHead(200 , { "Content-type" : "text/plain"}) ; 
        res.write("succesfully updated") ; 
        res.end() ; 
    }) ; 

}

const deleteData = async (id , res) => {
    let products = await getData() ; 
    products = JSON.parse(products) ; 
    products = products.filter(p => p.id != id) ; 
    //console.log(products[0].id) ; 
    fs.writeFile('./database.json' , JSON.stringify(products) , () => {
        res.writeHead(200 , {"Content-type" : "text/plain"}) ; 
        res.write("successfully deleted") ; 
        res.end() ; 
    }) ; 
}

module.exports = {
    addData ,
    returnData , 
    updateData , 
    deleteData
}