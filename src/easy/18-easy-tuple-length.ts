/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #easy #tuple

  ### Question

  For given a tuple, you need create a generic `Length`, pick the length of the tuple

  For example

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

  > View on GitHub: https://tsch.js.org/18
*/

/**
 * 知识点
 * 1、tuple类型的length是固定的数值 array类型的length是number
 * 2. 需要搞清楚是在定义泛型的时候做约束（左边）还是在执行代码里面做约束（右边）
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */
type Length<T extends readonly any[]> = T['length']

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

export type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Length<5>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Length<'hello world'>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/18/answer
  > View solutions: https://tsch.js.org/18/solutions
  > More Challenges: https://tsch.js.org
*/
