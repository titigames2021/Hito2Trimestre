const mysql = require('mysql');
const conexion = mysql.createConnection({

 host:'localhost',
 user:'root',
 password:'',
 port:3306,
 database:'cvjobs'


});

conexion.connect((err)=>{

  if(err){
     console.log('ha ocurrido un error: '+ err)
  }
  else{
     console.log('base de datos conectada!!!')
  }




});


module.exports=conexion;