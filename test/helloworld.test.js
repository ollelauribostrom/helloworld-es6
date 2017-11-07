import chai, { expect } from 'chai';
import helloWorld from '../src/helloworld';

describe('{unit}: Testing helloWorld', () => {
  it('should return correct greeting in English', () => {
    expect(helloWorld('English')).to.equal('Hello World');
  });
  it('should return correct greeting in Spanish', () => {
    expect(helloWorld('Spanish')).to.equal('Hola Mundo');
  });
  it('should return correct greeting in French', () => {
    expect(helloWorld('French')).to.equal('Bonjour le monde');
  });
  it('should return correct greeting in Swedish', () => {
    expect(helloWorld('Swedish')).to.equal('Hej världen');
  });
  it('should return correct greeting in Chinese', () => {
    expect(helloWorld('Chinese')).to.equal('你好，世界');
  });
  it('should return correct greeting in Turkish', () => {
    expect(helloWorld('Turkish')).to.equal('Merhaba Dünya');
  });
  it('should default to English', () => {
    expect(helloWorld()).to.equal('Hello World');
  });
  it('should default be case insensitive', () => {
    expect(helloWorld('swedish')).to.equal('Hej världen');
  });
  it('should throw a TypeError if argument is not a string', () => {
    expect(() => helloWorld({})).to.throw(TypeError);
  });
});
