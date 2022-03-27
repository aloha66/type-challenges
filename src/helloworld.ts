import type { Equal, Expect } from '@type-challenges/utils'

type HelloWorld = string

export type test = Expect<Equal<HelloWorld, string>>


