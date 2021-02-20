const cloud = require("@cloudbase/node-sdk");

exports.main = async (event, context) => {
  const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
  });

  const db = app.database();
  const data = await db.collection(event.database || 'all_goods').where({
    title: event.title || ''
  })
  .get();

  // todo
  // your code here
  return {
    code: 200,
    event,
    data:data,
    msg:'操作成功'
  };
};
