const mongoose  = require('mongoose');

const dbConecction = async() => {

    try {
        mongoose.connect(process.env.BD_CNN, {}, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }); 

        console.log('BD Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la BD');
    }

}

module.exports = {
    dbConecction
}