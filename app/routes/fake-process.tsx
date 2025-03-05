import { useLoaderData } from "@remix-run/react"

import { logger } from "~/only.server/logger"
import { fakeProcess } from "~/only.server/fakeProcess"

export const loader = async () => {
  const fakeResult = await fakeProcess()

  logger.info("Some backend process", { fakeResult })

  return { fakeResult }
}

export default function FakeProcess() {
  const { fakeResult } = useLoaderData<typeof loader>()

  return (
    <div>
      <ul>
        <li><strong>Result:</strong>&nbsp;{fakeResult}</li>
      </ul>
    </div>
  )
}
