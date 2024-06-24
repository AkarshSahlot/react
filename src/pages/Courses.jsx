// src/pages/Courses.js
import { Container } from '../styles';
import CourseCard from '../componenets/CourseCard';

const courses = [
  { id: 1, title: 'Watercolor Painting', description: 'Learn the basics of watercolor painting.' },
  { id: 2, title: 'Oil Painting', description: 'Advanced techniques in oil painting.' },
  // Add more courses as needed
];

const Courses = () => (
  <Container>
    <h1>Courses</h1>
    <div>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </Container>
);

export default Courses;
