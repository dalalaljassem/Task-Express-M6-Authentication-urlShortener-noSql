const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.7m7px.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );

  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
