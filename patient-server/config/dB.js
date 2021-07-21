//Database config

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conekt = await mongoose.connect(process.env.MONGO_URL,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            });
        console.log(`MongoDB connected ${conekt.connection.host}`);
    } catch {
        console.log(`Error ${err.message}`);
        process.exit(1);
    }
}

module.export = connectDB;