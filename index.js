const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req, res)=>{
    res.sendFile('public/homepage.html', {root:__dirname})
});
app.get('/about',(req, res)=>{
    res.sendFile('public/about.html', {root:__dirname})
});
app.get('/contact',(req, res)=>{
    res.sendFile('/public/contact.html', {root:__dirname})
});
app.get('/services',(req, res)=>{
    res.sendFile('public/services.html', {root:__dirname})
});

app.use('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./public/404.html'))
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server started on port${PORT}`));




