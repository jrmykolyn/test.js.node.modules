// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
// Vendor
// Project

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
console.log( 'LOGGING OUT `process.getuid()`' );
console.log( process.getuid() );
console.log( 'LOGGING OUT `process.geteuid()`' );
console.log( process.geteuid() );

let counter = 0;
let intervalId = setInterval( () => {
	counter++;
	process.send( `Counter: ${counter}` );

	if ( counter >= 10 ) {
		clearInterval( intervalId );
	}
}, 1000 );
