import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Events.module.sass";
import moment from 'moment'

const Events = () => {
    const [now, setNow] = useState(new Date())
    const [date, setDate] = useState({
        date: '',
        name: ''
    })
    const [timer, setTimer] = useState([])
    const completed = timer.filter(e => e.end === 'completed')

    useEffect(() => {
        const events = JSON.parse(localStorage.getItem('events'))
        if (events) {
            setTimer(events)
        }
    },[])

    setInterval(() => {
        setNow(new Date())
    }, 1000)

    const handleChange = (e) => {
        const value = e.target.value;
        setDate({
            ...date,
            [e.target.name]: value
        });
    };

    const sortedTimer = timer.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimer([...timer, date].sort())
        localStorage.setItem('events', JSON.stringify([...timer, date]))
    };
    const mapProgress = (e, index) => {
        const endDate = moment(e.date).format('YYYY-MM-DD HH:mm:ss')
        const nowDate = moment(now).format('YYYY-MM-DD HH:mm:ss')
        const duration = moment.duration(moment(endDate).diff(moment(nowDate)))
        const nowDateAsSeconds = Math.trunc(new Date().getTime()/100000000)*100000000

        const delEvent = () =>{
            timer.splice(index, 1)
            localStorage.setItem('events', JSON.stringify(timer))
        }

        if (duration.asSeconds() < 0) {
            timer.splice(index, 1, {name: e.name, date: '00:00:00', end: 'completed'})
        }
        return(
            <div key={index}>
            <div className={styles.progressMap}>
                <div className={styles.progressName}>{e.name}</div>
                <div>
                    {e.end === 'completed' ? <div className={styles.completed}>Completed</div> :
                        <div className={styles.progressDate}>{duration._data.years + 'y'} {duration._data.months + 'm'} {duration._data.days + 'd'} {duration._data.hours + 'h'} {duration._data.minutes + 'm'} {duration._data.seconds + 's'} left</div>
                    }
                </div>
                <progress className={styles.progress} value={`${new Date().getTime()-nowDateAsSeconds}`} max={`${new Date(endDate).getTime()-nowDateAsSeconds}`}/>
                <button className={styles.buttonDelEvent} onClick={delEvent}>X</button>
            </div>
            </div>
        )
    }

    return (
        <>
            <Header/>
            <div>{completed.length > 0 ? <div className={styles.valueEventEnded}>{completed.length}</div> : null}</div>
            <form onSubmit={handleSubmit}>
                <label>
                    <div className={styles.nameInput}>Name event</div>
                    <input
                        type='text'
                        onChange={handleChange}
                        name='name'
                        value={date.name}
                        maxlength="20"
                        required
                    />
                    <div className={styles.nameInput}>End date event</div>
                    <input
                        type='datetime-local'
                        onChange={handleChange}
                        name='date'
                        required
                    />
                </label>
                <button type="submit" className='Enter'>Create Timer</button>
            </form>
            <div className={styles.groupEvent}>{timer.map(mapProgress)}</div>
        </>
    )
}

export default Events
