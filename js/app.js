'use strict';

// constructor function

const animalArray = [];

function Animal (name, src, description, keyword, horns){
  this.name = name;
  this.src = src;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;

  animalArray.push(this);
}

Animal.prototype.render = function () {
  const $clone = $('#photo-template').clone();
  const $cloneSelect = $('#dropdown').clone();

  $clone.find('h2').text(this.name);
  $clone.find('img').attr('src', this.src).attr('alt', this.description);
  $clone.find('p').text(this.description);

  $('main').append($clone);

  // to populate dropdown //
  $cloneSelect.attr('value', this.keyword).text(this.keyword);
  $('select').append($cloneSelect);

};

const animalsFromData = hornedAnimals => {

  hornedAnimals.forEach( horns => {
    new Animal (horns.title, horns.image_url, horns.description, horns.keyword, horns.horns);

  });

  //  iterates through `animalArray` & renders w/ Jquery
  animalArray.forEach(value => value.render());

};

const pullObject = {
  method: 'get',
  dataType: 'json',
};

$.ajax('/data/page-1.json', pullObject).then(animalsFromData);

console.log('animal array: ' , animalArray);


