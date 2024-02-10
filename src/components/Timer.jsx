import { useState, useEffect } from 'react';

export default function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const dueDate = "September 8, 2024, 18:00:00 EST";

    const getTime = () => {
        const time = Date.parse(dueDate) - Date.now();

        if (time < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));    
        }
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(dueDate), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id='time-container'>
            <div className='time-section'>
                <h3>{days}</h3>
                <p>DAYS</p>
            </div>
            <div className='time-section'>
                <h3>{hours}</h3>
                <p>HOURS</p>
            </div>
            <div className='time-section'>
                <h3>{minutes}</h3>
                <p>MINUTES</p>
            </div>
            <div className='time-section'>
                <h3>{seconds}</h3>
                <p>SECONDS</p>
            </div>
        </div>

    )
}