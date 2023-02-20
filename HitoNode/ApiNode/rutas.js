

const conexion = require('./config/conexion')






const express = require('express');
const router = express.Router();

// Configurar cabeceras y cors
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});





// mostrar usuarios 
router.get('/',(req, res)=>{

      let sql ='select * from users'
      conexion.query(sql,(err, rows, fields)=>{
    
        if(err) throw err;
        else{
            res.json(rows)
        }



      })

})
// seleccionar un usuario
router.get('/:id',(req, res)=>{
    const{id}= req.params
    let sql ='select * from users where id_user = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
  
      if(err) throw err;
      else{
          res.json(rows)
      }



    })

})

//añadir usuario

router.post('/',(req, res)=>{
  const{nombre,apellidos,edad,oficio}= req.body
  let sql = `insert into users(nombre, apellidos, edad, oficio) values('${nombre}','${apellidos}','${edad}','${oficio}')`
  conexion.query(sql, (err,rows,fields)=>{

    if(err)throw err
    else{
        res.json({status: 'nuevo usuario agregado'})
    }



  })

})


//eliminar usuario 
router.delete('/:id',(req, res)=>{
   const{id}=req.params

   let sql =` delete from users where id_user = '${id}'`
   conexion.query(sql, (err,rows,fields)=>{

    if(err)throw err
    else{
        res.json({status: 'usuario eliminado'})
    }



  })

})

//Modificar usuario
router.put('/:id',(req, res)=>{
 const{id}=req.params
 const{nombre, apellidos,edad,oficio} = req.body

 let sql=`update users set
          nombre='${nombre}',
          apellidos='${apellidos}',
          edad='${edad}',
          oficio='${oficio}'
          where id_user='${id}'`

          conexion.query(sql, (err,rows,fields)=>{

            if(err)throw err
            else{
                res.json({status: 'usuario modificado'})
            }
        
        
        
          })        
          



})



module.exports= router;