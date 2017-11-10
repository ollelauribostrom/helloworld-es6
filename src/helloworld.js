import greetings from './lib/greetings.json';

function getUnknownLanguageMessage(language) {
  return `Sorry, I don´t know how to say "Hello World" in ${language} yet.`;
}

export default function (language = 'english') {
  if (typeof language !== 'string') {
    throw new TypeError('Argument language must be of type string');
  }

  return greetings[language.toLowerCase()] || getUnknownLanguageMessage(language);
}
