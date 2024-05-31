// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onContentCheckBox = () => {
        onToggleShowContent(!showContent)
      }
      const onNavLeftCheckBox = () => {
        onToggleShowLeftNavbar(!showLeftNavbar)
      }
      const onNavRightCheckBox = () => {
        onToggleShowRightNavbar(!showRightNavbar)
      }

      return (
        <div className="controller-container">
          <h1 className="heading">Layout</h1>
          <div className="controller-list">
            <div className="list-item">
              <input
                type="checkbox"
                name="content"
                id="content"
                defaultChecked
                onChange={onContentCheckBox}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="list-item">
              <input
                type="checkbox"
                name="leftnavbar"
                id="leftnavbar"
                defaultChecked
                onChange={onNavLeftCheckBox}
              />
              <label htmlFor="leftnavbar">Left Navbar</label>
            </div>
            <div className="list-item">
              <input
                type="checkbox"
                name="rightnavbar"
                id="rightnavbar"
                defaultChecked
                onChange={onNavRightCheckBox}
              />
              <label htmlFor="rightnavbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
