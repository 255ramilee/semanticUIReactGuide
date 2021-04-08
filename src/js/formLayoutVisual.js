import React from 'react'
import classnames from 'classnames'
import { Item, List, Form, Input, TextArea, Button, Select, Radio, Checkbox, Dropdown } from 'semantic-ui-react';



class formVisualExample extends React.Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state


        const formVisualExamplee = () => {
            /*------------------------------- guide text -------------------------------*/
            const formGuideText = (formGuide1, formGuide2, formGuide3, formGuide4, formGuide5, formGuide6) => {
                const guideTxt1 = [
                    {id:1, msg:formGuide1},
                    {id:2, msg:formGuide2},
                    {id:3, msg:formGuide3},
                    {id:4, msg:formGuide4},
                    {id:5, msg:formGuide5},
                    {id:6, msg:formGuide6},
                ];
            
                const guideList = guideTxt1.map((guideTxt, index) => <List.Item key={index}>{guideTxt.msg}</List.Item>);
            
                return <List>{guideList}</List>;
                
            };
        
            /*------------------------------- form elements -------------------------------*/
            const innerBoxStyles= {
                margin:"0 10px",
                padding:"20px",
                border:"1px solid #fff"
            };
            const options = [
                { key: 'h', text: '한식', value: '한식' },
                { key: 'y', text: '양식', value: '양식' },
                { key: 'j', text: '중식', value: '중식' },
                { key: 'i', text: '일식', value: '일식' },
            ];
            const formField = (formElement) => (
                <Form>
                    {formElement}
                </Form>
            );
            
            /* default form field(depth2) */
            const formFieldEqual = () => (
                <Form.Group widths='equal'>
                  <Form.Input fluid label='First name' placeholder='EX.레오나르도' />
                  <Form.Input fluid label='Middle name' placeholder='EX.영철' />
                  <Form.Input fluid label='Last name' placeholder='EX.손' />
                </Form.Group>
            );
            const formFieldEqual2 = () => (
                <Form.Group widths='3'>
                  <Form.Input fluid label='First name' placeholder='EX.레오나르도' />
                  <Form.Input fluid label='Last name' placeholder='EX.손' />
                </Form.Group>
            );
            const formFields = () => {
                const formFieldsList = [
                    {id:1, tag:(
                        <Form.Group>
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        <Form.Input placeholder='1 wide' width={1} />
                        </Form.Group>
                    )},
                    {id:2, tag:(
                        <Form.Group>
                        <Form.Input placeholder='4 wide' width={4} />
                        <Form.Input placeholder='4 wide' width={4} />
                        <Form.Input placeholder='4 wide' width={4} />
                        <Form.Input placeholder='4 wide' width={4} />
                        </Form.Group>
                    )},
                    {id:3, tag:(
                        <Form.Group>
                        <Form.Input placeholder='2 wide' width={2} />
                        <Form.Input placeholder='12 wide' width={12} />
                        <Form.Input placeholder='2 wide' width={2} />
                        </Form.Group>
                    )},
                    {id:4, tag:(
                        <Form.Group>
                        <Form.Input placeholder='8 wide' width={8} />
                        <Form.Input placeholder='5 wide' width={5} />
                        <Form.Input placeholder='3 wide' width={3} />
                        </Form.Group>
                    )},
                ];
            
                const formFields = formFieldsList.map((formFieldsTag, index) => <List.Item key={index}>{formFieldsTag.tag}</List.Item>);
            
                return <List>{formFields}</List>;
            };
            const formVisualDetailInner1 = () => {
        
                const detailInnerList = [
                    {
                        header:'균등 필드',
                        description:'한 row에 10개 이하 field이면서 모두 일정한 너비를 가지는 경우 : 해당 필드를 "<Form.Group widths="equal">" 폼 그룹 태그로 감싸서 사용하며, 1개일 경우엔 부모 태그 생략가능.(field가 3개에서 2개로 줄어들 경우 빈 공간을 메꿔준다.)',
                        extra:formField(formFieldEqual()),
                    },
                    {
                        header:'균등 필드 - 필드 개수 직접 지정(밑에 예시는 필드 개수를 3개로 지정한 상태)',
                        description:'한 row에 10개 이하 field이면서 모두 일정한 너비를 가지는 경우 : 해당 필드를 "<Form.Group widths="필드개수">"폼 그룹 태그로 감싸서 사용하며, 1개일 경우엔 부모 태그 생략가능.(field가 3개에서 2개로 줄어들 경우 빈 공간을 안 메꿔준다.)',
                        extra:formField(formFieldEqual2()),
                    },
                    {
                        header:'필드 - 필드 너비 직접 지정',
                        description:'한 row에 10개 초과 또는 10이하이면서 개별 너비를 지정하고싶은 경우 :"<Form.Group>" 폼 그룹 태그로 감싼 후, 하위 field 태그에서 개별로 너비값 조정. 하위 field 태그에선 1 ~ 12 범위로 너비 조정 가능 하위 태그 클래스는"<Form.Input width={필드너비}>"에서 width 속성에 숫자로 입력하여 사용한다.',
                        extra:formField(formFields()),
                    },
               ];
        
               return <Item.Group items={detailInnerList} style={innerBoxStyles} />
            };
        
        
            /* inline form field(depth2) */
            const radioInline = () => (
                <Form.Group inline>
                    <label>과일</label>
                  <Form.Field
                    control={Radio}
                    label='복숭아'
                    value='pe'
                    checked={value === 'pe'}
                    onChange={this.handleChange}
                  />
                  <Form.Field
                    control={Radio}
                    label='망고'
                    value='ma'
                    checked={value === 'ma'}
                    onChange={this.handleChange}
                  />
                  <Form.Field
                    control={Radio}
                    label='오렌지'
                    value='or'
                    checked={value === 'or'}
                    onChange={this.handleChange}
                  />
                </Form.Group>
            );
            const checkboxInline = () => (
                <Form.Group inline>
                    <label>채소</label>
                  <Form.Field
                    control={Checkbox}
                    label='청경채'
                  />
                  <Form.Field
                    control={Checkbox}
                    label='무'
                  />
                  <Form.Field
                    control={Checkbox}
                    label='버섯'
                  />
                </Form.Group>
            );
            const mixInline = () => (
                <Form.Group inline>
                    <label>음식</label>
                    <Form.Field 
                        control={Input}
                        placeholder="제일 좋아하는 음식은요?"
                    />
                    <Form.Field 
                        control={Input}
                        type='password'
                        placeholder="두번째로 좋아하는 음식은요?"
                        width={3}
                    />
                    <label>가장 기억에 남는 떡볶이는 뭔가요?</label>
                  <Form.Field
                    control={TextArea}
                    width={5}
                  />
                  
                </Form.Group>
            );
            const textField = () => (
                <Form.Group inline>
                    <label>음식</label>
                    <Form.Field 
                        control={Input}
                        placeholder="제일 좋아하는 음식은요?"
                    />
                    <Form.Field 
                        control={Input}
                        type='password'
                        placeholder="두번째로 좋아하는 음식은요?"
                        width={3}
                    />
                    <label>음식종류</label>
                    <Form.Field>
                        <Dropdown
                            placeholder='Select Friend'
                            fluid
                            selection
                            options={options}
                            className='select-test'
                        />
                    </Form.Field>
                      
                    <label>채소</label>
                  <Form.Field
                    control={Checkbox}
                    label='청경채'
                  />
                  <Form.Field
                    control={Checkbox}
                    label='무'
                  />
                  <Form.Field
                    control={Checkbox}
                    label='버섯'
                  />
                  <Form.Field control={Button}>Submit</Form.Field>
                    
                </Form.Group>
            );
            const formVisualDetailInner2 = () => {
        
                const detailInnerList = [
                    {
                        header:'checkbox',
                        description:'',
                        extra:formField(checkboxInline()),
                    },
                    {
                        header:'radio button',
                        description:'',
                        extra:formField(radioInline()),
                    },
                    {
                        header:'text field',
                        description:'',
                        extra:formField(mixInline()),
                    },
                    {
                        header:'mixed elements',
                        description:'',
                        extra:formField(textField()),
                    },
               ];
        
               return <Item.Group items={detailInnerList} style={innerBoxStyles} />
            };
        
        
            //form elements layout
            const formVisualDetail = [
                {
                    header:'Default',
                    description:formGuideText(
                        '- 폼 필드 레이아웃 기본 정렬 형태 -> 레이블: 블럭요소(단독으로 한 줄 차지) / 필드: 블럭요소 (개수를 지정하지 않으면 단독으로 한 줄 차지)',
                        '- 필드: 블럭요소 (개수를 지정하지 않으면 단독으로 한 줄 차지)',
                        '- 자세한 예시는 하단 참고'
                    ),
                    extra:formVisualDetailInner1(),
                    
                },
                {
                    header:'Inline 정렬',
                    description:formGuideText(
                        '- 폼 필드 레이아웃 인라인 정렬 형태(한 줄에 표현되는 형태) -> 레이블: 인라인요소(레이블 크기만큼 차지) / 필드: 인라인요소 (필드 크기만큼 차지)',
                        '- 인라인 정렬에선 dropdown 항목의 너비값은 field 너비에 따라 늘어나지 않는다. inline style은 함수로 만들어서 적용 가능하다. width/height 값 또는 부득이한 경우를 제외하고선 클래스로 style을 관리하도록 한다.',
                        '- 인라인 정렬에선 field별 개별 레이블이라도 field 태그 밖에 위치 시켜야 한다.',
                        '- 자세한 예시는 하단 참고'
                    ),
                    extra:formVisualDetailInner2(),
                    
                },
                {
                    header:'Column/Inline 정렬 + 버튼',
                    description:formGuideText(
                        '- form요소 바로 옆에 버튼이 위치하는 경우 inline 정렬을 사용한다',
                        '- column 정렬에선 버튼도 column으로 인식되어 한 줄을 차지한다.',
                        '- 자세한 예시는 하단 참고'
                    ),
                    extra:formVisualDetailInner2(),
                    
                },
            ];
                
            return <Item.Group items={formVisualDetail} />
        
        };

        return (

            formVisualExamplee()
        )
    }
}


export default formVisualExample