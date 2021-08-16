var http = require('http');
var fs = require("fs");
var qs = require("querystring");


var MongoClient = require("mongodb").MongoClient;
var dbUrl="mongodb://localhost:27017/mydb"
//var dbUrl = "mongodb://localhost:32768/";


//create a server object:
http.createServer(function (req, res) {
    
    if(req.url === "/apple"){
		res.write('Hello World!'); //write a response to the client
        res.end(); //end the response
	}else if(req.url === "/orange"){
		sendFileContent(res, "webjquery.html", "text/html");
	}
	
	else if(req.url === "/login"){
		console.log("affdsafdjs")
		sendFileContent(res, "login.html", "text/html");
		
		
	}
		else if(req.url === "/register"){
		console.log("affdsafdjs")
		sendFileContent(res, "register.html", "text/html");
		
		
	}
	
	
	
	else if(req.url === "/aaa"){
		console.log("register page")
		sendFileContent(res, "register.html", "text/html");
	}else if(req.url === "/check_reg"){
		
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				//apple=777&orange=iiii
				
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				user=data['User Name'];
				pwd=data['Register Password'];
				console.log(user);
				console.log(pwd);
				console.log("Register success");
				//res.end("dat="+ user + pwd);
				
				var query ={"Login ID": user,"Password":pwd};
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("123");
							dbo.collection("123_collection").insertOne(query, function(err, res) {
								if (err) throw err;
								console.log("Item inserted");
								db.close();
							});
						});
			       });
			});
		}else{
			     res.end("abc");
			}		
	}
	
		else if(req.url === "/bbb"){
		console.log("update name page")
		sendFileContent(res, "update name.html", "text/html");
	}else if(req.url === "/check_upd"){
		
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				//apple=777&orange=iiii
				
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				ouser=data['Old User Name'];
				nuser=data['New User Name'];
				
				console.log(ouser);
				console.log(nuser);
				console.log("Update success");
				
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("123");
							dbo.collection("123_collection").update({"Login ID": ouser}, {$set: {"Login ID": nuser}}, function(err, res) {
								if (err) throw err;
								console.log("Item updated");
								db.close();
							});
						});
			       });
			});
		}else{
			     res.end("abc");
		}		
	}
	
			else if(req.url === "/eee"){
		console.log("update password page")
		sendFileContent(res, "update password.html", "text/html");
	}else if(req.url === "/check_upp"){
		
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				//apple=777&orange=iiii
				
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				ouser=data['Old User Name'];
				nuser=data['New User Name'];
				
				console.log(ouser);
				console.log(nuser);
				console.log("Update success");
				
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("123");
							dbo.collection("123_collection").update({"Password": ouser}, {$set: {"Password": nuser}}, function(err, res) {
								if (err) throw err;
								console.log("Item updated");
								db.close();
							});
						});
			       });
			});
		}else{
			     res.end("abc");
		}		
	}
	
			else if(req.url === "/fff"){
		console.log("delete page")
		sendFileContent(res, "delete.html", "text/html");
	}else if(req.url === "/check_del"){
		
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				//apple=777&orange=iiii
				
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				ouser=data['User Name'];
				
				console.log(ouser);
				console.log("Update success");
				
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("123");
							dbo.collection("123_collection").deleteOne({"Login ID": ouser}, function(err, res) {
								if (err) throw err;
								console.log("Item deleted");
								db.close();
							});
						});
			       });
			});
		}else{
			     res.end("abc");
		}		
	}
	
	else if(req.url === "/ggg"){
		console.log("Search  page")
		sendFileContent(res, "pokemon.html", "text/html");
	}
	
		else if(req.url === "/ccc"){
		console.log("login page")
		sendFileContent(res, "login.html", "text/html");
		}else if(req.url === "/check_log"){
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				//apple=777&orange=iiii
				
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				user=data['User Name'];
				pwd=data['Password'];
				console.log(user);
				console.log(pwd);
				console.log("Login success");
				//res.end("dat="+ user + pwd);
				
				var query ={"Login ID": user,"Password":pwd};
				//var myobj = {"Login ID":user,"Password":pwd};
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
						var dbo = db.db("123");
						var query={"Login ID": user,"Password":pwd};
						console.log(query);
						dbo.collection("123_collection").find(query).toArray(function(err, result) {
							if (err) throw err;
							console.log("comment find");
							console.log(JSON.stringify(result));
							db.close();
							if(result.length>0){
								return res.end("Success");
							} else{
							return res.end("Not success");
						};
						});
					});
			    });
			});
		}else{
			     return res.end("Login find");
			}		
	}
	
	else if(req.url === "/ddd"){
		console.log("favorites list")
		sendFileContent(res, "favorites list.html", "text/html");
	}else if(req.url === "/check_fav"){
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				//apple=777&orange=iiii
				
				
			return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				//user=data['User Name'];
				//pwd=data['Password'];
				F1=data['F1'];
				F2=data['F2'];
				F3=data['F3'];
				F4=data['F4'];
				F5=data['F5'];
				console.log(F1);
				console.log(F2);
				console.log(F3);
				console.log(F4);
				console.log(F5);
				console.log("Favorites list success");
				//res.end("dat="+ user + pwd);
				
				var query ={"Fruit": F1,"Salad":F2,"Pizza":F3,"Cheeseburager":F4,"Ice Cream":F5};
				//var myobj = {"Login ID":user,"Password":pwd};
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("123");
							//var myobj = stringMsg;
							dbo.collection("123_collection").insertOne(query, function(err, res) {
								if (err) throw err;
								console.log("1 document inserted");
								//res.end("Account created!!");
								db.close();
							});
						});
			       });
			});
		}else{
			     res.end("abc");
			}		
	}
	

else if(/^\/[a-zA-Z0-9\/-/]*.js$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/javascript");
}else if(/^\/[a-zA-Z0-9\/-/]*.bundle.min.js$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/javascript");
}else if(/^\/[a-zA-Z0-9\/-/]*.css$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/css");
}else if(/^\/[a-zA-Z0-9\/-]*.min.css$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/css");
}else if(/^\/[a-zA-Z0-9\/-]*.jpg$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "image/jpg");
}else if(/^\/[a-zA-Z0-9-._\/]*.min.js$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/javascript");
}else if(/^\/[a-zA-Z0-9-]*.min.css.map$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/map");
}else if(/^\/[a-zA-Z0-9\/-/]*.min.js.map$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/map");
}else if(/^\/[a-zA-Z0-9\/-/]*.css.map$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/map");
}else if(/^\/[a-zA-Z0-9\/-/]*.png$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "image/png");
}else if(/^\/[a-zA-Z0-9\/-/]*.ico$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/ico");
}else if(/^\/[a-zA-Z0-9\/-/?]*.ttf$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/font");
}else if(/^\/[a-zA-Z0-9\/-/?]*.woff$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/woff");
}else if(/^\/[a-zA-Z0-9\/-/?]*.woff2$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/woff2");
}else{
console.log("Requested URL is: " + req.url);
res.end();
}
}).listen(9998); //the server object listens on port 8080


function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}