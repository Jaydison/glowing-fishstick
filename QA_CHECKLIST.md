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
