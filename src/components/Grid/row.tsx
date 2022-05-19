import * as React from 'react';
import { Children, cloneElement } from 'react';
import classNames from 'classnames';

export interface RowProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  /**栅格间隔 */
  gutter?: number;
  /**是否自动换行 */
  wrap?: boolean;
  /**垂直对齐方式 */
  align?: 'top' | 'middle' | 'bottom';
  /**水平排列方式 */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
}

const Row: React.FC<RowProps> = (props) => {
  const {
    wrap, justify, align, className, style, children,gutter = 0,
     ...otherProps
  } = props;

  // 设置栅格间隔时去除最左右两边的margin
  const rowStyle = (gutter as number) > 0 ? {
    marginLeft: (gutter as number) / -2,
    marginRight: (gutter as number) / -2,
    ...style,
  } : style;

  const classes = classNames(
    'ant-row',
    {
      [`ant-row-no-wrap`]: wrap === false,
      [`ant-row-${justify}`]: justify,
      [`ant-row-${align}`]: align,
      // [`ant-row-rtl`]: direction === 'rtl',
    },
    className,
  );
  
  const cols = Children.map(children, (col: React.ReactElement<HTMLDivElement>) => {
    if (!col) {
      return null;
    }
    if (col.props && (gutter as number) > 0) {
      return cloneElement(col, {
        style: {
          // @ts-ignore
          paddingLeft: (gutter as number) / 2,
          // @ts-ignore
          paddingRight: (gutter as number) / 2,
          ...col.props.style,
        },
      });
    }
    return col;
  });
  return <div {...otherProps} className={classes} style={rowStyle}>{cols}</div>
}

Row.displayName = 'Row';

export default Row;