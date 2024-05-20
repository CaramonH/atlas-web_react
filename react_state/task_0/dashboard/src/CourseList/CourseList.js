import React from 'react';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  courseTable: {
    width: '90%',
    borderCollapse: 'collapse',
    border: '1px solid #e0e0e0',
    margin: '1rem auto',
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    border: '1px solid #e0e0e0',
  },

});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseTable)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell='No course available yet' isHeader={false} />
        ) : (
          listCourses.map(course => (
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;