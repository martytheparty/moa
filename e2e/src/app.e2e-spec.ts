import { AppPage } from './app.po';
import { browser, by, element, logging, protractor } from 'protractor';
import { items } from '../../src/app/data/items'; 
import { DriverProvider } from 'protractor/built/driverProviders';
import { doesNotReject } from 'assert';

describe('workspace-project App', () => {
  let page: AppPage;
  let itemList = items;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Marty The Party\'s MAP OF ANGULAR');
  });

  it('should get items count', () => {
    page.navigateTo();
    expect(page.getItemCount()).toBeGreaterThanOrEqual(117);
  });

  it('should get first item text', () => {
    // the first one does not have text because it's an image
    page.navigateTo();
    expect(page.getFirstItemText()).toEqual('');
  });

  it('should get second item text', () => {
    page.navigateTo();
    expect(page.getSecondItemText()).toEqual(itemList[1].name);
  });

  it('should set the position properly', () => {
    
    interface Position {
      x: number;
      y: number;
    } 

    page.navigateTo();
    element(by.css('#item-' + itemList[1].id));
    browser.debugger();
    

    page.getSecondItemElementPosition().then(
      (pos: Position) => {
        console.log('****************');
        expect(pos.x).toEqual(8);
        expect(pos.y).toEqual(60);
      }
    );

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
