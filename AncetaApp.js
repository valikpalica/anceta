const express = require('express');
const Router = require('./route/route');
const app = express();
const PORT = process.env.PORT || 8001; 
const syncDB = require('./syncdb');

process.on('SIGTERM',()=>{
    app.close(()=>{
        console.log('servis Anceta terminated');
    })
})
try {
    app.use(express.json());
    app.use('/',Router);
    app.listen(PORT, async ()=>{
        console.log(`servis Anceta started on port: ${PORT}`);
        await syncDB();
    });
} catch (error) {
    process.kill(process.pid,'SIGTERM');
}