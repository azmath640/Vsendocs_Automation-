class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder('Enter your username');
    this.password = page.getByPlaceholder('Enter your password');
    this.loginButton = page.getByRole('button', { name: 'Sign in' });
  }
  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}

module.exports = LoginPage;
