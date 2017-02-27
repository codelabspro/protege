import { ProtegePage } from './app.po';

describe('protege App', function() {
  let page: ProtegePage;

  beforeEach(() => {
    page = new ProtegePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
