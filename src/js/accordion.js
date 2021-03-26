import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

import FlexboxText from "./flexBoxText";
import FlexBoxVisual from "./flexBoxVisual";
import FormLayoutText from "./formLayoutText";
import FormLayoutVisual from "./formLayoutVisual";

export default class AccordionLayout extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <span>Flex Layout (Not a semantic UI function)</span>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <FlexboxText />
            <FlexBoxVisual />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <span>Form field layout</span>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <FormLayoutText />
          <FormLayoutVisual />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <span>Form element</span>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}