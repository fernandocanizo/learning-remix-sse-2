// TODO maybe this
// https://stackoverflow.com/questions/68481686/type-typeof-globalthis-has-no-index-signature

export function singleton<T>(name: string, valueFactory: () => T): T {
  const yolo = global
  yolo.__singletons ??= {}
  yolo.__singletons[name] ??= valueFactory()
  return yolo.__singletons[name]
}
