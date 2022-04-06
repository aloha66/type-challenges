/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in

  ### Question

  Implement the built-in Parameters<T> generic without using it.

  > View on GitHub: https://tsch.js.org/3312
*/

/**
 * 知识点
 * 只关注提取的内容，其他内容可以照搬
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => any?U:[]

const foo = (_arg1: string, _arg2: number): void => {}
const bar = (_arg1: boolean, _arg2: { a: 'A' }): void => {}
const baz = (): void => {}

export type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3312/answer
  > View solutions: https://tsch.js.org/3312/solutions
  > More Challenges: https://tsch.js.org
*/
