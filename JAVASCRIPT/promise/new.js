const promise1=new Promise((resolve,reject)=>resolve('sucess'))
const promise2=new Promise((resolve,reject)=>reject('rejected'))

promises=Promise.all([promise1,promise2])
promises.then((res)=>console.log(res))
.catch((err)=>console.log(err))