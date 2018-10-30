import * as React from 'react'

class SideBar extends React.Component {
    render() {
        return (
            <nav id='demo-drawer' className='mdc-drawer mdc-drawer--permanent demo-drawer' style={{ height: '100%' }}>
                <div className='mdc-list-group'>
                    <h3 className='mdc-list-group__subheader'>Languages</h3>
                    <ul className='mdc-list mdc-list--two-line mdc-list--avatar-list demo-list demo-list--with-avatars demo-list--icon-placeholders'>
                        <li className='mdc-list-item'>
                            <span className='mdc-list-item__graphic' role='presentation'>
                                <i className='material-icons' aria-hidden='true'>folder</i>
                            </span>
                            <span className='mdc-list-item__text'>
                                Photos
                  <span className='mdc-list-item__secondary-text'>Jan 9, 2014</span>
                            </span>
                            <a href='#' className='mdc-list-item__meta material-icons'
                                aria-label='View more information' title='More info'>
                                info
                </a>
                        </li>
                        <li className='mdc-list-item'>
                            <span className='mdc-list-item__graphic' role='presentation'>
                                <i className='material-icons' aria-hidden='true'>folder</i>
                            </span>
                            <span className='mdc-list-item__text'>
                                Recipes
                  <span className='mdc-list-item__secondary-text'>Jan 17, 2014</span>
                            </span>
                            <a href='#' className='mdc-list-item__meta material-icons'
                                aria-label='View more information' title='More info'>
                                info
                </a>
                        </li>
                        <li className='mdc-list-item'>
                            <span className='mdc-list-item__graphic' role='presentation'>
                                <i className='material-icons' aria-hidden='true'>folder</i>
                            </span>
                            <span className='mdc-list-item__text'>
                                Work
                  <span className='mdc-list-item__secondary-text'>Jan 28, 2014</span>
                            </span>
                            <a href='#' className='mdc-list-item__meta material-icons'
                                aria-label='View more information' title='More info'>
                                info
                </a>
                        </li>
                    </ul>

                    <hr className='mdc-list-divider' />
                </div>
            </nav>
        )
    }
}

export default SideBar