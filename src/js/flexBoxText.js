import React from 'react'
import { List } from 'semantic-ui-react';



const flexExample = () => {
    const guideTxt1 = [
        {id:1, msg:"flex-layout 클래스를 정렬하고자 하는 항목의 부모 태그에 지정하면, 하위 자식 태그들이 정렬된다."},
        {id:2, msg:"박스 형태의 레이아웃뿐만 아니라 텍스트 정렬에도 사용 가능하다. / 수직 정렬의 경우, 필히 부모 태그에 고정 높이가 있어야한다."},
        {id:3, msg:"브라우저 지원 범위 : 최신 chrome, Edge, firefox, opera 브라우저 / IE 10 ~"},
        {id:4, msg:"단, IE 브라우저에선 동일한 속성도 다르게 표현 되거나 안될 수 있으니, 이럴 경우 퍼블리셔에게 문의한다."},
    ];

    const guideList = guideTxt1.map((guideTxt, index) => <List.Item className='emp' key={index}>{guideTxt.msg}</List.Item>);

    return <List>{guideList}</List>;
    
};

export default flexExample;