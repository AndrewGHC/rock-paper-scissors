import React from 'react';
import test from 'ava';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './Layout';

configure({ adapter: new Adapter() });

test('renders children in the main element', (t) => {
  const TestComponent = () => <div>hello</div>;
  const wrapper = mount(<Layout><TestComponent /></Layout>);
  t.true(wrapper.find('main').contains(TestComponent));
});
