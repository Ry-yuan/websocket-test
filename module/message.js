const mongoose = require('mongoose');
const connectMongodb = require('../db-connect');
const path = '/local';
connectMongodb(mongoose,path);

var Schema = mongoose.Schema;

var messageSchema = new Schema({
    belong: { type: String, required: true },
    historyMessage: [{
            sender:{type:String},
            time:{type:String},
            message:{type:String}
    }]
   });

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;