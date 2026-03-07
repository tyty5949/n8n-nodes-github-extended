# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run build          # Compile TypeScript to dist/
npm run build:watch    # Watch mode compilation
npm run lint           # Run ESLint
npm run lint:fix       # Run ESLint with auto-fix
npm run dev            # Run node in dev mode
npm run release        # Release a new version
```

There are no tests in this project.

## Architecture

This is an n8n community node package that adds GitHub operations missing from the built-in n8n GitHub node. It uses the **declarative-style** n8n node pattern, where API calls are defined entirely through `INodeProperties` descriptors rather than imperative code — there is no `execute()` method.

### Key concepts

- **Declarative routing**: Each operation's `routing.request` field defines the HTTP method, URL, and body. The `url` uses n8n expression syntax: `` =/repos/{{$parameter.owner}}/{{$parameter.repo}}/... ``.
- **`displayOptions`**: All operation-specific fields use `displayOptions: { show: { resource: [...], operation: [...] } }` to conditionally render in the UI.
- **`noDataExpression: true`** is required on `resource` and `operation` selectors so they can't be set via expressions.

### Structure

```
nodes/GithubExtended/
  GithubExtended.node.ts      # Main node class — assembles properties from resources
  GithubExtended.node.json    # Node metadata (version, etc.)
  resources/
    issue/
      index.ts                # Re-exports all operation descriptions
      update.ts               # INodeProperties[] for update operation
    issueComment/             # Same pattern
    pullRequest/              # Same pattern
    pullRequestReviewComment/ # Same pattern
    ...
credentials/
  GithubExtendedOAuth2Api.credentials.ts  # OAuth2 credential extending oAuth2Api
```

### Adding a new operation

1. Create `nodes/GithubExtended/resources/<resource>/<operation>.ts` exporting an `INodeProperties[]`.
2. Export it from `resources/<resource>/index.ts`.
3. Spread it into the `properties` array in `GithubExtended.node.ts`.

### Adding a new resource

1. Create a new directory under `resources/` with `index.ts` and operation files.
2. Import and spread into `GithubExtended.node.ts` properties, and add the resource option to the `resource` selector.

### Credentials

`GithubExtendedOAuth2Api` extends the built-in `oAuth2Api` credential type. It hardcodes GitHub's OAuth endpoints and `repo` scope. Supports GitHub Enterprise Server via a configurable `server` field.

The node registers credentials/nodes in `package.json` under the `n8n` key, pointing to `dist/` paths.