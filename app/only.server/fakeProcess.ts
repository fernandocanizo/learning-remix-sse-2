// Fake a process with random delay to simulate something is happening in the
// backend

const delay = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fakeProcess = async (): Promise<number> => {
  const randMs = Math.random() * 1000
  await delay(randMs)
  return randMs // use it as a fake value too
}
