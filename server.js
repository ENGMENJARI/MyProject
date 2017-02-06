var express = require('express')
var app = express();
var PORT=process.env.PORT || 4000 



app.use(express.static(__dirname+'/'));
app.listen(PORT)
	
console.log('listiening on port '+ PORT)


