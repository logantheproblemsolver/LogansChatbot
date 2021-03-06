class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic! Here are the following resouirces for you on Javascript: ",
      {
        widget: "javascriptLinks"
      }
    )

    this.updateChatbotState(message)
  };

  greet() {
    const greetingMessage = this.createChatBotMessage("Hey pal")
    this.updateChatbotState(greetingMessage)
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState, 
      messages: [ ...prevState.messages, message]
    }))
  }
}

export default ActionProvider;