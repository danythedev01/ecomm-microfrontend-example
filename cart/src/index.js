/*
all this does is give webpack the hability to asynchronously load up the bootstrap.js file.
and because of we're loading that code asynchronously, webpack has the opportunity in the browser 
just to realize that before we run the code, we also have to fech dependencies (faker for this case)
*/

import('./bootstrap')