import React, { memo, useState, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { debounce } from '@/api/utils';
const SearchBoxWrapper = styled.div`
    .SearchBox {
            margin:1rem 0.5rem 0.75rem 0.5rem;
            display:flex;
            justify-content:space-between;
            /* justify-items:center; */
            align-items:center;
            .Box{
                width:15rem;
                height:2rem;
                background: #ffffff;
                border-radius: 3rem;
                display:flex;
                align-items:center;
                padding-left:0.6rem;
                .icon-sousuo{
                    font-size:1.4rem;
                    font-weight:800;
                }
                .box{
                    height:100%;
                    width:80%;
                    border:0;
                    color:#1a1819;
                    font-size:0.75rem;
                    padding:auto auto;
                    &::placeholder{
                    color: #cccccc;
                    }
                }
            }
            .back{
                color:#808080;
                font-size:0.85rem;

            }
        }
`
const SearchBox = (props) => {
    const queryRef = useRef();
    // console.log(queryRef, '///')
    // 解构父组件props时， 分两部分， 
    // 读props
    // 方法
    const { newQuery } = props;
    const { handleQuery, back } = props;
    const [query, setQuery] = useState('');
    // 父组件传过来的函数封装一下
    // 优化再升级
    // useMomo 可以缓存 上一次函数计算的结果 
    let handleQueryDebounce =  useMemo(() => {
        return debounce(handleQuery, 500)
    }, [handleQuery])

    // mount 
    useEffect(() => {
        // console.log(queryRef)
        // 挂载后
        queryRef.current.focus();
    }, [])
    // 使用useEffect 去更新 
    useEffect(() => {
        //query 更新
        // console.log(queryRef)
        // let curQuery = query
        handleQueryDebounce(query)
    }, [query])

    useEffect(() => {
        // mount 时候 执行 父组件  newQuery -> input query 
        let curQuery = query;
        if (newQuery !== query) {
            curQuery = newQuery;
            queryRef.current.value = newQuery;
        }
        setQuery(curQuery)
        // newQuery 更新时执行
    }, [newQuery])

    const clearQuery = () => {
        setQuery('');
        queryRef.current.value = "";
        queryRef.current.focus();
    }
    const handleChange = (e) => {
        let val = e.currentTarget.value
        setQuery(val)
    }
    const  displayStyle = query?{display:'block'}: {display: 'none'};

    return (
        <SearchBoxWrapper>
            <i className="iconfont icon-back" onClick={() => back()}>&#xe655;</i>
            <input type="text" className='box'
             placeholder='凡人修仙传' 
             ref={queryRef}
             onChange={handleChange}
             />
            <i 
                className="iconfont icon-delete" 
                style={displayStyle}
                onClick={clearQuery}
            >&#xe600;</i>
        </SearchBoxWrapper>
    )
}

export default memo(SearchBox)

