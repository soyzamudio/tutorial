'use strict';

$(document).ready(function() {
  $('#add').click(function() {
    var array = $('#nums').val().split(',').map(function(e) {
      var num = parseInt(e);
      var $li = $('<li>');
      $li.text(num);
      if (num % 2) {
        $('#odds').append($li);
      } else {
        $('#evens').append($li);
      }
      return parseInt(e);
    }).reduce(function(prev, curr) {
      return prev + curr;
    }, 0);
    console.log('Total: ' + array);

    var oddSum = $('#odds li').map(function(index, element) {
      return parseInt(element.textContent);
    }).toArray().reduce(function(prev, curr) {
      return prev + curr;
    }, 0);

    var evenSum = $('#evens li').map(function(index, element) {
      return parseInt(element.textContent);
    }).toArray().reduce(function(prev, curr) {
      return prev + curr;
    }, 0);

    $('.oddSum').append('Total Odds: ' + oddSum);
    $('.evenSum').append('Total Evens: ' + evenSum);
  });
});
