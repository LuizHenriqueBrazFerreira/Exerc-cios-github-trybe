const character = {
  game: 'Ragnarok EL',
  nick: 'Midrovenir',
  job: 'Novice Guardian',
};

const addProperty = (object, key, value) => {
  if(typeof object[key] === 'undefined'){
    object[key] = value;
  };
};

addProperty(character, 'baseLevel', 170);

console.log(character);