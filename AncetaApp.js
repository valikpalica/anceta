const express = require('express');
const Router = require('./route/route');
const app = express();
const cors = require('cors');
app.use(cors({
    origin:'*'
}));
app.use(express.json());
app.use('/type_anceta',Router);
const PORT = process.env.PORT || 8001; 
const syncDB = require('./syncdb');
process.on('SIGTERM',()=>{
    app.close(()=>{
        console.log('servis Anceta terminated');
    })
})
try {
    app.listen(PORT, async ()=>{
        console.log(`servis Anceta started on port: ${PORT}`);
        await syncDB();
    });
} catch (error) {
    process.kill(process.pid,'SIGTERM');
}