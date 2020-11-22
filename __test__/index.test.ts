import HelloWorld from '../src';

describe('test test :)', () => {
    it('should return hello world', () => {
        expect(HelloWorld()).toBe('hello world');
    });
});
