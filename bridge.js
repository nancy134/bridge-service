const axios = require('axios');
const utilities = require('./utilities');

exports.getProperties = function(){
    return new Promise(function(resolve, reject){
        var url = "https://api.bridgedataoutput.com/api/v2/OData/actris_ref" + "/Property";
        var headers = utilities.createHeaders(process.env.BRIDGE_ACCESS_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getMembers = function(){
    return new Promise(function(resolve, reject){
        var url = "https://api.bridgedataoutput.com/api/v2/OData/actris_ref" + "/Member";
        var headers = utilities.createHeaders(process.env.BRIDGE_ACCESS_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getOffices = function(){
    return new Promise(function(resolve, reject){
        var url = "https://api.bridgedataoutput.com/api/v2/OData/actris_ref" + "/Office";
        var headers = utilities.createHeaders(process.env.BRIDGE_ACCESS_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}


exports.getOpenhouses = function(){
    return new Promise(function(resolve, reject){
        var url = "https://api.bridgedataoutput.com/api/v2/OData/actris_ref" + "/Openhouse";
        var headers = utilities.createHeaders(process.env.BRIDGE_ACCESS_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}


exports.getProperty = function(id){
    return new Promise(function(resolve, reject){
        var url = "https://api.bridgedataoutput.com/api/v2/OData/actris_ref" + "/Property" + "(" + id + ")";
        var headers = utilities.createHeaders(process.env.BRIDGE_ACCESS_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getMember = function(id){
    return new Promise(function(resolve, reject){
        var url = "https://api.bridgedataoutput.com/api/v2/OData/actris_ref" + "/Member" + "(" + id + ")";
        var headers = utilities.createHeaders(process.env.BRIDGE_ACCESS_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getOffice = function(id){
    return new Promise(function(resolve, reject){
        var url = "https://api.bridgedataoutput.com/api/v2/OData/actris_ref" + "/Office" + "(" + id + ")";
        var headers = utilities.createHeaders(process.env.BRIDGE_ACCESS_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getOpenHouse = function(id){
    return new Promise(function(resolve, reject){
        var url = "https://api.bridgedataoutput.com/api/v2/OData/actris_ref" + "/OpenHouse" + "(" + id + ")";
        var headers = utilities.createHeaders(process.env.BRIDGE_ACCESS_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}