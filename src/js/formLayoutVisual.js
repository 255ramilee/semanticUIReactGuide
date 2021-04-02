import React from 'react'
import classnames from 'classnames'
import { Item, List } from 'semantic-ui-react';

const formVisualExample = () => {

    const formVisual = (newClassName) => (
        <div className={classnames("flex-layout" , newClassName)}>
            <div className="box">1</div>
            <div className="box">2</div>
            <div className="box">3</div>
            <div className="box">4</div>
            <div className="box">5</div>
        </div>
    );

    const formGuideText = (formGuide1, formGuide2) => {
        const guideTxt1 = [
            {id:1, msg:formGuide1},
            {id:2, msg:formGuide2},
        ];
    
        const guideList = guideTxt1.map((guideTxt, index) => <List.Item key={index}>{guideTxt.msg}</List.Item>);
    
        return <List>{guideList}</List>;
        
    };

    const formVisualDetail = [
        {
            header:'Default',
            description:formGuideText(
                '폼 필드 레이아웃 기본 정렬 형태 -> 레이블: 블럭요소(단독으로 한 줄 차지) / 필드: 블럭요소 (개수를 지정하지 않으면 단독으로 한 줄 차지)',
                (
                    <span>
                        한 row에 10개 이하 field이면서 모두 일정한 너비를 가지는 경우 : 해당 필드를 <strong className="txt-color01">"필드개수 + fields"</strong> 클래스를 적용한 div 태그로 감싸서 사용하며, 1개일 경우엔 부모 태그 생략가능.<strong className="txt-color01">(field가 5개에서 4개로 줄어들 경우 빈 공간을 안 메꿔준다.)</strong>
                    </span>
                ),
            ),
            extra:formVisual(""),
        },
        {
            header:'수평 정렬 - 좌측 정렬',
            description:'부모 태그에 "justify-start" 클래스 추가. 모든 자식 태그가 여백 없이 좌측으로 정렬된다.(flex-layout을 지정하면 기본적으로 적용된다.)',
            extra:formVisual("justify-start"),
        },
        {
            header:'수평 정렬 - 우측 정렬',
            description:'부모 태그에 "justify-end" 클래스 추가. 모든 자식 태그가 여백 없이 우측으로 정렬된다.',
            extra:formVisual("justify-end"),
        },
        {
            header:'수평 정렬 - 가운데 정렬',
            description:'부모 태그에 "justify-center" 클래스 추가. 모든 자식 태그가 여백 없이 가운데로 정렬된다.',
            extra:formVisual("justify-center"),
        },
        {
            header:'수평 정렬 - 양측 균등 정렬',
            description:'부모 태그에 "justify-sb" 클래스 추가.  1, 5번 자식이 여백 없이 양 사이드에 바짝 붙고, 나머지 자식들은 비율에 맞게 여백을 가지며 정렬된다.',
            extra:formVisual("justify-sb"),
        },
        {
            header:'수직 정렬 - 상단 정렬',
            description:'부모 태그에 "align-start" 클래스 추가. 모든 자식 태그가 여백 없이 상단으로 정렬된다.(flex-layout을 지정하면 기본적으로 적용된다.)',
            extra:formVisual("align-start"),
        },
        {
            header:'수직 정렬 - 하단 정렬',
            description:'부모 태그에 "align-end" 클래스 추가. 모든 자식 태그가 여백 없이 하단으로 정렬된다.',
            extra:formVisual("align-end"),
        },
        {
            header:'수직 정렬 - 가운데 정렬',
            description:'부모 태그에 "align-center" 클래스 추가. 모든 자식 태그가 여백 없이 가운데로 정렬된다.',
            extra:formVisual("align-center"),
        },
        {
            header:'수직 정렬 - 스트레치',
            description:'부모 태그에 "align-stretch" 클래스 추가. 자식 태그의 높이가 \'auto\'로서 부모 크기에 맞게 균등하게 늘어난다.(5개중 1개의 높이가 길 경우, 그 것에 맞춰 나머지가 늘어난다. 하지만, 부모보다 높이가 줄어들 경우 해당 항목만 줄어든다. 고정 높이가 있을 경우 무시된다.)',
            extra:formVisual("align-stretch"),
        },
    ];

    return <Item.Group items={formVisualDetail} />

};

export default formVisualExample