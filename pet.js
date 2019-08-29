const myPet = {
  name: 'Nixon',
  species:' cat',
  nickname: [],
  age: 4,
  meow: function () {
    window.alert('MEOWWWWWWW')
  },
  purr: function () {
    window.alert('puuuurrrrrrrr')
  },
  hairball: function (){
    window.alert('blehblehblehbleh')
  },
  favoriteToys: [],
  play: function (toy) {
    let toy2 = toy.includes('fuzzy');
    if (toy2 === true) {
    this.favoriteToys.push(toy) 
    } 
  }
}

myPet.meow();
myPet.purr();
myPet.hairball();
myPet.play('fuzzy ball')
myPet.play('pudding')
myPet.play('fuzzy pole')
myPet.play('fuzzy paper')
console.log(myPet.favoriteToys);



