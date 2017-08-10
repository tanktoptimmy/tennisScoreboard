import React from 'react';
import App from '../../src/components/App';
import { shallow } from 'enzyme';

const menuObj = {};

describe('<App />', () => {
    it('should render <App />', () => {
        const wrapper = shallow(<App menu={menuObj}/>);
        expect(wrapper.text()).toEqual('Navigation Component');
    });
});
