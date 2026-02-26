const fs = require('fs');
console.log("CWD:", process.cwd());

try {
    require("dotenv");
    console.log("dotenv: OK");
} catch (e) {
    console.log("dotenv: FAIL - " + e.message);
}

try {
    require("@playwright/test");
    console.log("@playwright/test: OK");
} catch (e) {
    console.log("@playwright/test: FAIL - " + e.message);
}

try {
    require("./page/LoginPage");
    console.log("./page/LoginPage: OK");
} catch (e) {
    console.log("./page/LoginPage: FAIL - " + e.message);
}
