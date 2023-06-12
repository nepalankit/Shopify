import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,

      useNEwUrlParser: true,
      //   useCreateIndex: true,
    });
    console.log(`connected mongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`error :${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
