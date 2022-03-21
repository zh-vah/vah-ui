/*
 * @Author: your name
 * @Date: 2022-03-02 16:56:59
 * @LastEditTime: 2022-03-03 11:44:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-test\src\components\Button\button.test.tsx
 */
import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

test("our first react test case", () => {
  const warpper = render(<Button>Nice</Button>);
  const element = warpper.queryByText("Nice");
  expect(element).toBeInTheDocument();
  expect(element.tagName).toEqual("BUTTON");
  expect(element).toHaveClass("btn btn-default");
});
