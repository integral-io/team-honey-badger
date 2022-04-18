import { answer } from './game';

describe('bowling function', () => {
  it('one strike returns 10 points', () => {
    expect(answer("X")).toEqual(10);
  });
  
  it('two strikes returns 30 points', () => {
    expect(answer("X|X")).toEqual(30);
  });
  
  it('worst game ever', () => {
    expect(answer("--|--|--|--|--|--|--|--|--|--||")).toEqual(0);
  });
  
  it("adds pins knocked down", () => {
    expect(answer("81|15|")).toEqual(15);
  });
  
});
