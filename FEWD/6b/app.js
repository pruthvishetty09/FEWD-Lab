const EventEmitter=require('events');

//create a custom EventEmitter class
class MyEmitter extends EventEmitter {}

const myEmitter=new  MyEmitter();
myEmitter.on('Userlogin',(username)=>{
    
        console.log(userloggedin:${username});
    });
myEmitter.on('fileuploaded',(filename)=>{
        console.log(fileuploaded:${filename});
    });
function stimulateUserActions() {
    const usernames= ['Alice','Bob','Charlie'];
    const randomUsername=usernames[Math.floor(Math.random() *usernames.length)];
    myEmitter.emit('Userlogin',randomUsername);
    const filenames=['file1.txt','image.png','document.pdf'];
    const randomFile=filenames[Math.floor(Math.random()*filenames.length)];
    myEmitter.emit('fileuploaded',randomFile);
}
 
stimulateUserActions();