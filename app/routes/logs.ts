import type { LoaderFunctionArgs } from "@remix-run/node"

import { eventStream } from "remix-utils/sse/server"

import { eventNames } from "~/global.names"
import { emitter } from "~/only.server/emitter"

export async function loader({ request }: LoaderFunctionArgs) {
  if (process.env.NODE_ENV !== "development") {
    throw new Error("SSE logging is only for development, silly!")
  }

  return eventStream(
    request.signal,
    send => {
      const handle = (data: string) => {
        send({ event: eventNames.log, data })
      }

      emitter.on(eventNames.log, handle)

      return () => {
        emitter.off(eventNames.log, handle)
      }
    },
    {
      // Tip: You need this if using Nginx as a reverse proxy
      headers: { "X-Accel-Buffering": "no" },
    },
  )
}
