import React from 'react';
import { shallow } from '../../enzyme.js';

import App from '../../client/index.jsx';
import VideoCollectionEntry from '../../client/components/VideoCollectionEntry.js';

describe('Video Service tests', () => {
  it('renders 100 <VideoCollectionEntry /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(VideoCollectionEntry)).toBe.have.lengthOf(100);
  });
});