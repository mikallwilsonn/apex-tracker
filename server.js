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


// Handle production
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( __dirname + '/public' ));

    app.get( /.*/, ( req, res ) => res.sendFile( __dirname + '/public/index.html' ));
}


// Get PORT
const PORT = process.env.PORT || 8000;


app.listen( PORT, () => {
    console.log( `✅ Server running in ${process.env.NODE_ENV} on port ${PORT}` );
});