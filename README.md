# TTN DevOps Assignment

Static website deployed to Amazon S3 and served publicly through CloudFront. Every push to `main` runs GitHub Actions: **Test → Build / Package → Deploy**.

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
Deploy to S3 + CloudFront
```

## Local checks

```bash
npm test
npm run build
```

## GitHub secrets

Configure these repository secrets before the first deploy:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

The workflow provisions the S3 bucket and CloudFront distribution, then publishes the packaged site. The public URL is the CloudFront domain printed in the Actions job summary.
