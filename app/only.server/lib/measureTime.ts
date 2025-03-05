import { hrtime } from "node:process"

// simple utility for tracking how long a function takes
export const measureTime = async <T>(callback: () => T) => {
  const start = hrtime.bigint()
  const result = await callback()
  const end = hrtime.bigint()
  const timeTakenInMs = Number(end - start) / 1_000_000
  return [result, timeTakenInMs] as const
}
