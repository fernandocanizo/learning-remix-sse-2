import { EventEmitter } from "node:events"
import { singleton } from "~/only.server/singleton"

export const emitter = singleton("emitter", () => new EventEmitter())
