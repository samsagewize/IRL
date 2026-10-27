# IRL

IRL helps people at the same coffee shop turn a digital invitation into a welcome real-world conversation.

**Status: pilot setup in progress; email sign-in is not active.** Fictional profiles and browser-only invitations have been removed. The current page describes the setup status. No seeded users, simulated messages, or localStorage authentication.

## Collaboration

Public repository: https://github.com/samsagewize/IRL

Rowinator has been invited with write access. Use feature branches and pull requests. Never commit secrets, real tester information, email addresses, or location records.

## Pilot flow

1. Sign in with a verified email using managed authentication.
2. Create a first-name profile, interests, and a short introduction.
3. Join the participating café through its link or QR code and opt in for a limited time.
4. Discover only other currently checked-in people at that café, excluding blocks in both directions.
5. Send a short, rate-limited invitation. The recipient can accept or decline.
6. Only after mutual acceptance, agree to meet in the shared public space.
7. Leave, withdraw an invitation, block a person, or report a problem at any time.

A static QR code selects a café; it does not prove physical presence. Consider rotating or staff-provided venue codes before wider access. No Bluetooth or GPS is required for the initial pilot.

## Activation blockers

Vercel project `prj_AZmsjutBRfbuxYu0WW2De65MtnDh`, team `samsagewizes-projects`.

The owner must review and accept provider terms before provisioning can finish:

- Clerk: https://vercel.com/samsagewizes-projects/~/integrations/accept-terms/clerk?source=cli
- Neon: https://vercel.com/samsagewizes-projects/~/integrations/accept-terms/neon?source=cli

After acceptance, provision each integration exactly once for this project. Review plans and costs before accepting paid resources. Keep all secret keys and database URLs server-side and out of source control. The pilot owner must provide the real café name/address and a report-review contact.

## Implementation after provisioning

Use Clerk for verified email and sessions and Neon for shared records. Verify sessions and permissions on every endpoint. Enforce expiry using server time and same-venue membership for discovery and invitations. Never expose emails or location histories through discovery. Empty cafés stay empty.

Persist profiles, venues, expiring check-ins, invitations with atomic pending/accepted/declined/withdrawn transitions, bidirectional blocks, reports, and invitation limits. Blocking must remove discovery and invitation access in both directions. Accepting an invitation requires current venue presence for both people. Provide deletion/retention controls and an actual report-review process before collecting pilot data.

Before opening, verify with two real accounts: email verification, same-venue discovery, cross-venue isolation, expiry, checkout, accept/decline/withdrawal, bidirectional blocking, rate limits, and report receipt. Do not claim readiness until deployed services pass these checks.

## Local preview

Run `npm start` with Node.js, then open http://127.0.0.1:3000. No installation is required for the current setup-status page. Run `npm run check` for server syntax verification. Vercel currently uses the Other preset and output directory `.`; configure the application framework after provisioning backend services.
