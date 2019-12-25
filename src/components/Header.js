import React from 'react'

const Header = props => (
  <header style={props.timeout ? { display: 'none' } : {}}></header>
)

Header.propTypes = {
  onOpenArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Header
