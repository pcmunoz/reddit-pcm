import React from 'react';
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class MenuContainer extends React.Component {
    state = {
        activeItem: this.props.activeItem
    }

    handleItemClick = (e, { name }) => this.props.history.push(`/`)
    
    render() { 
        const {activeItem} = this.state;
        return (
            <Menu>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>
                {activeItem !== 'home' &&
                    <Menu.Item
                        name='detail'
                        active={activeItem === 'detail'}
                    >
                        Detail
                    </Menu.Item>
                }
            </Menu>
        );
    }
}

export default withRouter(MenuContainer);