/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #easy #utils

  ### Question

  Implement a utils `If` which accepts condition `C`, a truthy return type `T`, and a falsy return type `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.

  For example:

  ```ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```

  > View on GitHub: https://tsch.js.org/268
*/

/**
 * 知识点
 * 1. 类型兼容性
 * https://www.typescriptlang.org/docs/handbook/type-compatibility.html
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */
type If<C extends boolean, T, F> = C extends true ? T : F

export type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
export type error = If<null, 'a', 'b'>

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/268/answer
  > View solutions: https://tsch.js.org/268/solutions
  > More Challenges: https://tsch.js.org
*/
