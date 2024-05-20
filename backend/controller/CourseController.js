import Course from "../Modal/Course.js";
export const createCourse = async (req, res) => {
  const course = req.body;
  const newCourse = new Course(course);
  try {
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};