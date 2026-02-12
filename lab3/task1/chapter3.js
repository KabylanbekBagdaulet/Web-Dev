user={};
user.name="John";
user.surname="Smith";
user.name="Pete";
delete user.name;



function isEmpty(schedule){
    let cnt=0;
    for(let key in schedule){
        cnt++;
    }
    if (cnt==0){
        return false;
    }
}
schedule={};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
for( let key in salaries){
    let sum=0;
    sum+=salaries[key];
}


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for(let key in menu){
    if (typeof menu[key]==Number){
        menu[key]*=2;
    }
}

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name );

let calculator = {
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
    read(){
        this.a = +prompt('a', 0);
        this.b = +prompt('b', 0);
    }

};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);