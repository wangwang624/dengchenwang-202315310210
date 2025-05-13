const express = require('express');

const app = express();

app.get('/',(req,res)=>{
	res.send('<h1>你好，Hello World！</h1>');
});

app.post('/',(req,res)=>{
	res.send('<h1>你好，Hello World！</h1>');
});

app.listen(3000,()=>{
	console.log('服务器已启动，监听端口为：3000');
});
