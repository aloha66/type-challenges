/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #easy #array

  ### Question

  Implement a generic `First<T>` that takes an Array `T` and returns it's first element's type.

  For example

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```

  > View on GitHub: https://tsch.js.org/14
*/

/**
 * 知识点
 * 1. 获取对象属性或者arr的length   （indexed）T["length"]
 * 2. 如果T[1,2,3](不为空),T[number]返回一个union
 * 定义T[] (空数组), T[number]为never, T[0]为undefined
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */

// 方法一
type First<T extends any[]> = T extends [] ? never :T[0]

// 方法二
// type First<T extends any[]> = T['length'] extends 0? never:T[0]

// 方法三
// type First<T extends any[]> = T[0] extends T[number]? T[0]:never

// 方法四
// type First<T extends any[]> = T extends [infer First, ...infer Rest]?First:never

export type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

export type errors = [
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  First<'notArray'>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/14/answer
  > View solutions: https://tsch.js.org/14/solutions
  > More Challenges: https://tsch.js.org
*/
