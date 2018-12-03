import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab: 0
    }
  }

  render(props){
    let tab = this.props.panes
    return(
      <div>
        <ul>
          {
            tab.map((tab) => <li>{tab.title}:{tab.content}</li>)
          }
        </ul>

      </div>
    )
  }
}

export default Tabs
