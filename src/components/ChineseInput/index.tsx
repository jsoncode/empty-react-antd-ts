import React, { FC, useEffect, useRef, useState } from 'react';
import { Input, InputProps } from 'antd';
import styles from './index.module.less'

interface IProps extends InputProps {
  [propName: string]: any;

  value?: string;
}

const ScrollSelect: FC<IProps> = (
  {
    value = '',
    onChange,
    onInput,
    onCompositionStart,
    onCompositionEnd,
    ...resetProps
  }) => {
  const chineseInputting = useRef(false); // 是否是中文（爽字节字符的输入）模式
  const [val, setVal] = useState('')

  useEffect(() => {
    setVal(value)
  }, [value])

  // 优化搜索
  const change = (e: any) => {
    onChange && onChange(e)
  }

  return (
    <Input
      className={styles.chineseInput}
      {...resetProps}
      value={val}
      onChange={(e: any) => {
        if (e.target.value === '') {
          change(e)
        }
        setVal(e.target.value)
      }}
      onInput={(e: any) => {
        onInput && onInput(e)
        if (!chineseInputting.current) {
          change(e)
        }
      }}
      onCompositionStart={(e: any) => {
        onCompositionStart && onCompositionStart(e)
        chineseInputting.current = true;
      }}
      onCompositionEnd={(e: any) => {
        onCompositionEnd && onCompositionEnd(e)
        if (chineseInputting.current) {
          change(e)
          chineseInputting.current = false;
        }
      }}
    />
  );
};

export default ScrollSelect;
