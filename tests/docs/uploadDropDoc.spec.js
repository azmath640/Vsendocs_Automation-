const DashboardPage = require('../../page/DashboardPage');
const DropDocPage = require('../../page/docs/DropDocPage');

const { test } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard');  // Only here
});


test.describe("uploadDropDoc", () => {
    test("uploadDropDoc", async ({ page }) => {

        const dashboardPage = new DashboardPage(page);
        await dashboardPage.navigateToDropDoc();
        const dropDocPage = new DropDocPage(page);
        await dropDocPage.uploadDropDoc('//tests/fixtures/PDFTest.pdf');
        await dropDocPage.fillDocInfo("userName", "companyName", "addressLine1", "addressLine2", "city", "state", "zipCode", "country");
        await dropDocPage.submit();
    })



})