/*
 * @Author: your name
 * @Date: 2022-02-28 16:32:14
 * @LastEditTime: 2022-03-02 10:32:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-test\src\components\Button\button.tsx
 */
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface baseButtonProps {
  className?: string;
  btnType?: string;
  size?: string;
  disabled?: boolean;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = baseButtonProps & ButtonHTMLAttributes<HTMLElement>;

const Button: React.FC<buttonProps> = (props) => {
  const { btnType, size, disabled, children, className, href } = props;
  const classes = classNames("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
    className,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }else{
    return <button className={classes} disabled={disabled}>{children}</button>
  }
}

export default Button;
