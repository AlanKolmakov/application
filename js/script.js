'use strict';

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
const logValues = course => {
    console.log(course.id, course.name, course.year);
};

// Sample usage - do not modify
logValues({ id: 1, name: "Learn JavaScript", year: 2021 });
// should log (separately): 1, "Learn JavaScript", 2021