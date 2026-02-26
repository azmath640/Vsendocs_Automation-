class DashboardPage {
    constructor(page) {

        this.page = page;

        this.dashboard = page.getByRole('link', { name: 'Dashboard' });
        this.dropDocButton = page.getByRole('button', { name: 'Drop Doc' });

    }
    async navigateToDropDoc() {
        await this.dropDocButton.click();
    }
    async navigateToDashboard() {
        await this.dashboard.click();
    }
}

module.exports = DashboardPage;