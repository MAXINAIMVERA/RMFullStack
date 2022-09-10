const mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

exports.register = (req, res) => {
    const {username, email, password, confirmedpassword} = req.body

    db.query('SELECT username FROM registeredusers WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            res.render('register', {
                messageUserName: 'UserName already exists'
            })
        } 

        db.query('SELECT email FROM registeredusers WHERE email = ?', [email], (error, results) => {
            if (error) {
                console.log(error)
            }
            if (results.length > 0) {
                res.render('register', {
                    messageEmail: 'Email already registered'
                })
            }
        }) 
        
        if (password !== confirmedpassword) {
            res.render('register', {
                messagePassword: 'Both passwords must be the same'
            })
        }
        
        else {

            db.query('INSERT INTO registeredusers SET ?', {username: username, email: email, password: password}, (error, results) => {
                if (error) {
                    console.log(error)
                }
                else {
                    res.render('register', {
                        messageSuccesfull: 'USER SUCCESFULLY REGISTRATED' 
                    })
                }
            })

        }

    })
}