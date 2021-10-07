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
    bridgeService.getOpenHouse().then(function(openhouses){
        res.json(openhouses);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/property/:id', (req, res) => {
    bridgeService.getProperty(req.params.id).then(function(property){
        res.json(property);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/member/:id', (req, res) => {
    bridgeService.getMember(req.params.id).then(function(member){
        res.json(member);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/office/:id', (req, res) => {
    bridgeService.getOffice(req.params.id).then(function(office){
        res.json(office);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/openhouse/:id', (req, res) => {
    bridgeService.getOpenHouse(req.params.id).then(function(openhouse){
        res.json(openhouse);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/', (req, res) => {
    res.send("bridge-service");
});

app.listen(PORT, HOST);
