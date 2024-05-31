// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-nav-heading">Left Navbar Menu</h1>
              <ul className="left-nav-list">
                <li className="left-nav-item">Item 1</li>
                <li className="left-nav-item">Item 2</li>
                <li className="left-nav-item">Item 3</li>
                <li className="left-nav-item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent && (
            <div className="body-content-container">
              <h1 className="body-content-heading">Content</h1>
              <p className="body-content-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1 className="right-nav-heading">Right Navbar</h1>
              <p className="right-nav-item">Ad 1</p>
              <p className="right-nav-item">Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
