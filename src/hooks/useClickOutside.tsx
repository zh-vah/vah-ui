/*
 * @Author: your name
 * @Date: 2022-04-10 09:57:17
 * @LastEditTime: 2022-04-10 10:10:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack-test/src/hooks/useClickOutside.tsx
 */

import { RefObject, useEffect } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, handler: Function){
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if(!ref.current || ref.current.contains(event.target as HTMLElement)){
        return
      }
    handler(event)
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}
export default useClickOutside