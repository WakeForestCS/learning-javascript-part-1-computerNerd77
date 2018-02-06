
const express = require('express'); 
const app = express(); 

app.listen(3000, function(){
	console.log('listening on 3000')
})

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/myPage.html')
}) 

app.get('/playPage', (req, res)=>{
	res.sendFile(__dirname + '/playPage.html')
}) 