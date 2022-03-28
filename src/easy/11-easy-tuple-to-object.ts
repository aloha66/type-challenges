/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy

  ### Question

  Give an array, transform into an object type and the key/value must in the given array.

  For example

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > View on GitHub: https://tsch.js.org/11
*/

/**
 * 知识点
 * 1. typeof T 能把js的内容变成ts的类型
 * 2. 字面量类型 as const 都是只读的内容  类型就是类型
 * 3. [P in T[number]]遍历数组内容
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */

type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

export type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
export type error = TupleToObject<[[1, 2], {}]>

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/11/answer
  > View solutions: https://tsch.js.org/11/solutions
  > More Challenges: https://tsch.js.org
*/
