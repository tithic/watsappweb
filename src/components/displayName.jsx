import React, {Component} from 'react';
import contact from '../json/data.json';

class DisplayName extends Component {
    constructor() {
        super()
        this.state = {
           messages: contact,
           chatPerson:'',
           clicked:false,
           mes:''
        }
      }
    showChatHistory(e){
        console.log("here")

        /*this.setState({
            chatPerson:e.target.innerText,
            clicked:true
        })*/
        var msg
        if(e.target.innerText=='John'){
           msg= this.state.messages.DUMMY_DATA_john.map(message => {
                return (
                 <li key={message.id} className="message">
                   <div>
                     {message.senderId}
                   </div>
                   <div>
                     {message.text}
                   </div>
                 </li>
               )
        })
    }
    else if(e.target.innerText=='Anna'){
        msg=  this.state.messages.DUMMY_DATA_Anna.map(message => {
            return (
             <li key={message.id} className="message">
               <div>
                 {message.senderId}
               </div>
               <div>
                 {message.text}
               </div>
             </li>
           )
    })
}
else if(e.target.innerText=='Peter'){
    msg= this.state.messages.DUMMY_DATA_Peter.map(message => {
        return (
         <li key={message.id} className="message">
           <div>
             {message.senderId}
           </div>
           <div>
             {message.text}
           </div>
         </li>
       )
})
} else if(e.target.innerText=='Mary'){
    msg=  this.state.messages.DUMMY_DATA_Mary.map(message => {
        return (
         <li key={message.id} className="message">
           <div>
             {message.senderId}
           </div>
           <div>
             {message.text}
           </div>
         </li>
       )
})
}
else {
   msg=""
}
this.setState({
    mes:msg
})
    }
    render () {
        const elem = contact.contacts;
       // {this.state.clicked==true?<Messagecenter messages={this.state.messages} name={this.state.chatPerson}/>:""} 
      return (
        <>
       <h1>WhatsApp Web</h1>
        <ul className="message-list">
            {elem.map(items=>
            <li><div onClick={(e)=>this.showChatHistory(e)}>{items.firstName}</div></li>
            )}
     </ul> 
     {this.state.mes}
        </>
           ) 
      }
};

export default DisplayName;