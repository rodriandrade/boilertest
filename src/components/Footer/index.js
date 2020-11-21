import React from 'react';
import '../Footer/index.css';
import Fecha from '../Fecha';
import Boton from '../Boton';

const Footer = ( {texto, fecha} ) => {
    //const { texto, fecha } = props
    return(


        <footer className="footer">
            <div className="content has-text-centered">
                <p><strong>Bulma</strong> The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed.</p>
                <h2>{ texto }</h2>
                <Fecha fecha={fecha} />
                <Boton caption={'contactanos'}/>
            </div>
        </footer>

    )
}

export default Footer;
