import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log('Hello ' + name);
}

function goodbyeHandler(name) {
  console.log('Goodbye ' + name);
}
//Register event Listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//Emit events
myEmitter.emit('greet', 'john');
myEmitter.emit('goodbye', 'john');

//Error events
myEmitter.on('error', (err) => {
  console.log('An Error Occured', err);
});

//Simulate Error
myEmitter.emit('error', new Error('Something Went Wrong'));
