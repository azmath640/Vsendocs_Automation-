class DropDocPage {
    constructor(page) {
        this.page = page;
        this.docUploadCard = page.locator('input[type="file"][accept=".pdf"]');
        this.userName = page.getByLabel('Name');
        this.companyName = page.getByLabel('Company Name');
        this.addressLine1 = page.getByLabel('Address line 1');
        this.addressLine2 = page.getByLabel('Address line 2');
        this.city = page.getByLabel('City');
        this.state = page.getByLabel('State');
        this.zipCode = page.getByLabel('Zip Code');
        this.country = page.getByLabel('Country');
        this.submitButton = page.getByRole('button', { name: 'Submit' });



    }

    // Locate the hidden file input and upload the file

    async uploadDropDoc(filePath) {

        this.docUploadCard.setInputFiles(filePath)
    }

    async fillDocInfo(userName, companyName, addressLine1, addressLine2, city, state, zipCode, country) {
        await this.userName.fill(userName);
        await this.companyName.fill(companyName);
        await this.addressLine1.fill(addressLine1);
        await this.addressLine2.fill(addressLine2);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.zipCode.fill(zipCode);
        await this.country.fill(country);
        await this.submitButton.click();


    }


}
module.exports = DropDocPage;
