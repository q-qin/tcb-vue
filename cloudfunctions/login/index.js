exports.main = async (event, context) => {
  if(event.username !='admin' || event.password != 'admin'){
    return {
      code:100,
      data:{},
      msg:'用户名密码错误',
    }
  }

  // todo
  // your code here
  return {
    code: 200,
    data:`token-${event.username}`,
    msg:'操作成功'
  };
};
