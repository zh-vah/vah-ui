/*
 * @Author: your name
 * @Date: 2022-03-22 11:05:14
 * @LastEditTime: 2022-04-10 10:10:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack-test/src/components/AutoComplete/autoComplete.tsx
 */
import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
  InputHTMLAttributes
} from "react";
import classNames from "classnames";

import Input from "../Input";
import Icon from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from '../../hooks/useClickOutside'

interface DataSourceObject {
  value: string;
}

interface AutocompleteProps extends InputHTMLAttributes<HTMLElement>{
  /**获取自动填充的数据源 */
  fetchSuggestions: (
    str?: string
  ) => DataSourceObject[] | Promise<DataSourceObject[]>;
  /**Select选择事件 */
  OnSelect?: () => void;
  /**补全信息栏渲染格式 */
  renderOption?: (item) => ReactElement;
}

const AutoComplete: React.FC<AutocompleteProps> = (props) => {
  const { fetchSuggestions, renderOption, OnSelect, ...restProps } = props;
  const [inputValue, setInputValue] = useState(""); // 输入框值
  const [filteredData, setFilteredData] = useState([]); // 补全信息栏列表数据
  const [highlightIndex, setHighlightIndex] = useState(-1); // 补全信息栏选择高亮
  const [loading, setLoading] = useState(false);
  const triggerSearch = useRef(false) // 控制补全信息栏搜索
  const componentRef = useRef<HTMLDivElement>(null)

  const debounceValue = useDebounce(inputValue, 500); // 将输入值进行防抖控制
useClickOutside(componentRef, () => { setFilteredData([])})
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      const dataSource = fetchSuggestions(debounceValue);
      if (dataSource instanceof Promise) {
        setLoading(true);
        dataSource.then((res) => {
          setLoading(false);
          setFilteredData(res);
        });
      } else {
        setFilteredData(dataSource);
      }
    } else {
      setFilteredData([]);
    }
  }, [debounceValue]);

  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= filteredData.length) {
      index = filteredData.length - 1
    }
    setHighlightIndex(index)
  }

  //按键上、下、esc、enter事件
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // e.preventDefault()
    switch (e.keyCode) {
      case 13:
        if(filteredData[highlightIndex]){
          handleSelect(filteredData[highlightIndex])
        }
        break;
      // 上键
      case 38:
        highlight(highlightIndex - 1);
        break;
      // 下键
      case 40:
        highlight(highlightIndex + 1);
        break;
      // 退出键
      case 27:
        setFilteredData([])
        // setShowDropdown(false);
        break;
      default:
        break;
    }
  };

  // 输入框输入改变触发事件
  const handChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredData([]);
    triggerSearch.current = true
  };

  // 补全信息栏点击填充input值
  const handleSelect = (item: DataSourceObject) => {
    setInputValue(item.value);
    setFilteredData([]);
    triggerSearch.current = false
  };

  //
  const renderTemplate = (item) => {
    return renderOption ? renderOption(item) : item.value;
  };

  // 渲染自动补全列表
  const generateDropdown = () => {
    return (
      inputValue && filteredData.length !== 0 && (
        <ul className="viking-suggestion-list">
          {filteredData.map((item, index) => {
            const cnames = classNames("suggestion-item", {
              "is-active": index === highlightIndex,
            });
            return (
              <li key={index} onClick={() => handleSelect(item)} className={cnames}>
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      )
    );
  };

  return (
    <div className="viking-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      ></Input>
      {loading && (
        <ul>
          <Icon icon="spinner" spin></Icon>
        </ul>
      )}
      {generateDropdown()}
    </div>
  );
};

export default AutoComplete;