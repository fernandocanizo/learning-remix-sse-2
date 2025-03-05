import type { LoaderFunctionArgs } from "@remix-run/node"

import { logger } from "~/only.server/logger"
import { fakeProcess } from "~/only.server/fakeProcess"
import { measureTime } from "~/only.server/lib/measureTime"

export const loader = async (): LoaderFunctionArgs => {
  const [result, timeTaken] = await measureTime(fakeProcess())

  logger.info("Some backend process", {
    result,
    timeTaken,
  })

  return { result }
}
