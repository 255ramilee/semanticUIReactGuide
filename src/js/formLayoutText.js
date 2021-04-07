import React from 'react'
import { List } from 'semantic-ui-react';



const formExample = () => {

    const guideTxt1 = [
        {id:1, msg:(
            <span>
                Form 요소들을 감싸는 레이아웃으로 <strong className="txt-color01">form 또는 div 태그에 꼭 "ui form" 클래스를 사용</strong>하고, 그 내부에 요소들을 넣는다.
            </span>
        )},
        {id:2, msg:"브라우저 지원 범위 : 최신 chrome, Edge, firefox, opera 브라우저 / IE 11 ~"},
        {id:3, msg:"기본 레이아웃 이외의 배치가 필요한 화면은 퍼블리셔에게 문의한다."},
        
    ];

    const guideList = guideTxt1.map((guideTxt, index) => <List.Item className='emp' key={index}>{guideTxt.msg}</List.Item>);

    return <List>{guideList}</List>;
    
};

export default formExample;