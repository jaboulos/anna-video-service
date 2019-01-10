import React from 'react';
import { shallow } from '../../enzyme.js';

import VideoPlayer from '../../client/components/VideoPlayer.jsx';

describe('Video Player Test', () => {
  it('should have a div for video player details', () => {
    const wrapper = shallow(<VideoPlayer />);
    expect(wrapper.containsMatchingElement(<div className="video-player-details"></div>).to.equal(true));
  });
});