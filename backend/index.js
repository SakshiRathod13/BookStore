
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;
try{
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  })
  console.log('MongoDB connected')
}catch(err){
  console.log('Error in connecting to MongoDB', err)
}
app.use

app.get('/', (req, res) => {
  res.send('!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})