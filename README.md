# TTN DevOps Assignment

Static website deployed to a public Amazon S3 website bucket. Every push to `main` runs GitHub Actions: **Test → Build / Package → Deploy**.

## Pipeline

```text
Code Push
    ↓
GitHub Actions
    ↓
Test
    ↓
Build / Package
    ↓
Deploy to S3
```

## Local checks

```bash
npm test
npm run build
```

## GitHub secrets

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

The workflow creates a public S3 website bucket and uploads the packaged site. The public URL is printed in the Actions job summary.
