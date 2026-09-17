const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "css/styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "js/main.js"), "utf8");

assert.match(html, /<h1>\s*DevOps Training\s*<\/h1>/, "homepage must include DevOps Training");
assert.match(html, /CI\/CD Deployment Successful/, "homepage must include CI/CD Deployment Successful");
assert.match(html, /Version:\s*<span id="app-version">\d+\.\d+<\/span>/, "homepage must include a version");
assert.match(
  html,
  /Deployed automatically using GitHub Actions/,
  "homepage must mention GitHub Actions"
);
assert.match(html, /css\/styles\.css/, "HTML must link the stylesheet");
assert.match(html, /js\/main\.js/, "HTML must load the JavaScript file");
assert.ok(css.includes("font-family"), "CSS must set a font");
assert.ok(js.includes("app-version"), "JavaScript must read the version");

console.log("All website tests passed");
