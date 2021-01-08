//1.安装node
//2.copy node服务器代码
//3.启动服务器 ,通过cmd，进入命令行执行  node server.js
// Ctrl+C  停止  ,cls 清屏
var http = require("http"); //引入系统模块 （创建服务器）
var url = require("url"); //引入url模块相关方法。解析url 
var fs = require("fs");
//当浏览器访问8000服务器时，执行回调函数
//req request 请求对象
//res response 响应对象  
http.createServer(function(req, res) {
    if (req.url == "/favicon.ico") return; //如果是图标请求，不做后面的处理
    //设置响应头
    //,"Access-Control-Allow-Origin":"*"
    res.writeHead(200, { "Content-Type": "text/html;charset=utf8" })
    var userUrl = url.parse(req.url, true); //解析url
    // console.log(req.url); // /  /checkuser?uname=zhangsan
    // console.log(userUrl); //url对象
    // console.log(userUrl.pathname);//  /checkuser
    // console.log(userUrl.query.uname); //zhagnsan 
    //表示验证用户名是否存在
    if (userUrl.pathname == "/checkuser") {
        if (userUrl.query.uname == "zhangsan") {
            console.log(userUrl.query.funname);
            // res.end("用户名已存在")
            // var jsonstr = {ret:"zhangsan"}
            // jsonstr = JSON.stringify(jsonstr); 
            res.end(userUrl.query.funname + "('用户名已存在')")
        } else {
            // res.end("可以使用")
            res.end(userUrl.query.funname + "('可以使用')")

        }
    }
    //获取所有用户
    else if (userUrl.pathname == "/getUsers") {
        var users = [{ uname: 'zhangsan1', age: 20 }, { uname: 'zhangsan2', age: 20 }, { uname: 'zhangsan3', age: 20 }]
        res.end(userUrl.query.funname + "(" + JSON.stringify(users) + ")");
    } else if (userUrl.pathname == "/js") {
        //http://localhost:8000/js   返回
        fs.readFile('./chengshi.js', "UTF-8", function(err, data) {
            res.end(data)
        })
    } else if (userUrl.pathname == "/check") {
        //http://localhost:8000/check?uname=zhangsan
        console.log(userUrl.query);
        if (userUrl.query.uname == "zhangsan") {
            res.end(userUrl.query.callback + "('已存在')")
        } else {
            res.end(userUrl.query.callback + "('可以使用')")
        }
    } else {
        res.end('<h1>404 接口地址不存在</h1>')
    }
}).listen(8000, function() {
    console.log("输入 http://localhost:8000/ 访问");
})