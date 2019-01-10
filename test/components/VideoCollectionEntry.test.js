import React from 'react';
import { shallow } from '../../enzyme.js';

import VideoCollectionEntry from '../../client/components/VideoCollectionEntry.jsx';

describe('Video Service tests', () => {
  it('should have a div for linking to video player', () => {
    const wrapper = shallow(<VideoCollectionEntry />);
    expect(wrapper.containsMatchingElement( <div className="link-to-video"></div>).to.equal(true));
  });
});