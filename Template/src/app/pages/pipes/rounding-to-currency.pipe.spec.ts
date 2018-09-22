import { RoundingToCurrencyPipe } from './rounding-to-currency.pipe';

describe('RoundingPipePipe', () => {
  it('create an instance', () => {
    const pipe = new RoundingToCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
  it('rounds correctly', () => {

    // Arrange
    const pipe = new RoundingToCurrencyPipe();

    // Act
    const result = pipe.transform(13.6784854);

    expect(result).toBe('13.68€');
  });
});
