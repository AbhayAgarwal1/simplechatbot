var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
 var flag =1;
 var abc;

app.get('/', function(req, res){
	

res.sendFile(__dirname + '/index.html')
});

var PythonShell = require('python-shell');


io.on('connection', function(socket){
	
    socket.on('chat message', function(msg){
       
        if (flag==0){
            console.log("abhay");
    	var options = {

    mode: 'text',
    args: [abc[1],msg]
};
}
    else{
        console.log("ab")
    var options = {
        mode:'text',
        args:["hello",msg]
    }}
    flag= 0;

	PythonShell.run('pyth.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log(' %j', msg);
    abc=[results[0],msg];
    console.log("twoek");
    io.emit('chat message', abc[1]);
    io.emit('bot',abc[0])
  });
});
  
});



    

http.listen(5000, function(){
  console.log('listening on *:3000');
});





