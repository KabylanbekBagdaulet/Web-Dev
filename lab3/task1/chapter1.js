<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'I\'m a JavaScript' );
  </script>

  <p>...After the script.</p>

</body>

</html>

alert("I\'m a JavaScript")

<html>

<body>

  <p>Before the script...</p>

  <script src="1.1js">
  
  </script>

  <p>...After the script.</p>

</body>

</html>



<html>

<body>

  <p>Before the script...</p>

  <script>
    let name="Earth";
    let curVisitor="Yussuf";
    alert(name);
    alert(curVisitor);
    
  </script>

  <p>...After the script.</p>

</body>

</html>

let name = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya

let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)


let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3

<!DOCTYPE html>
<html>

<body>
  <script>
    'use strict';

    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }
    value = prompt('Type a number', 0);

  if (value > 0) {
    alert( 1 );
  } else if (value < 0) {
    alert( -1 );
  } else {
    alert( 0 );
}

let result = (a + b < 4) ? 'Below' : 'Over';
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
  </script>


</body>

</html>

alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) ); //1 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); //1 undefined
alert( null || 2 && 3 || 4 ); // 3
if (age >= 14 && age <= 90);
if (-1 || 0) alert( 'first' ); // runs
if (-1 && 0) alert( 'second' ); //doesnt run
if (null || -1 && 1) alert( 'third' ); // runs

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

for(let i=0; i<3; i++){
    if (i%2==0){
        alert(i);
    }
}

let i=0;
while(i<3){
    alert(`number ${i}!`)
    i++;
}

while(true){
    let num=prompt("Enter num", "");
    if (num==100){
        break;
    }
}

let n = 10;

for(let i=2; i<=10; i++){
    let cnt=0;
    for(let j=1; j<=i; j++){
        if(i%j==0){
            cnt++;
        }
    }
    if (cnt==2){
        alert(i);
    }
}

if (browser=='Edge'){
    alet("You've got the Edge!")
} else if (browser=="Chrome" || browser=="Firefox" || browser=="Safari" || browser=="Opera"){
    alert("Okay")
}else{
    alert("We hope this page looks OK")
}

let a = +prompt('a?', '')

switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}



let ask = (question, yes, no) =>{
    if (confirm(question)) yes();
    else no();
    confirm(question) ? yes() : no();
}

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);