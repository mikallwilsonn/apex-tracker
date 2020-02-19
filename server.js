// ----
// Dependencies
const express = require( 'express' );
const morgan = require( 'morgan' );
const dotenv = require( 'dotenv' );


// Load env variables
dotenv.config({ path: './config.env' });


// STart basic express server
const app = express();


// Dev logging
if ( process.env.NODE_ENV === 'development' ) {
    app.use( morgan( 'dev' ));
}


// Profile routes
app.use( '/api/v1/profile', require( './routes/profile' ) );


// Get PORT
const PORT = process.env.PORT || 8000;


app.listen( PORT, () => {
    console.log( `✅ Server running in ${process.env.NODE_ENV} on port ${PORT}` );
});