# 🖥️ Example Contribution Guide

This document explains the structure and workflow for writing, managing, and integrating example code snippets in this project.

## 📂 Example Structure & Versioning

All example files are located inside the `src/examples/raw` directory.

Examples are organized by version to ensure compatibility with different versions of **react-ui-animate**.

```jsx
src/examples/raw/
    v3.x.x ← Examples for react-ui-animate v3.x.x
    v4.x.x ← Examples for react-ui-animate v4.x.x
```

✅ **Tip:** Keep your examples scoped properly within their respective version folders to avoid confusion or compatibility issues.

---

## ⚙️ Example Integration in Documentation

We do **not** import example files directly in the documentation. This is because we only have the **latest version** of `react-ui-animate` installed in `package.json`. Direct imports from older versions would cause build failures.

### Solution: Auto-Generate Stringified Examples

We convert example files into **stringified** code snippets for safe usage in docs. This process is fully automated via the following commands:

```bash
"generate:strings": "node scripts/generate-code-strings.js",
"watch:examples": "npx chokidar 'src/examples/raw/**/*.tsx' --initial -c \"npm run generate:strings\"",
"start": "concurrently -k \"npm:watch:examples\" \"docusaurus start\"",
"build": "npm run generate:strings && docusaurus build",
```

✅ Explanation:

`generate:strings`: Converts examples from `src/examples/raw` into strings in `src/examples/strings`.

`watch:examples`: Watches for changes in raw examples and regenerates strings automatically during development.

`start`: Runs both the watcher and Docusaurus dev server concurrently.

`build`: Ensures code strings are generated before the production build.

---

## 🛠️ SandPack-Powered Versioning

Examples in the documentation are displayed using SandPack, which allows you to specify the exact version of react-ui-animate independently of the version installed in the local project.

This means:

- You can showcase examples for multiple versions without worrying about local dependency conflicts.

- The version in `package.json` has no impact on the displayed examples.

---

✅ Summary Checklist

- Add example code under the correct version folder in `src/examples/raw/`.

- Confirm examples render correctly in docs via SandPack.

- Keep examples scoped to their respective versions for clarity.
