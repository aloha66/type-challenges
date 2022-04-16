/*
  20 - Promise.all
  -------
  by Anthony Fu (@antfu) #medium #array #built-in

  ### Question

  Type the function `PromiseAll` that accepts an array of PromiseLike objects, the returning value should be `Promise<T>` where `T` is the resolved result array.

  ```ts
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  // expected to be `Promise<[number, 42, string]>`
  const p = Promise.all([promise1, promise2, promise3] as const)
  ```

  > View on GitHub: https://tsch.js.org/20
*/

/**
 * 类别：提取
 * PromiseAll 提取PromiseAll里面的内容
 */

/**
 * 知识点
 * 1. as const 会按照运算结果输出
 * 例如 1就是1  Promise.resolve(3)经过计算得出3
 * 2. 使用as const后接收方需要加readonly T来限定
 */

// todo 写解释
/**
 * 接收参数必须是数组 (values: [...T])
 * [1,2,3]转成结果是[1,2,3] 因为用了as const
 * 对应的需要使用readonly来限定
 * --------------入参内容结束----------------
 * 首先返回值是一个Promise<U>
 *
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

// type T = typeof promiseAllTest1
// type dd = T extends Promise<infer U>? U:never
// type ss ={ [k in keyof T]: T[k] extends Promise<infer U>? U :T[k]}

/* _____________ Your Code Here _____________ */

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{ [k in keyof T]: T[k] extends Promise<infer R> ? R : T[k] }>

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

export type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/20/answer
  > View solutions: https://tsch.js.org/20/solutions
  > More Challenges: https://tsch.js.org
*/
