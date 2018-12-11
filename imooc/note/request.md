request.js
request 文件暴露了一个对象，对象里面定义了很多的属性和方法

属性（都有自己的 get 和 set 方法）
header:this.req.header
headers:this.req.headers
url:this.req.url
origin:`${this.protocol}://${this.host}`
...

注：定义了请求中需要的属性和方法