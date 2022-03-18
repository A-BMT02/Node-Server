const fs = require("fs") ; 

const addData = (info) => {
    const data = getData() ; 
    data.push(info) ;
    //console.log(data) ;
    fs.writeFileSync("./database.json" , JSON.stringify(data)) ;

}

const getData = () => {
    const data = fs.readFileSync("./database.json" , {encoding:'utf8' , flag:'r'}) ; 
    return JSON.parse(data);  
}

const updateData = (data) => {
    const serverData = getData() ; 
    serverData.push(data) ;
    fs.writeFileSync('./database.json' , JSON.stringify(serverData)) ; 
}

const deleteData = (id) => {
    let products = getData().filter(p => p.id != id) ; 
    fs.writeFileSync('./database.json' , JSON.stringify(products)) ; 
}

module.exports = {
    addData ,
    getData , 
    updateData , 
    deleteData
}