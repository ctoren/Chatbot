
// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc) {

    
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
    }

    
    handleJavascriptList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got some recommendations for you:",
          {
            widget: "javascriptLinks",
          },
          {
            widget: "dramaLinks",
          },
        );
    
        this.updateChatbotState(message);
      };
    
    updateChatbotState(message){
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }));
    } 
    
   }
 
 export default ActionProvider;