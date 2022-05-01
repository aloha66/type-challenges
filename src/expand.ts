export type Expand<T> = T extends infer V ? { [K in keyof V]: V[K] } : never
type ExpandRecursive<T> = T extends object
  ? T extends infer O
  ? { [K in keyof O]: ExpandRecursive<O[K]> }
  : never
  : T

// https://www.bilibili.com/video/BV1qr4y1J7jt

// 1. keof
interface obj {
  name: string
  age: number
}

type keyofTest = keyof obj

type ss = Expand<keyofTest>

// 2. 嵌套对象

interface CtxObj {
  age: number
}

type unionCase = CtxObj | string
// type r2 = Expand<unionCase>
