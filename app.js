'use strict';

function homeTown() {
  var seattle = prompt('Is Ken from Seattle?');
  console.log('is ken from Seattle:', seattle);

  if (seattle.toLowerCase() === 'no' || seattle.toLowerCase() === 'n') {
    alert('You are correct. He is from Montana.');
  } else {
    alert('He is from Montana.');
  }
}

function animalLover() {
  var animals = prompt('Does Ken love animals?');
  console.log('animal lover:', animals);

  if (animals.toLowerCase() === 'yes' || animals.toLowerCase() === 'y') {
    alert('But of course he does!');
  } else {
    alert('Animals ROCK!');
  }
}

function coffeeLover(){
  var coffee = prompt('Do you think Ken loves coffee?');
  console.log('coffee:', coffee);

  if (coffee.toLowerCase() === 'yes' || coffee.toLowerCase() === 'y') {
    alert('You are correct, and there are so many options here.');
  } else {
    alert('He loves coffee!');
  }
}

function travelLover(){
  var travel = prompt('Does Ken enjoy traveling?');
  console.log('travel:', travel);

  if (travel.toLowerCase() === 'yes' || travel.toLowerCase() === 'y') {
    alert('Oh so much!');
  } else {
    alert('There is so much to see.');
  }
}

function snowLover() {
  var snow = prompt('Does Ken like snow?');
  console.log('like snow:', snow);

  if (snow.toLowerCase() === 'yes' || snow.toLowerCase() === 'y') {
    alert('Very much so.');
  } else {
    alert('Oh, but he does!');
  }
}
