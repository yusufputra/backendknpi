// const monk =require('monk');
// const db = monk('mongodb://root:game9898@ds151383.mlab.com:51383/forum-basdat')

// module.exports=db;

module.exports ={
    client : 'mssql',
    connection: {
      server : 'localhost',
      user : 'bangucup',
      password : 'AAkjOz99',
      database:'knpi',
      options: {
          port: 1433,
          encrypt: true
      }
    }
  };