import { WebseniorPage } from './app.po';

describe('websenior App', function() {
  let page: WebseniorPage;

  beforeEach(() => {
    page = new WebseniorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
