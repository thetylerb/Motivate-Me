const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    goaltype: { 
        type: String 
    },
    goalname: { 
        type: String 
    },
    goaldescription: { 
        type: String 
    },
    goaldate: { 
        type: String 
    }
    //Should the goal date be a string or number? -Nic
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;