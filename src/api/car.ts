import {getApp} from '@/tcb';
import { notification } from 'ant-design-vue';
const app = getApp();

export function get(model:string) :any {
  return new Promise<{}>(async(resolve,reject)=>{
    try{
      const db = app.database();
      const condition = model?{model:model}:{};
      const {data} = await db.collection('all_cars').where(condition).get()
      resolve(data);
    }catch(e){
      notification.error({ message: '服务器异常',description:e.message })
      reject()
    }
  })
}

export function update(param:any) :any {
  return new Promise<{}>(async(resolve,reject)=>{
    try{
      const db = app.database();
      let res = {};
      if(!param._id){
        res = await db.collection('all_cars').add({...param})
      }else{
        res = await db.collection('all_cars').doc(param._id).update({
          model:param.model,
          brand:param.brand
        })
      }
      resolve(res)
    }catch(e){
      notification.error({ message: '服务器异常',description:e.message })
      reject()
    }
  })
}

export function remove(_id:string) :any {
  return new Promise<{}>(async(resolve,reject)=>{
    try{
      const db = app.database();
      const res = await db.collection('all_cars').doc(_id).remove()
      resolve(res);
    }catch(e){
      notification.error({ message: '服务器异常',description:e.message })
      reject()
    }
  })
}
