import $ from 'jquery';

const paragraphs = [
  'Holberton Dashboard',
  'Dashboard data for the students',
  'Copyright - Holberton School'
];

$(document).ready(() => {
  paragraphs.forEach(text => {
    $('body').append(`<p>${text}</p>`);
  });
});
