const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 30001;

//config 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}))

//connect to mongodb
mongoose.connect('mongodb+srv://crudoperation:andy123456789@cluster0.5q6ao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

//data schema
const itemSchema = {
    activity: String,
    description: String
}

//data model
const Item = mongoose.model('Item', itemSchema);

//read route
app.get('/todos', (req, res) => {
    Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error' + err))
});

//create route
app.post('/newtodo', (req, res) => {
    const newItem = new Item ({
        activity: req.body.activity,
        description: req.body.description
    });
    newItem
    .save()
    .then((item)=> console.log(item))
    .catch(err => res.status(400).json('error '+ err));
})
//delete route
app.delete('/delete/:id',  (req, res) => {
    const id = req.params.id;
    Item.findByIdAndRemove({_id: id}, (req, res) => {
        console.log('item deleted')
    } );
});

//update route
app.put('/put/:id', (req, res) => {
    const updatedItem = {
        activity: req.body.activity,
        description: req.body.description
    }

    Item.findByIdAndUpdate({_id: req.params.id}, {$set: updatedItem}, (req, res) => {
        console.log('item updated');
    })
})


app.listen(port, () => {
    console.log('express is running');
});