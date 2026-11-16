# TutorBit QA build

A static GitHub Pages QA build for provider-specific education matching and session management.

## Run

Because native ES modules and JSON-style browser storage require HTTP, do not double-click `index.html`.

- GitHub Pages: publish the repository root.
- Local preview on Linux Mint: `python3 -m http.server 8080`, then open `http://localhost:8080`.

No Node.js, npm, Vite, Docker, MySQL, or AWS service is required for this QA stage.

## QA data

- Seed data is defined in `assets/js/fixtures.js`.
- Working state is stored per browser in IndexedDB (`tutorbit-qa`).
- Use QA tools to reset data or export diagnostics.
- Do not upload real identity, qualification, or organisation documents.

## AWS migration boundary

Replace the mock repository and auth adapter with:

- Amazon Cognito authentication
- Express API on EC2
- Amazon RDS for MySQL
- Private Amazon S3 uploads
- Server-side role and tenant checks

The page structure, custom CSS, translations, validation rules, and service calls can remain.

## GitHub Pages limitation

This build is not secure authentication and not shared persistence. Each tester has isolated browser data. It is intended for workflow, responsive, accessibility, and QA testing before backend integration.

## Complete organisation QA journey

New testers can create a browser-local QA account and submit an organisation application. Use verification code `123456` and a dummy password that is not used anywhere else. The Platform Administrator profile can review the application, save an internal note, request more information, approve it, or reject it. After approval, sign back in with the new QA account to test organisation onboarding, matching-link sharing, learner requests, and placement.
