const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('about:addons');

        const elem = $('richlistitem[name="Extensions"]');
        elem.click();

        browser.pause(99999);
    });
})
