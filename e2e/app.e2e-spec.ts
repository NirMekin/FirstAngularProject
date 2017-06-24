import { HomeworkAppPage } from './app.po';

describe('homework-app App', () => {
  let page: HomeworkAppPage;

  beforeEach(() => {
    page = new HomeworkAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
