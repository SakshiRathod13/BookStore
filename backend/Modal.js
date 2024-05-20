import mongoose from "mongoose";
const CourseSchema = mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    description:String,
    image:String,
    title:String,
})
const Course = mongoose.model('Course', CourseSchema)
export default Course
