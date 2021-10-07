const bridgeService = require('./bridge');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/property', (req, res) => {
    bridgeService.getProperties().then(function(properties){
        res.json(properties);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/member', (req, res) => {
    bridgeService.getMembers().then(function(members){
        res.json(members);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/office', (req, res) => {
    bridgeService.getOffices().then(function(offices){
        res.json(offices);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/openhouse', (req, res) => {
    bridgeService.getOpenhouse().then(function(openhouses){
        res.json(openhouses);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});



app.get('/', (req, res) => {
    res.send("bridge-service");
});

app.listen(PORT, HOST);
