class RegistrationPage {
    constructor(page) {
        this.page = page;

        // Personal Details
        this.fullName = page.getByPlaceholder('Full Name');
        this.email = page.getByPlaceholder('Email Address');
        this.username = page.getByPlaceholder('Username');

        // Password
        this.password = page.getByPlaceholder('Password');
        this.confirmPassword = page.getByPlaceholder('Confirm Password');

        // Contact
        this.phoneNumber = page.getByPlaceholder('(555) 123-4567');

        // Address
        this.streetAddress = page.getByPlaceholder('Street Address');
        this.address2 = page.getByPlaceholder('Apartment, suite, etc. (optional)');
        this.city = page.getByPlaceholder('City');
        this.state = page.getByPlaceholder('State');
        this.zipCode = page.getByPlaceholder('Zip Code');

        // Timezone
        this.timezone = page.getByRole('combobox', { name: 'Timezone' });

        // Terms
        this.termsCheckbox = page.getByRole('checkbox', {
            name: /I agree the Terms and Conditions/i
        });

        // Submit
        this.submitButton = page.getByRole('button', { name: /sign up|register|create/i });
    }

    async register(user) {
        await this.fullName.fill(user.fullName);
        await this.email.fill(user.email);
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.confirmPassword.fill(user.confirmPassword);
        await this.phoneNumber.fill(user.phoneNumber);

        await this.streetAddress.fill(user.streetAddress);
        await this.address2.fill(user.address2);
        await this.city.fill(user.city);
        await this.state.fill(user.state);
        await this.zipCode.fill(user.zipCode);

        await this.timezone.selectOption(user.timezone);
        await this.termsCheckbox.check();

        await this.submitButton.click();
    }
}

module.exports = RegistrationPage;
