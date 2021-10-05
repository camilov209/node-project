const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Online database');

    }catch(error) {
        console.error(error);
        throw new Error('Error not connect database');
    }
}

module.exports = {
    dbConnection
}