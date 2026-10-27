# Common Ground

An opt-in social platform concept for people sharing coffee shops and public gathering places. Turn digital discovery into a welcome real-life hello.

## Try the prototype

Run `npm start` with Node.js, then open http://127.0.0.1:3000. No installation or build is required. On Vercel use the Other framework preset, no build command, and output directory `.`.

1. Pick a sample café and check in for 60 minutes.
2. Set your availability: a hello, coworking, or a coffee break.
3. Filter fictional people by mood or search shared interests.
4. Say hello with an editable icebreaker.
5. View or withdraw invitations in My connections. Hide profiles or check out at any time.

This is a browser-local interaction prototype, not a live social network. All people and cafés are fictional. There is no GPS tracking, account service, real message delivery, or simulated acceptance. Data is stored in localStorage on the current browser and can be cleared with Reset demo.

## Product principles

- Explicit, time-limited opt-in presence at a chosen venue. No automatic background location broadcasts.
- Interest-led discovery rather than appearance-led swiping.
- Invitations before approaches, mutual acceptance before meeting instructions, and no penalty for silence or declining.
- Meet in public shared spaces. Never show precise seats or private location history.

## Roadmap to a live pilot

Start with one participating café and consenting adult testers. Add authentication, a venue directory with owner-approved QR check-ins, server-enforced presence expiry, private profiles, and authenticated invitation delivery. Use a database for users, venues, check-ins, invitations, blocks, and reports. Enforce venue membership and visibility permissions on every read and write. Add explicit accept/decline, invitation limits, blocking/reporting, human moderation, retention/deletion controls, and abuse testing before opening discovery to the public. Only show venue-level presence to other checked-in users. Do not expose global browsing or precise coordinates.

The main validation question: does a mutual invitation make an in-person hello feel more welcome? Measure opt-in participation, mutually accepted introductions, comfort feedback, and unwanted-contact reports, with consent.

## Source

`index.html` is the page, `style.css` defines responsive styling, and `app.js` contains sample data and local interaction state. `server.mjs` provides a local preview. No runtime dependencies, credentials, analytics, or backend services are included. Google Fonts is optional; system fonts are fallback.

Run `npm run check` for JavaScript syntax verification.
