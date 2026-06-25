import mongoose from 'mongoose'

export default async function connectDB(mongoUri){
  if(!mongoUri) throw new Error('MONGO_URI not provided')
  try{
    await mongoose.connect(mongoUri, { })
    console.log('Connected to MongoDB')
  }catch(err){
    console.error('MongoDB connection error', err)
    throw err
  }
}
