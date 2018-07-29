import { AppRouringModule } from './app-rouring.module';

describe('AppRouringModule', () => {
  let appRouringModule: AppRouringModule;

  beforeEach(() => {
    appRouringModule = new AppRouringModule();
  });

  it('should create an instance', () => {
    expect(appRouringModule).toBeTruthy();
  });
});
