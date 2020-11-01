import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.header-title')).getText() as Promise<string>;
  }

  getItemCount(): Promise<number> {
    return element.all(by.tagName('app-item')).count() as Promise<number>;
  }

  getFirstItemText(): Promise<string> {
    return element.all(by.tagName('app-item')).first().getText() as Promise<string>;
  }

  getSecondItemText(): Promise<string> {
    return element.all(by.tagName('app-item')).get(1).getText() as Promise<string>;
  }

  getSecondItemElementPosition(): Promise<object> {
    return element.all(by.tagName('app-item')).get(1).getLocation() as Promise<object>;
  }

}
