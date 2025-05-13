const express = require('express');

const app = express();


// 编写不同请求的请求路径
app.get('/',(req,res)=>{
	res.send('<h1>你好，Hello World！</h1>');
});

app.post('/',(req,res)=>{
	res.send('<h1>你好，Hello World！</h1>');
});

// 服务的监听端口
app.listen(8080,()=>{
	console.log('服务器已启动，监听端口为：3000');
});
