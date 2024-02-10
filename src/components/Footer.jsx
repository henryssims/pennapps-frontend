
export default function Footer() {

    return (
        <div id="footer">
            <div id="bottom-section">
                <div className="left">
                    <div className="col">
                        <h2>PENN <br/> APPS</h2>
                        <p>&copy; 2022 PennApps <br/>contact@pennapps.com</p>
                    </div>
                    <div className="col">
                        <h6>Code of Conduct</h6>
                    </div>
                    <div className="col">
                        <h6>Facebook</h6>
                        <h6>Twitter</h6>
                        <h6>Instagram</h6>
                    </div>
                </div> 
                <div className="right">
                    <div className="col">
                        <p>Organized with support from:</p>
                        <img id="#penn-logo" src="./assets/penn-logo.png" alt="Penn Engineering" />
                    </div>
                </div>   
            </div>
        </div>
    )
}