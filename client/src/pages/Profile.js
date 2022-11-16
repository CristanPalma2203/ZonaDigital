import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { userAtom } from '../global/gloablState'
import Axios from 'axios'

const Profile = () => {
    const [user, setUser] = useRecoilState(userAtom)

    const [whno, setWhno] = useState(user.user.warehouseNo)

    const [name, setName] = useState(user.user.name)
    const [email, setEmail] = useState(user.user.email)
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [errors, setErrors] = useState(null)

    const handleSaveUser = () => {
        Axios.post(`${process.env.REACT_APP_API_URL}/api/update`,
            { name, email, password: newPassword, currentPassword },
            {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            })
            .then(res => {
                setErrors(null)
                localStorage.setItem('user', JSON.stringify(res.data))
                setUser({
                    token : user.token,
                    user: res.data
                });
            })
            .catch(err => {
                if (Array.isArray(err.response.data.errors)) {
                    setErrors(err.response.data.errors);
                } else {
                    setErrors([{ msg: err.response.data.error }]);
                }
            });
    }

    const updateWareHouse = () => {
        Axios.post(`${process.env.REACT_APP_API_URL}/stocks/updatewarehouse`,
            {
                user: user.user,
                warehouseNo: whno,
            },
            {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            }
        )
            .then(res => {
                localStorage.setItem('user', JSON.stringify({
                    token: user.token,
                    user: res.data
                }))
                setUser({
                    token: user.token,
                    user: res.data
                });
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="Profile">
            <h1>Perfil de {user.user.name && user.user.name}</h1>
            <div className="container">
                <div className="static">
                    {user.user.name &&
                        <div className="fullname">
                            <h3>Nombre Completo</h3>
                            <h5 >{user.user.name}</h5>
                        </div>
                    }
                    {user.user.email &&
                        <div className="email">
                            <h3>Correo</h3>
                            <h5 >{user.user.email}</h5>
                        </div>
                    }
                    {
                        user.user.warehouseNo &&
                        <div className="warehouse">

                            <h3>Capacidad de almacén</h3>
                            {user.user.warehouseNo}
                            <h3>Editar capacidad</h3>
                            <input type="text" value={whno} onChange={(e) => setWhno(e.target.value)}/>
                            <button className="rev" onClick={() => updateWareHouse()}>Actualizar</button>
                        </div> 
                    }
                    <div className="spacer"></div>
                </div>
                <div className="edit-details">
                    <h3>Editar Detalles</h3>
                    <label htmlFor="name">Nombre Completo</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="email">Correo</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="currentPassword">Contraseña Actual</label>
                    <input type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                    <label htmlFor="newPassword">Nueva Contraseña</label>
                    <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <button className="save rev" onClick={() => handleSaveUser()}>Guardar</button>
                    {
                        errors && errors.map(({ msg }, index) => <div key={index} className="error">{msg}</div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
