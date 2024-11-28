const EventEmitter=require('events')

const emitter=new EventEmitter()

emitter.on('greet',(name)=>{
    console.log(`hello ${name}`);
    

})

emitter.emit('greet','shahadiya')
emitter.emit('greet','fathima')
emitter.emit('greet','serin')

//once

emitter.once('wish',(name)=>{
    console.log(`happy birthday ${name}`);
    
})

emitter.emit('wish','alice')
emitter.emit('wish','john')//it will not trigger


//with arguments

emitter.on('add',(a,b,c)=>{
    console.log(`the sum of ${a}, ${b} and ${c} is ${a+b+c}`);
    
})
emitter.emit('add',2,4,6)



//remove listeners


const listener=()=>console.log('this listener or callback will be removed');
emitter.on('removeevent',listener)
// emitter.emit('removeevent',listener)
emitter.removeListener('removeevent',listener)
emitter.emit('removeevent')


//remove all listeners
emitter.on('test', () => console.log('Listener 1'));
emitter.on('test', () => console.log('Listener 2'));
// emitter.emit('test')
emitter.removeAllListeners('test')
