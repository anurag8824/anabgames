const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'demoprojects',
//     // user:'root',
//     // password:'',
//     // database:'goa',
//     password: '#demoProjects#$4@',
//     database: 'goagamesclub',
//     port: 8000
// });

// module.exports = connection;

// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: '127.0.0.1',  // or '127.0.0.1'
//   user: 'gameuser',
//   password: 'StrongPassword123',
//   database: 'gamedb'
// });

const connection = mysql.createPool({
    host: 'gameuser',
    user: 'root',
    password: 'StrongPassword123',  // XAMPP's default root password is blank
    database: 'gamedb',
    port: 3306
});

module.exports = connection;
