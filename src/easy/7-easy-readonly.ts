/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #easy #built-in #readonly #object-keys

  ### Question

  Implement the built-in `Readonly<T>` generic without using it.

  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

  For example

  ```ts
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```

  > View on GitHub: https://tsch.js.org/7
*/

/**
 * 只读类型
 * 解题思路 可想象用js模拟
 * 1. 返回一个对象
 * 2. 循环遍历T [P in keyof K] mapped
 * 3. 加上readonly
 * 4. 重新赋值给新对象
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

export type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/7/answer
  > View solutions: https://tsch.js.org/7/solutions
  > More Challenges: https://tsch.js.org
*/
