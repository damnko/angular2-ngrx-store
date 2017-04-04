import { A036NgrxStorePage } from './app.po';

describe('a036-ngrx-store App', function() {
  let page: A036NgrxStorePage;

  beforeEach(() => {
    page = new A036NgrxStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
