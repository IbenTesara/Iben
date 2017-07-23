import { IbenPage } from './app.po';

describe('iben App', () => {
  let page: IbenPage;

  beforeEach(() => {
    page = new IbenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
