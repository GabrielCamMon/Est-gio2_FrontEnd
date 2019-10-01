import React from 'react';
import { NavLink } from 'react-router-dom'

export const NavBarEditProfile =()=>(
    <div>
        <NavLink to="/users/editprofile">Perfil</NavLink>
        <NavLink to="/users/editregistrationdata">Dados Cadastrais</NavLink>
    </div>
)

export default NavBarEditProfile;