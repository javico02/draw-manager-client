import { PrizesModule } from './prizes.module';

describe('PrizesModule', () => {
  let prizesModule: PrizesModule;

  beforeEach(() => {
    prizesModule = new PrizesModule();
  });

  it('should create an instance', () => {
    expect(prizesModule).toBeTruthy();
  });
});
