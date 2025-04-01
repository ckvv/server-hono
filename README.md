hono

Reproduction steps

+ Add `.dev.vars` to the root directory

```shell
DATABASE_URL=postgres://username:password@localhost:5432/database
```

+ `pnpm install`

+ `pnpm dev`

+ Triggered after visiting `http://localhost:8787` several times

```shell
Error: The script will never generate a response.
    at async Object.fetch (file:///Users/chenkai/Desktop/server-hono/node_modules/.pnpm/miniflare@4.20250321.1/node_modules/miniflare/dist/src/workers/core/entry.worker.js:1002:22)
```

