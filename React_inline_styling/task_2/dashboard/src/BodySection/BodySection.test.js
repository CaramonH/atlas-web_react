import React from 'react';
import { shallow, mount } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it('renders an h2 and p element with correct text', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find('h2').text()).toBe('test title');
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});