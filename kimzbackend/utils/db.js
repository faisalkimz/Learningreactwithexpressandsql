import mysql from 'mysql';

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'usersdb'
})

con.connect((err)=>{
    if(err){
        console.log('err')
    }
    else{
        console.log('success')
    }
})