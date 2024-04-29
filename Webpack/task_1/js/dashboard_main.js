import $ from 'jquery';
import _ from 'lodash';

// Function to update the counter
const updateCounter = _.debounce(() => {
    let count = parseInt($('#count').text()) || 0;
    count++;
    $('#count').text(`${count} clicks on the button`);
}, 500);

$(document).ready(() => {
    // Add paragraphs to the body
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');

    // Add a button to the body
    $('body').append('<button id="clickButton">Click here to get started</button>');

    // Add a paragraph for the count
    $('body').append('<p id="count"></p>');

    // Add a paragraph for the copyright
    $('body').append('<p>Copyright - Holberton School</p>');

    // Bind the updateCounter function to the click event of the button
    $('#clickButton').click(updateCounter);
});
