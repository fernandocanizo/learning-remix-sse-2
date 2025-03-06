# learning-remix-sse-2

Learning Remix Server Sent Events (SSE) - Round two. Cause the first attempt I used a couple of out-of-date tutorials and nothing worked as expected, so I never learned it properly nor finished that project.

I'm following David Adams' tutorial [Sending logs to the browser from actions and loaders](https://programmingarehard.com/2025/02/13/sending-logs-to-the-browser-from-actions-and-loaders.html/), he also has it on [video](https://www.youtube.com/watch?v=sMPtjhvt9T0).

## Conclusion

This is a convoluted example, as it involves a Singleton, and some specific "logging" case. I need a simpler explanation that tells me where to put the stuff that's sent from the server and where to handle in the frontend. Gonna keep looking for some example code or maybe do a new repo `learning-remix-sse-3`.

## From Remix

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
pnpm dev
```

## Deployment

First, build your app for production:

```sh
pnpm build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
