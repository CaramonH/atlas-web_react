import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

describe('BodySection Component', () => {
  beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
  afterAll(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

  it('renders a heading and paragraph with correct text', () => {
    const wrapper = shallow(
      <BodySection title="Test Title">
        <p>Test Children Node</p>
      </BodySection>
    );

    const headingText = wrapper.find('h2').text();
    const paragraphText = wrapper.find('p').text();

    expect(headingText).toBe('Test Title');
    expect(paragraphText).toBe('Test Children Node');
  });
});