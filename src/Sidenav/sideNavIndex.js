import React, { Component } from 'react';
import { Button, SideNav, SideNavItem } from 'react-materialize';
import { NavLink } from 'react-router-dom';



export default class SideNavApp extends Component {

    render() {

        return (
            <SideNav
                trigger={<Button>Menu</Button>}
                options={{ closeOnClick: true }}
            >
                <SideNavItem userView
                    user={{
                        background: 'https://st2.depositphotos.com/1813957/5624/i/950/depositphotos_56245477-stock-photo-dark-turquoise-background.jpg',
                        image: 'https://scontent.fscl11-2.fna.fbcdn.net/v/t1.0-9/29214112_10156267526921882_4810934481911283712_n.jpg?_nc_cat=101&_nc_ht=scontent.fscl11-2.fna&oh=bc2447ab7f87fd8850c1ce5fb33e08f7&oe=5CF3F4BA',
                        name: 'Carito Da Silva',
                        email: 'caritodasilva@gmail.com'

                    }}
                />


                <NavLink to='/home'>Pelis más Populares</NavLink>

                <NavLink to='/home'>Pelis en Estreno</NavLink>
                <SideNavItem divider />
                <SideNavItem subheader>Perfil</SideNavItem>
                <NavLink to='/favoritos'>Mi colección</NavLink>
            </SideNav>
        )
    }
}