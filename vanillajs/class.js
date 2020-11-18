class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(this);
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
  }

  setAge(age) {
    this.age = age;
  }
}

const jane = new Person('Jane', 30);
const jack = new Person('Jack', 32);
// jane.sayHello();
jack.sayHello();
// jane.setAge(40);
// jane.sayHello();

// Quand on stocke "jack.sayHello" dans une variable,
// cette variable/fonction n'est plus liée (bound)
// à l'instance d'origine "jack"
let jackSayHello = jack.sayHello;
// bind permet d'établir de façon définitive la liaison
// entre la fonction et un objet : le `this` dans jackSayHello,
// c'est jack qu'on a passé en paramètre à bind
// Sans ce bind, l'appel jackSayHello() en dernière ligne échoue.
jackSayHello = jackSayHello.bind(jack);
jackSayHello();