import request from './request';
import {getApp} from '@/tcb';
import { notification } from 'ant-design-vue';
const app = getApp();

// demo
export function demo (data: any) {
  return request.post('/demo', data);
}

export function login(data:any) {
  return new Promise<{}>(async(resolve,reject)=>{
    try{
      app.callFunction({
        name: 'login', data:{...data}
      }).then((result:any)=>{
        console.log(result);
        resolve(result)
      }).catch((e: any)=>{
        notification.error({ message: '服务器异常', description:e.message });
        reject()
      })
    }catch(e){
      notification.error({ message: '服务器异常',description:e.message })
      reject()
    }
  })
}
