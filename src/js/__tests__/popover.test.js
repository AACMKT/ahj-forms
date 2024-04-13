import { title, text } from '../popover-content';

describe('Custom popover check', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080');
  });

  it('should be button text checked', async () => {
    const button = await page.$('.button');
    await expect(button).toMatchTextContent('Toggle popover');
  });

  it('should be popover text checked', async () => {
    const popover = await page.$('.popover');
    const titleBox = await popover.$('h3');
    const textBox = await popover.$('.popover__text');
    const popTitle = await (await titleBox.getProperty('textContent')).jsonValue();
    const popText = await (await textBox.getProperty('textContent')).jsonValue();
    expect([popTitle, popText]).toEqual([title, text]);
  });

  it('should be popover positioning checked', async () => {
    const popover = await page.$('.popover');
    const button = await page.$('.button');
    const btnRect = await page.evaluate((button) => {
      const {
        top, left, width, height,
      } = button.getBoundingClientRect();
      return {
        top, left, width, height,
      };
    }, button);
    await page.click('button');
    const popoverRect = await page.evaluate((popover) => {
      const {
        top, left, width, height,
      } = popover.getBoundingClientRect();
      return {
        top, left, width, height,
      };
    }, popover);

    const left = Math.round(btnRect.left + btnRect.width / 2 - popoverRect.width / 2);
    const top = Math.round(btnRect.top - popoverRect.height - 15);

    expect([left, top]).toEqual([Math.round(popoverRect.left), Math.round(popoverRect.top)]);
  });
});
