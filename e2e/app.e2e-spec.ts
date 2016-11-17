import { SerAppPage } from './app.po';

describe('ser-app App', function() {
  let page: SerAppPage;

  beforeEach(() => {
    page = new SerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
