import * as React from "react";
import classNames from "classnames";

type ColSpanType = number | string;
type FlexType = number | "none" | "auto" | string;

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  /**flex 布局属性 */
  flex?: FlexType;
  /**栅格占位格数 */
  span?: ColSpanType;
  /**栅格左侧的间隔格数，间隔内不可以有栅格 */
  offset?: ColSpanType;
}

function parseFlex(flex: FlexType): string {
  if (typeof flex === "number") {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

const Col: React.FC<ColProps> = (props) => {
  const { span, offset, className, children, flex, style, ...others } = props;
  const classes = classNames(
    "ant-col",
    {
      [`ant-col-${span}`]: span !== undefined,
      [`ant-col-offset-${offset}`]: offset,
    },
    className
  );
  const mergedStyle: React.CSSProperties = {};

  if (flex) {
    mergedStyle.flex = parseFlex(flex);
  }
  return (
    <div
      role="cell"
      {...others}
      style={{ ...mergedStyle, ...style }}
      className={classes}
    >
      {children}
    </div>
  );
};

Col.displayName = "Col";

export default Col;
