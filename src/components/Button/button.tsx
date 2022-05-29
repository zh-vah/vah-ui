/*
 * @Author: your name
 * @Date: 2022-02-28 16:32:14
 * @LastEditTime: 2022-04-20 08:58:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-test\src\components\Button\button.tsx
 */
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

// export enum ButtonSize {
//   Large = "lg",
//   Small = "sm",
// }

// export enum ButtonType {
//   Primary = "primary",
//   Default = "default",
//   Danger = "danger",
//   Link = "link",
// }

//通过字符串字面量类型简化枚举
type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  /**设置 Button 的大小 */
  size?: ButtonSize;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  children: React.ReactNode;
  /**设置 link类型的地址 */
  href?: string;
}

// 继承button和a标签的原生属性
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

// 此处导出是给storybook文档自动生成使用
export const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, size, disabled, children, className, href, ...restProps } =
    props;
  const classes = classNames("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
    className,
  });
  if (btnType === "link" && href) {
    if(disabled){
      return (
        <span className={classes}>
          {children}
        </span>
      );
    }
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  btnType: "default",
  disabled: false,
};

export default Button;
