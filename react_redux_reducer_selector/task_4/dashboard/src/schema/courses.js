// schema/courses.js
import { schema, normalize } from 'normalizr';

// Define the course schema
const course = new schema.Entity('courses');

// Function to normalize the data
const coursesNormalizer = (data) => {
  return normalize(data, [course]);
};

export { course, coursesNormalizer };
