import winston, { Logger } from "winston"
import Transport from "winston-transport"
import { singleton } from "~/only.server/singleton"
import { emitter } from "~/only.server/emitter"
import { eventNames } from "~/global.names"

class EmitterTransport extends Transport {
  log(info: unknown, callback: () => void) {
    setImmediate(() => {
      this.emit("logged", info)
    })

    emitter.emit(eventNames.log, JSON.stringify(info))

    callback()
  }
}

export const logger: Logger = singleton("logger", () => {
  const instance = winston.createLogger({
    level: process.env.NODE_ENV !== "production" ? "debug" : "info",
    transports: [new winston.transports.Console()]
  })

  if (process.env.NODE_ENV !== "production") {
    instance.add(new EmitterTransport())
  }
  return instance
})
