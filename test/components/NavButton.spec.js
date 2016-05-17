import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import NavButton from '../../app/components/NavButton';

describe('<NavButton />', () => {
  it('renders the dest label', () => {
    const destLabel = 'destLabel';
    const wrapper = shallow(<NavButton destLabel={destLabel} buttonHandler={() => {}} />);

    assert(wrapper.contains(destLabel));
  });

  it('calls the button handler', () => {
    const buttonHandler = sinon.spy();
    const wrapper = shallow(<NavButton destLabel="" buttonHandler={buttonHandler} />);

    wrapper.simulate('press');

    assert(buttonHandler.called);
  });
});
