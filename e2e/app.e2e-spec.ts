import { ThehopFbPage } from './app.po';

describe('thehop-fb App', function() {
  let page: ThehopFbPage;

  beforeEach(() => {
    page = new ThehopFbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
