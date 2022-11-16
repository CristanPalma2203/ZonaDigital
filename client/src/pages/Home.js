import React from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../global/gloablState'

const Home = ({ history }) => {

    const user = useRecoilValue(userAtom)

    const handleCTA = () => {
        if (user) {
            history.push('/dashboard')
        } else {
            history.push('/signup')
        }
    }

    return (
        <div className="Home">
            <div className="header">

                <div className="left">
                    <h1>Bienvenida a Zona Digital</h1>
                    <p>Almacene las existencias de su almacén y obtenga un almacenista totalmente automatizado
                     registro, con total seguridad. Stockify te da una plataforma
                donde podrás interactuar y gestionar tus stocks.</p>
                    <button onClick={() => handleCTA()} className="cta rev">{user ? "Ir al panel de control" : "Get Started"}</button>
                </div>

                <div className="right">
                    <img src={require("../assets/home_back.png")} alt="" />
                </div>
            </div>
            <div className="divider"></div>
            <div className="main-body">
                <div className="features">
                    <h1>Características</h1>
                    <div className="items">
                        <div className="item">
                            <img src="https://imgur.com/JAIyBSS.png"  width="300px" height="300px" alt="" />
                            <p>Adelanta operaciones en tus Bolsas con nuestra app</p>
                        </div>
                        <div className="item">
                            <img src="https://imgur.com/zqIdRyZ.png" width="300px" height="300px" alt="" />
                            <p>Nos preocupamos por su seguridad, así que lo tenemos asegurado.</p>
                        </div>
                        <div className="item">
                            <img src="https://i.imgur.com/ISxxkzh.png" alt="" width="300px" height="300px" />
                            <p>UI/UX creativo simple para usted</p>
                        </div>
                    </div>
                </div>

                <div className="about-us">
                    <h1>Sobre nosotros</h1>
                    <p className="desc">Miembros del Equipo Web Masters</p>
                    <div className="items">
                    <div className="item">
                            
                            <img height="300px" width="300px" src={require("../assets/evel.PNG")} alt="" />
                            <p>Evelyn Rodriguez </p>
                        </div>
                        <div className="item">
                      
                            <img height="300px" width="300px" src={require("../assets/222.PNG")} alt="" />
                            <p>Alex Palma</p>
                        </div>
                        <div className="item">
                        <img height="300px" width="300px" src={require("../assets/dwdw.PNG")} alt="" />
                            <p>Josue Flores</p>
                        </div>
                        <div className="item">
                            <img height="300px" width="300px" src={require("../assets/w.jpeg")} alt="" />
                            <p>Jeremias Escobar</p>
                        </div>
                        <div className="item">
                            <img src="" height="300px" width="300px" alt="" />
                            <p>Gabriel Guidos</p>
                        </div>
                        <div className="item">
                            <img src="" height="300px" width="300px" alt="" />
                            <p>Billy Mejia</p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
