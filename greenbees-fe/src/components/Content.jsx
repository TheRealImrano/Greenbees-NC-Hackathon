import React, { Component, useState } from 'react';
import { Level } from './Level';

// const [levelID, setLevelID] = useState(1)


class Content extends Component {
    render() {
        return (
          <Level levelID={1}/>
        )
      }
}

export default Content;