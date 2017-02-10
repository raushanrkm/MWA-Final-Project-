import { FinalProjectAngularPage } from './app.po';

describe('final-project-angular App', function() {
  let page: FinalProjectAngularPage;

  beforeEach(() => {
    page = new FinalProjectAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
