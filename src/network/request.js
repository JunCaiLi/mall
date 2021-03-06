import axios from 'axios'

export function request(config){
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config =>{
    return config;
  }, err => {
    console.log(err);
  })
  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
  })
  // 3.发送真正的网络请求
  // instance就是一个promise,可以直接return，然后在调用的地方使用.then()获取结果
  return instance(config)
}
