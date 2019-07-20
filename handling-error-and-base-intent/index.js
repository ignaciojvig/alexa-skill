const Alexa = require('ask-sdk-core');
const skillBuilder = Alexa.SkillBuilders.custom();

const LauncherRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
    },
    handle(handlerInput) {
        const speechText = "Welcome to Alexa Bootcamp! How can i help you?"

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse()
    }
}

const HelloIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent'
    },
    handle(handlerInput) {
        const speechText = "Nice, you prompted some command"

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse()
    }
}

const ErrorHandler = {
    canHandle(){
        return true
    },
    handle(handlerInput, error){
        console.log(`Error handled: ${error.message}`)
        const speechText = `Sorry, i can't undestand the command. 
            Please try again`
            
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse()
    }
}

exports.handler = skillBuilder
    .addRequestHandlers(LauncherRequestHandler, HelloIntentHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();
