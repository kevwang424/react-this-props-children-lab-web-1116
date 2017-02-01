const React = require('react')

class ThemedDecorations extends React.Component{

  render(){

    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
          className: this.props.theme
      });
    })

    return (
        <div>
          {childrenWithWrapperDiv}
        </div>
    )
  }
}


module.exports = ThemedDecorations
