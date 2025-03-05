import type { LoaderFunctionArgs } from "@remix-run/node"

import { useLoaderData } from "@remix-run/react"

import { logger } from "~/only.server/logger"
import { fakeProcess } from "~/only.server/fakeProcess"
import { measureTime } from "~/only.server/lib/measureTime"

export const loader = async (): LoaderFunctionArgs => {
  const [result, timeTaken] = await measureTime(fakeProcess())

  logger.info("Some backend process", {
    result,
    timeTaken,
  })

  return { result, timeTaken }
}

export default function FakeProcess() {
  const { result, timeTaken } = useLoaderData<typeof loader>()

  return (
    <div>
      <ul>
        <li><strong>Result:</strong>{result}</li>
        <li><strong>Time taken:</strong>{timeTaken}</li>
      </ul>
    </div>
  )
}
