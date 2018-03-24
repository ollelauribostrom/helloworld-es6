import helloWorld from '../src/helloworld';

describe('{unit}: Testing helloWorld', () => {
  it('should return correct greeting in English', () => {
    expect(helloWorld('English')).toEqual('Hello World');
  });
  it('should return correct greeting in Spanish', () => {
    expect(helloWorld('Spanish')).toEqual('Hola Mundo');
  });
  it('should return correct greeting in French', () => {
    expect(helloWorld('French')).toEqual('Bonjour le monde');
  });
  it('should return correct greeting in Swedish', () => {
    expect(helloWorld('Swedish')).toEqual('Hej världen');
  });
  it('should return correct greeting in Chinese', () => {
    expect(helloWorld('Chinese')).toEqual('你好，世界');
  });
  it('should return correct greeting in Turkish', () => {
    expect(helloWorld('Turkish')).toEqual('Merhaba Dünya');
  });
  it('should default to English', () => {
    expect(helloWorld()).toEqual('Hello World');
  });
  it('should default be case insensitive', () => {
    expect(helloWorld('swedish')).toEqual('Hej världen');
  });
  it('should throw a TypeError if argument is not a string', () => {
    expect(() => helloWorld({})).toThrow(TypeError);
  });
  it('should handle handle unknown languages by returning message', () => {
    expect(helloWorld('Parseltongue')).toEqual('Sorry, I don´t know how to say "Hello World" in Parseltongue yet.');
  });
});
