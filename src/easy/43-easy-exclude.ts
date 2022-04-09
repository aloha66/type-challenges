/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in

  ### Question

  Implement the built-in Exclude<T, U>
  > Exclude from T those types that are assignable to U

  > View on GitHub: https://tsch.js.org/43
*/

/**
 * 类别 移除
 * Exclude<T, U> 在联合类型中移除U
 */

/**
 * 知识点
 * 1. exclude T是否在U中，是返沪never，否则返回T
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U?never:T

export type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
