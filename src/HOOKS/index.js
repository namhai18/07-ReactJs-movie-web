// useEffect tương ứng componenWillDidMount (call API)
// useCallback làm component con ko render lai khi ko thay doi
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Child from "./Child";

export default function HOOKS() {
    // Mảng 2 giá trị dùng từ useState , giá trị là số 0
    // Tương tự constructor trong class
    const [number, setNumber] = useState(0);

    const handleCountUp = () => {
        setNumber(number + 1);
        console.log("handleCountUp");
    }

    const showNumber = () => {
        console.log("showNumber");
    }

    // useCallback làm component con ko render lai khi ko thay doi
    const showNumberCallback = useCallback(showNumber, []);

    // Khi click count up thi hàm numberUp chạy lại = > cần numberUp chạy 1 lần thôi dùng useMemo.
    const numberUp = () => {
        let index = 0;
        for (index; index < 1000; index++) {
            // console.log(index);
        }
        return index;
    }

    const numberUpUseMemo = useMemo(()=>
        numberUp(),[]
    ) ;

    // Tương ứng ComponentDidMount , ComponentDidUpdate, ComponentWillUnMount
    // nếu tham số thử 2 [] mảng rỗng = ComponentDidMount
    // nếu tham số thử 2 [] # mảng rỗng (nhận vào state) = ComponentDidUpdate
    useEffect(() => {
        console.log("useEffect");
    },
        [number]
    )

    // ComponentWillUnMount: đi ra khỏi component thì willUnMount
    useEffect(() => {
        // set interval chạy ngầm dù đã thoát ra khỏi component
        let interval = setInterval(() => {
            console.log("Hello");
        }, 1000);
        return () => {

            console.log("useEffect : willUnMount");
            // cần clear đi khi chuyển component
            clearInterval(interval);
        }
    },
        []
    )

    return (
        <div>
            HOOK
            <h3>
                {/* kéo number từ mảng xuống */}
                Number : {number}
            </h3>
            <button onClick={handleCountUp} className="btn btn-success">Count</button>
            {/* truyền cha sang con */}
            <Child showNumber={showNumberCallback} />
            <h3>NumberUp: {numberUp()}</h3>
            {/* Không render lại total 1000 */}
            <h3>NumberUpUseMemo: {numberUpUseMemo}</h3>
        </div>
    )
}
