// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const { exec, spawn, fork } = require( 'child_process' );

// Vendor

// Project

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
function initExec() {
	exec( `echo "Hello, world!"`, ( err, stdout, stderr ) => {
		if ( err ) {
			console.log( err.message );
			return;
		}

		console.log( 'LOGGING OUT `process.getuid()`' );
		console.log( process.getuid() );
		console.log( 'LOGGING OUT `process.geteuid()`' );
		console.log( process.geteuid() );
	} );
}

function initSpawn() {
	let childProcess = spawn( `echo`, [ `"Hello, world!"` ], { encoding: 'utf8' } );

	childProcess.stdout.setEncoding( 'utf8' );

	// Listen for 'data' on standard out.
	childProcess.stdout.on( 'data', ( chunk ) => {
		console.log( 'LOGGING OUT `process.getuid()`' );
		console.log( process.getuid() );
		console.log( 'LOGGING OUT `process.geteuid()`' );
		console.log( process.geteuid() );

		console.log( chunk );
	} );

	// Listen for errors.
	childProcess.stderr.on( 'data', ( err ) => {
		console.log( err );
	} );
}

function initFork() {
	let childProcess = fork( './_fork.js' );

	childProcess.on( 'message', ( ...args ) => {
		console.log( 'RCVD. MESSAGE', args[ 0 ] );
	} );
}

// --------------------------------------------------
// INITIALIZATION
// --------------------------------------------------
// initExec();
// initSpawn();
initFork();
