import React from 'react';
import { shallow } from '../../enzyme.js';

import App from '../../client/components/App.jsx';
import VideoCollectionEntry from '../../client/components/VideoCollectionEntry.jsx';

describe('Video Collection Test', () => {
  it('should sort videos by date initially.', () => {
    const wrapper = shallow(<App />);
    const sortVideosBy = wrapper.state().value;
    expect(sortVideosBy).toEqual('Date');
  });
});