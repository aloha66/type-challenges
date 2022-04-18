/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #medium #template-literal

  ### Question

  Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.

  For example

  ```ts
  type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
  ```

  > View on GitHub: https://tsch.js.org/108
*/

/**
 * 类别：转换组合
 * Trim 清空左右空格
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */
type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer R}`?TrimLeft<R>:T
type TrimRight<T extends string> = T extends `${infer R}${' ' | '\n' | '\t'}` ? TrimRight<R> : T
type Trim<S extends string> = TrimRight<TrimLeft<S>>

export type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/108/answer
  > View solutions: https://tsch.js.org/108/solutions
  > More Challenges: https://tsch.js.org
*/
