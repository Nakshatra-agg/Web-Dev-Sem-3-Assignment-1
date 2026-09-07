const http = require('http')
const server=http.createServer((req,res)=>{
    if (req.url==='/'&& req.method ==='GET'){

        res.end('Welcome to node server')
    }else if (req.url==='/about'&& req.method ==='GET'){

        res.end('About page')
    }else if (req.url==='/contact'&& req.method ==='GET'){

        res.end('Contact page')
    }else{
        res.statusCode=404
        res.end('404 Error')
    }
})
server.listen(3000,()=>console.log('Server is running on port 3000'))