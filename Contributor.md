# Contributing to NST Shuttle Tracker App

Thank you for your interest in contributing! This guide is designed to make it fast and easy to contribute — whether you’re filing a bug, requesting a feature, or submitting code.

If something is unclear, open an issue or join the community chat (Discord) and ask — we’ll help you get started.

## Quick start (10 minutes)

1. Fork the repository on GitHub.
2. Clone your fork and install dependencies:

```bash
git clone https://github.com/<your-username>/Shuttle-Tracker-App.git
cd Shuttle-Tracker-App
npm install
```

3. Create a feature branch:

```bash
git checkout -b feature/short-description
```

4. Run the app locally (Expo is used in this project):

```bash
npx expo start
```

5. Make your changes, add tests if relevant, then commit and push:

```bash
git add -A
git commit -m "feature: short description of change"
git push origin feature/short-description
```

6. Open a Pull Request (PR) from your branch to `main`.

## Filing a great issue

Before opening an issue, search existing issues (open + closed). If none match, use the template below.

Issue template (copy into the issue body):

```
Title: [bug|feature] short description

Describe the problem or feature request:

Steps to reproduce (for bugs):
1. ...
2. ...

Expected behavior:

Actual behavior:

Environment:
- App version: (from package.json or app)
- Platform: iOS / Android / Web
- Node / npm / expo versions:

Screenshots or logs:
[attach if available]

Additional context:

```

A clear issue speeds up triage and fixes. Add minimal repro steps and a screenshot when possible.

## Opening a Pull Request

PR checklist (we use this to speed reviews):

- [ ] Is the PR targeted at `main`? If your change is large, open a draft PR and discuss first.
- [ ] Did you run the app locally and verify the change works?
- [ ] Are there tests for new behavior? (unit / integration)
- [ ] Are changes documented (if they change public behavior)?
- [ ] Commit messages are short and prefixed (feat|fix|chore|docs|test):
  - Examples: `feature: add signup screen`, `fix(login): prevent crash when ...`
- [ ] Include screenshots or GIFs for UI changes.

What to include in the PR description:

- A short summary of what the PR does.
- The motivation or problem it solves.
- How to test the change locally (commands or steps).
- Any edge-cases or follow-up tasks.

## Branching & commit conventions

- Branch names: `feature/...`, `fix/...`, `chore/...`, `docs/...`, `test/...`.
- Keep PRs focused and small — one logical change per PR.
- Commit message style: `type(scope?): short summary` (scope is optional).

## Running the project and tests

This project uses Expo. Common commands:

```bash
npm install        # install deps
npx expo start     # start Metro / Expo dev server
npm run android    # (if configured) run on Android emulator/device
npm run ios        # (if configured) run on iOS simulator/device
npm test           # run tests (if present)
```

If you run into dependency issues on macOS, try removing node_modules and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Code style and tests

- Follow existing code patterns and formatting. If the project uses ESLint, Prettier or TypeScript, lint locally before opening a PR.
- Add tests for bug fixes and new features where practical. Keep tests deterministic and fast.

## Reviewing & merging

- Maintainers will review and request changes if necessary. Please respond to review comments promptly.
- Small cosmetic changes may be merged quickly. Larger features may need additional design or QA.

## Licensing & Code of Conduct

By contributing you agree to license your contributions under the project MIT license: see `LICENSE.md`.

This project follows the `CODE_OF_CONDUCT.md`. Be respectful and collaborative.

## Community & support

- Join our Discord: [Discord Invite Link] — mention "help-wanted" for guidance.
- File issues for questions if the chat is unavailable.

## Templates (copy when creating issues or PRs)

- Quick issue template shown above.
- Quick PR template:

```
Title: short description

Summary:

How to test:
1. ...

Notes:

Screenshots:

```

---

Thanks for helping improve the Shuttle Tracker App — we appreciate your time and contributions! 🚀
