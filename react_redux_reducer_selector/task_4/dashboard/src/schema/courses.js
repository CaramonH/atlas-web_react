import { schema, normalize } from 'normalizr';

const course = new schema.Entity('courses');

export function courseNormalizer(data) {
  return normalize(data, [course]);
}