(function initSite() {
  const version = document.getElementById("app-version");
  const meta = document.getElementById("build-meta");
  const status = document.getElementById("status");

  document.title = `DevOps Training | Version ${version.textContent}`;
  status.setAttribute("data-state", "success");

  fetch("build-info.json")
    .then((response) => (response.ok ? response.json() : null))
    .then((info) => {
      if (!info) {
        meta.textContent = "Served from Amazon S3";
        return;
      }
      const builtAt = info.builtAt ? new Date(info.builtAt).toUTCString() : "unknown";
      meta.textContent = `Build ${info.version} packaged ${builtAt}`;
    })
    .catch(() => {
      meta.textContent = "Served from Amazon S3";
    });
})();
