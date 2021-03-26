import React from 'react'
import classnames from 'classnames'
import { Item } from 'semantic-ui-react';

const flexVisualExample = () => {

    const flexVisual = (newClassName) => (
        <div className={classnames("flex-layout" , newClassName)}>
        {/* <div className={classnames("flex-layout" + newClassName)}> */}
            <div className="box">1</div>
            <div className="box">2</div>
            <div className="box">3</div>
            <div className="box">4</div>
            <div className="box">5</div>
        </div>
    );

    const flexVisualDetail = [
        {
            header:'Default',
            description:'플렉스 레이아웃 기본 정렬 형태 -> 흐름: row(자식 태그들이 수평 형태로 정렬) / 수평 : flex-start(좌측 정렬) / 수직 : flex-start(상단 정렬)',
            extra:flexVisual(""),
        },
        {
            header:'수평 정렬 - 좌측 정렬',
            description:'부모 태그에 "justify-start" 클래스 추가. 모든 자식 태그가 여백 없이 좌측으로 정렬된다.(flex-layout을 지정하면 기본적으로 적용된다.)',
            extra:flexVisual("justify-start"),
        },
        {
            header:'수평 정렬 - 우측 정렬',
            description:'부모 태그에 "justify-end" 클래스 추가. 모든 자식 태그가 여백 없이 우측으로 정렬된다.',
            extra:flexVisual("justify-end"),
        },
        {
            header:'수평 정렬 - 가운데 정렬',
            description:'부모 태그에 "justify-center" 클래스 추가. 모든 자식 태그가 여백 없이 가운데로 정렬된다.',
            extra:flexVisual("justify-center"),
        },
        {
            header:'수평 정렬 - 양측 균등 정렬',
            description:'부모 태그에 "justify-sb" 클래스 추가.  1, 5번 자식이 여백 없이 양 사이드에 바짝 붙고, 나머지 자식들은 비율에 맞게 여백을 가지며 정렬된다.',
            extra:flexVisual("justify-sb"),
        },
        {
            header:'수직 정렬 - 상단 정렬',
            description:'부모 태그에 "align-start" 클래스 추가. 모든 자식 태그가 여백 없이 상단으로 정렬된다.(flex-layout을 지정하면 기본적으로 적용된다.)',
            extra:flexVisual("align-start"),
        },
        {
            header:'수직 정렬 - 하단 정렬',
            description:'부모 태그에 "align-end" 클래스 추가. 모든 자식 태그가 여백 없이 하단으로 정렬된다.',
            extra:flexVisual("align-end"),
        },
        {
            header:'수직 정렬 - 가운데 정렬',
            description:'부모 태그에 "align-center" 클래스 추가. 모든 자식 태그가 여백 없이 가운데로 정렬된다.',
            extra:flexVisual("align-center"),
        },
        {
            header:'수직 정렬 - 스트레치',
            description:'부모 태그에 "align-stretch" 클래스 추가. 자식 태그의 높이가 \'auto\'로서 부모 크기에 맞게 균등하게 늘어난다.(5개중 1개의 높이가 길 경우, 그 것에 맞춰 나머지가 늘어난다. 하지만, 부모보다 높이가 줄어들 경우 해당 항목만 줄어든다. 고정 높이가 있을 경우 무시된다.)',
            extra:flexVisual("align-stretch"),
        },
    ];

    return <Item.Group items={flexVisualDetail} />

};

export default flexVisualExample