import Timer from './Timer.jsx';

export default function Header() {

    return (
        <div id='header'>
            <div id='main-info'>
                <div id="banner-date">
                    <img id="banner" src="../src/assets/banner.png" alt="PennApps XXIII" />
                    <p id='date'>September 8-10, 2023</p>
                </div>
                <Timer />
            </div>
        </div>
    )
}