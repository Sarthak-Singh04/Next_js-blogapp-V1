const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            dbName: 'myDatabase', // Replace 'myDatabase' with your actual database name
            autoReconnect: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        throw new Error(`Connection failed: ${error.message}`);
    }
};

export default connect;
