import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Create new elements and append to body
$('body').append('<div id="logo"><div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

// Function to update count and modify text content
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Select button and bind click event w/ debounced updateCounter to prevent spammy behavior
$('button').on('click', _.debounce(updateCounter, 500));