
// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc) {

    
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
    }

    
    handleComedyList = () => {
        const message = this.createChatBotMessage(
          "Awesome! I've got some recommendations for you:",
          {
            widget: "comedyLinks",
          }
        );

    
        this.updateChatbotState(message);
      };

      handleDramaList = () => {
        const message = this.createChatBotMessage(
          "Awesome! I've got some recommendations for you:",
          {
            widget: "dramaLinks",
          }
        );
        
    
        this.updateChatbotState(message);
      };

      handleActionList = () => {
        const message = this.createChatBotMessage(
          "Awesome! I've got some recommendations for you:",
          {
            widget: "actionLinks",
          }
        );
        
    
        this.updateChatbotState(message);
      };

      handleScifiList = () => {
        const message = this.createChatBotMessage(
          "Awesome! I've got some recommendations for you:",
          {
            widget: "scifiLinks",
          }
        );
        
    
        this.updateChatbotState(message);
      };

      handleHorrorList = () => {
        const message = this.createChatBotMessage(
          "Awesome! I've got some recommendations for you:",
          {
            widget: "thrillerLinks",
          }
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
