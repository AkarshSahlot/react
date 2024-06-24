// src/components/CourseCard.js
import { Card } from '../styles';

const CourseCard = ({ course }) => (
  <Card>
    <h2>{course.title}</h2>
    <p>{course.description}</p>
  </Card>
);

export default CourseCard;
