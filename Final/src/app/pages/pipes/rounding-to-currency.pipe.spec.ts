import { RoundingToCurrencyPipe } from './rounding-to-currency.pipe';

describe('RoundingPipePipe', () => {

  const translateServiceMock = jasmine.createSpyObj('TranslateService', ['use']);
  translateServiceMock.currentLang = 'en';


  it('create an instance', () => {
    const pipe = new RoundingToCurrencyPipe(translateServiceMock);
    expect(pipe).toBeTruthy();
  });

  it('rounds correctly', () => {

    // Arrange
    const pipe = new RoundingToCurrencyPipe(translateServiceMock);

    // Act
    const result = pipe.transform(13.6784854);

    expect(result).toBe('13.68€');
  });
});
