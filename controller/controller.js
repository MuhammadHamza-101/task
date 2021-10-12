
const mongoose = require('mongoose');
const Users = require('./schema');
//function to add data in database

function create(req, res) {
    var date = new Date();
    date.toDateString();
    let user = {
        name: req.body.name,
        age: req.body.age,
        father: req.body.father,
        phone: req.body.phone,
        email: req.body.email,
    }
    let users = new Users(user)

    users.save().then((data) => {
        res.json(data)
        console.log(data);
        console.log("sucessfully added data");
    })
        .catch((e) => {
            console.log(e.message);
        })
};

//function to get data in database

function view(req, res) {
    var name = req.body.name
    var father = req.body.father
    var age = req.body.age
    var phone = req.body.phone
    var email = req.body.email
    // var bodyData = `{[${name}],{[${father}],${age},${phone},${email}}`
    var bodyData = {name,father,age,phone,email}

    Users.find({ name:'hunain',age:20 },(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.send(data)
        }
    });

    // var query= Users.find({}).sort({ name: 1 }).limit(1)
    // Users.find(bodyData).then(resp =>{res.json(resp)})
    // console.log(resp);

    // if (  Users.find(bodyData).then(res)) {
    //     res.send(res);

    //     // Users.find()
    //     // console.log('if results',bodyData);
    // }
    // else {
    //     Users.find().then((data, err) => {
    //         if (err) {
    //             return res.status(500).send({ error: "Problem find Employee recored " })
    //         };
    //         console.log("find data succcessfully");
    //         res.send(data)
    //         console.log(" else results");
    //     })
    // }
};



// function to updateData using id of user
function update(req, res) {
    Users.findByIdAndUpdate(req.params.id, req.body, (err, Users) => {
        if (err) {
            return res.status(500).send({ error: "Problem with Updating the   Employee recored " })

        };
        res.send({ success: "Updation successfull" });

    })
};

//remover data using user id 

function remove(req, res) {
    Users.findByIdAndDelete(req.params.id, (err, Users) => {
        if (err) {
            return res.status(500).send({ error: "Problem with Deleting the Employee recored " })
        }
        res.send({ success: 'Employee deleted successfully' })
        console.log('successfully deleted data');
    })
}


module.exports.create = create;
module.exports.view = view;
module.exports.update = update;
module.exports.remove = remove;