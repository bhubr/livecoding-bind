const dog = {
  name: 'Médor',
  bark: function() {
    console.log(this);
    console.log('Woof, woof, I am', this.name);
  }
}

dog.bark();

const dogBark = dog.bark();
// échoue car le this est undefined dans dogBark
dogBark();