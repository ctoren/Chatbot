// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()
    if (lowerCaseMessage.includes("hello")) {
        this.actionProvider .greet()
    }  
    if (lowerCaseMessage.includes("comedy")) {
      this.actionProvider .handleComedyList();
    }
    if (lowerCaseMessage.includes("drama")) {
      this.actionProvider .handleDramaList();
    }
    if (lowerCaseMessage.includes("action")) {
      this.actionProvider .handleActionList();
    }
    if (lowerCaseMessage.includes("scifi")) {
      this.actionProvider .handleScifiList();
    }
    if (lowerCaseMessage.includes("horror")) {
      this.actionProvider .handleHorrorList();
    }
    }
  }
  
  export default MessageParser;
  
