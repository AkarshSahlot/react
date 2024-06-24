// src/pages/Courses.js
import { Container } from '../styles';
import CourseCard from '../componenets/CourseCard';

const courses = [
  { id: 1, title: 'Watercolor Painting', description: 'Learn the basics of watercolor painting.' },
  { id: 2, title: 'Oil Painting', description: 'Advanced techniques in oil painting.' },
  { id: 2, title: 'Natural Painting', description: 'Advanced techniques in  painting.' },
  { id: 2, title: 'Abstract Painting', description: 'Advanced techniques in  painting.' },
  { id: 2, title: 'PastelColor Painting', description: 'Advanced techniques in painting.' },
  { id: 2, title: 'Anime Painting', description: 'Advanced techniques in  painting.' },
  { id: 2, title: 'yash Nadar Painting', description: 'Advanced techniques in  painting.' },
  { id: 2, title: 'Oil Painting', description: 'Advanced techniques in  painting.' },

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
