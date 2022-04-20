/*
 * @Author: your name
 * @Date: 2022-04-07 16:06:10
 * @LastEditTime: 2022-04-08 11:18:21
 * @LastEditors: Please set LastEditors
 * @Description: 防抖函数
 * @FilePath: /webpack-test/src/hooks/useDebounce.tsx
 */

import { useEffect, useState } from "react";

const useDebounce = (value:any, delay = 300) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    return () => {clearTimeout(handler)}
  }, [value, delay])
  return debounceValue
}

export default useDebounce


