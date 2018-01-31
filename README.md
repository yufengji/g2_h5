### 本项目将本公司的移动端官网改为vue版本

注：该项目在本地开发时通过抓取线上的API接口进行开发

开发过程中线上api通过代理进行数据请求

### 项目运行：
+ npm install
+ npm run dev

### 技术栈：
vue2.0+vuex+axios+router(vue全家桶)+es2015(es6)

### 代理设置
webpack.dev.conf.js里面添加

const axios = require('axios')

const express = require('express')

const app = express()

var apiRoutes = express.Router()

app.use('/api',apiRoutes)

devServer:{

	before(app){
		
		app.get('/api/getBanner',(req,res) => {
        
        var url = 'http://***/api/IndexAction/banner'
        
        axios.get(url,params: req.query}).then((response) => {
          
          res.json(response.data)
        
        }).catch((e) => {
          
          console.log(e)
        
        })
      
      })
	
	}
}

api目录下的banner.js

import axios from 'axios'

export function getBanner(type,limit){
  
	const url = 'api/getBanner'
  
	const data = Object.assign({
    
		type:type,
    
    	limit:limit
  
  	})
  
  	return axios.get(url,{
    
    	params:data
  
  	}).then((res) => {
    
    	return Promise.resolve(res.data)
  
  	})

}

### 项目目录：
![](https://github.com/yufengji/g2_h5/blob/master/project-pic/ml.jpg?raw=true)

### 项目截图
![](https://github.com/yufengji/g2_h5/blob/master/project-pic/01.jpg?raw=true)
![](https://github.com/yufengji/g2_h5/blob/master/project-pic/02.jpg?raw=true)
![](https://github.com/yufengji/g2_h5/blob/master/project-pic/03.jpg?raw=true)
![](https://github.com/yufengji/g2_h5/blob/master/project-pic/04.jpg?raw=true)
![](https://github.com/yufengji/g2_h5/blob/master/project-pic/05.jpg?raw=true)
![](https://github.com/yufengji/g2_h5/blob/master/project-pic/06.jpg?raw=true)
![](https://github.com/yufengji/g2_h5/blob/master/project-pic/07.jpg?raw=true)
![](https://github.com/yufengji/g2_h5/blob/master/project-pic/08.jpg?raw=true)
![](https://github.com/yufengji/g2_h5/blob/master/project-pic/09.jpg?raw=true)

