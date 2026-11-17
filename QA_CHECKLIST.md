# TutorBit QA checklist

## Smoke test
- Landing page loads without console errors.
- Language and theme controls work.
- Every QA profile can sign in and sign out.
- Reset demo data restores the original records.

## Critical isolation checks
- Organisation Administrator sees only ABC Tuition Centre data.
- Independent Tutor sees only Daniel Mathematics Tutoring data.
- Tutor cannot approve organisation applications.
- Guardian cannot open administrator functions.
- Tutor feedback is anonymous.

## Core journeys
- Submit provider and independent-tutor applications.
- Review, request information, approve, and reject applications.
- Invite a tutor and process an organisation-code join request.
- Create a classroom and generate sessions for a date range.
- Submit a provider-specific matching request.
- Confirm that wrong mode, full class, closed class, and wrong organisation are excluded.
- Approve a placement and verify capacity changes.
- Open QR-assisted check-in and finalise attendance.
- Submit feedback for a completed session.
- Review the four operational reports.

## Viewports
Test at 320, 375, 768, 1024, and 1440 CSS pixels in Chrome, Firefox, and Microsoft Edge.

## Severity
- Blocker: application cannot load or most roles cannot proceed.
- Critical: tenant leakage, unauthorized operation, negative capacity, private-data exposure.
- Major: required workflow cannot be completed.
- Minor: validation, translation, responsive, or accessibility issue with workaround.
- Cosmetic: visual inconsistency only.

## End-to-end organisation journey
- Create a new QA account with verification code `123456`.
- Submit a tuition centre or independent tutor application.
- Sign in with the newly created browser-local account and view pending status.
- Use Platform Administrator to add a review note, request information, and approve the application.
- Return to the new Organisation Administrator account and complete the onboarding tracker.
- Copy and open the provider-specific matching link.
- Submit a learner request and approve the placement.
- Confirm the classroom capacity increases only once.
- Print the matching poster and check the QR placeholder and provider route.

## Independent tutor activation regression
- Register an independent tutor and approve the application as Platform Administrator.
- Sign in again as the new independent tutor.
- Confirm both Organisation Administrator and Tutor navigation are available.
- Create a classroom without receiving “Add an active tutor first”.
- Confirm the automatically created tutor profile is active and assigned to the classroom.

## Provider-link routing regression
- Create and approve a new organisation with slug `test`.
- Copy its matching link and confirm it uses `#provider-match/test`.
- Open the link in another tab in the same browser profile.
- Confirm the fresh organisation, not ABC Tuition Centre, is displayed.
- Confirm its recommendations contain only that organisation's tutors and classrooms.
- Change the slug to an invalid value and confirm “Organisation not found” appears instead of a fallback tenant.
- Confirm the legacy format `#provider-match?org=test` still resolves correctly.
