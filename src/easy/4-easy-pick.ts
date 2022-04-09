/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in

  ### Question

  Implement the built-in `Pick<T, K>` generic without using it.

  Constructs a type by picking the set of properties `K` from `T`

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/4
*/
/**
 * 类别：提取
 * pick 保留自己需要的字段
 * Pick<T,k> 从T中找出符合k字段的内容，生成一个新的类型
 */

/**
 * 知识点
 * 1. [P in K]可以作为遍历使用
 * 2. keyof T  可以获取object的keys 变成ts的union联合类型
 * 3. extends 在泛型定义时使用 约束或者is的作用
 */

/**
 * 从T中取出K字段的内容
 * 解题思路 可想象用js模拟
 * 1. 返回一个对象
 * 2. 循环遍历K [P in K] mapped
 * https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
 * 3. 判断当前字段是否包含T  extends(is  是否) 用keyof T 转成union联合类型
 * 4. 把包含结果取值后赋值给新对象
 * https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4/answer
  > View solutions: https://tsch.js.org/4/solutions
  > More Challenges: https://tsch.js.org
*/
