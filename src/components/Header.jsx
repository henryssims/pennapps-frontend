import Timer from './Timer.jsx';
import banner from '../assets/banner.png';

export default function Header() {

    return (
        <div id='header'>
            <div id='main-info'>
                <div id="banner-date">
                    <img id="banner" src={banner} alt="PennApps XXIII" />
                    <p id='date'>September 8-10, 2023</p>
                </div>
                <Timer />
            </div>
        </div>
    )
}