import { Unrav0106Page } from './app.po';

describe('unrav0106 App', function() {
  let page: Unrav0106Page;

  beforeEach(() => {
    page = new Unrav0106Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
