### 本项目将本公司的移动端官网改为vue版本

注：该项目在本地开发时通过抓取线上的API接口进行开发

开发过程中的跨域问题通过jsonp进行解决

### 项目运行：
+ npm install
+ npm run dev

### 技术栈：
vue2.0+vuex+axios+router(vue全家桶)+es2015(es6)

### jsonp跨域请求

import jsonp from '@/common/js/jsonp.js'

export function getList() {

  const url = 'http://***/api/list'
  
  const data = Object.assign({}, commonParams, {
   
    platform: 'h5',
    
    limit:10,

    page:1,
    
    format: 'jsonp'
  
  })

  const options = {
  	
  	param: 'jsonpCallback'
  
  }
  
  return jsonp(url, data, options)

}

#### jsonp.js的代码

import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  
  return new Promise((resolve, reject) => {
    
    originJSONP(url,option, (err, data) => {
      
      if(!err) {
        
        resolve(data)
      
      }else {
        
        reject(err)
      
      }
    
    })
  
  })

}

function param(data) {
  
  let url
  
  for(var k in data) {
    
    let value = data[k] !== undefined ? data[k] : ''
    
    url += `&${k}=${encodeURIComponent(value)}`
  
  }
  
  return url ? url.substring(1) : ''

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

