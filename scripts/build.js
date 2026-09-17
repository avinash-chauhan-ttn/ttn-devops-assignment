const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const versionMatch = html.match(/id="app-version">([^<]+)</);
const version = versionMatch ? versionMatch[1].trim() : "unknown";

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "css"), { recursive: true });
fs.mkdirSync(path.join(dist, "js"), { recursive: true });

fs.copyFileSync(path.join(root, "index.html"), path.join(dist, "index.html"));
fs.copyFileSync(path.join(root, "css/styles.css"), path.join(dist, "css/styles.css"));
fs.copyFileSync(path.join(root, "js/main.js"), path.join(dist, "js/main.js"));

const buildInfo = {
  version,
  builtAt: new Date().toISOString(),
  source: "GitHub Actions",
};

fs.writeFileSync(path.join(dist, "build-info.json"), `${JSON.stringify(buildInfo, null, 2)}\n`);
console.log(`Packaged website version ${version} into dist/`);
