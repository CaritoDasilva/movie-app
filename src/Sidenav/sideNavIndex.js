import React, { Component } from 'react';
import { Button, SideNav, SideNavItem } from 'react-materialize'


export default class SideNavApp extends Component {
    render() {

        return (
            <SideNav
                trigger={<Button>SIDE NAV DEMO</Button>}
                options={{ closeOnClick: true }}
            >
                <SideNavItem userView
                    user={{

                        name: 'John Doe',
                        email: 'jdandturk@gmail.com'
                    }}
                />
                <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                <SideNavItem href='#!second'>Second Link</SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>Subheader</SideNavItem>
                <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
            </SideNav>
        )
    }
}