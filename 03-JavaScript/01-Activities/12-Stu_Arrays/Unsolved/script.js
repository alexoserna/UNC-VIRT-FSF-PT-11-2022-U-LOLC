// WRITE YOUR CODE HERE
var studentNames = ["Bob", "Joey", "Dylan", "Alex", "Maria"];

console.log(studentNames.length);

for ( x = 0; x < studentNames.length; x++) {
    console.log( "Welcome to the class " + studentNames[x] );
}

var newStudent = "Ben";

studentNames[0] = newStudent;

if ( studentNames[0] = newStudent ) {
    console.log( newStudent + " is in class" );
}