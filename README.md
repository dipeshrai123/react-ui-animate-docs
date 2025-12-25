# 🖥️ Example Contribution Guide

This document explains the structure and workflow for writing, managing, and integrating example code snippets in this project.

## 📂 Example Structure & Versioning

All example files are located inside the `src/examples/raw` directory.

Examples are organized by version to ensure compatibility with different versions of **react-ui-animate**.

```jsx
src/examples/raw/
    v3.x.x ← Examples for react-ui-animate v3.x.x
    v5.x.x ← Examples for react-ui-animate v5.x.x
```

✅ **Tip:** Keep your examples scoped properly within their respective version folders to avoid confusion or compatibility issues.

---

## ⚙️ Example Integration in Documentation

We use an **industry-standard approach** for managing code examples in documentation. Example files are automatically indexed and can be used directly in MDX files via the `CodeExample` component.

### How It Works

1. **Example files** are stored in `src/examples/raw/` organized by version
2. **Auto-generated index** (`src/examples/index.ts`) exports all examples as string constants
3. **CodeExample component** reads from the index and displays examples in Sandpack

### Usage in MDX Files

```jsx
import CodeExample from "@site/src/components/CodeExample"

<CodeExample 
  example="v5_x_x_core_mount_BasicExample"
  version={{ reactAnimate: '5.0.0' }}
/>
```

The `example` key is auto-generated from the file path:
- File: `src/examples/raw/v5.x.x/core/mount/BasicExample.tsx`
- Key: `v5_x_x_core_mount_BasicExample`

### Build Process

The example index is automatically generated via:

```bash
"generate:examples": "node scripts/generate-examples-index.js",
"watch:examples": "npx chokidar 'src/examples/raw/**/*.tsx' --initial -c \"npm run generate:examples\"",
"start": "concurrently -k \"npm:watch:examples\" \"docusaurus start\"",
"build": "npm run generate:examples && docusaurus build",
```

✅ **Benefits:**
- Clean, maintainable code structure
- No manual string conversion needed
- Type-safe example references
- Automatic regeneration on file changes

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
