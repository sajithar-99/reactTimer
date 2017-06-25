var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
              <ul className="menu">
                  <li className="menu-text">ReactJS Timer</li>
                  <li>
                  <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                 </li>
                  <li>
                 <Link to="/" activeClassName="active-link">Counter</Link>
                 </li>
            </ul>
        </div>
        <div className="top-bar-right">
           <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://instagram.com/_lonecomrade_" target="_blank">sajithar99</a>
            </li>
           </ul>
        </div>

      </div>
    );
  }
});

module.exports = Nav;
