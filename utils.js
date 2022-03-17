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


module.exports = {
    addData 
}