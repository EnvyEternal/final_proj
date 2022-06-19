import React, {useState, useEffect} from "react";
import {acceptOffer, getForModeration, rejectOffer} from "../../api/rest/restController";
import { connect } from 'react-redux'
import {getOffersForModerator} from "../../actions/actionCreator";
import styles from './moderator.module.sass'

const Moderator = (props) => {
    const createDataAction = props.createDataAction;
    const [offers, setOffers] = useState([])
    const [page, setPage] = useState(1)
    const [reload, setReload] = useState(false)
    const nextPage = () => {
        setPage(page + 1)
    }

    const prevPage = () => {
        if(page > 1) {
        setPage(page - 1)}
    }

    const get = async () => {
        const result = await getForModeration(page);
        createDataAction(result.data)
    }

    const setOffersForModerator = async (data) => {
        if(data.length > 0){
            await setOffers(data)
        }
    }

    setTimeout(() => {
            setOffersForModerator(props.offers).catch(e => console.log(e))
        }, 1000)

    useEffect(async () => {
        await get().catch(e => console.log(e))
    }, [page, reload]);

    const mapOffer = (i, index) => {
        const id = i.id
        const accept = async () => {
            const result = window.confirm(
                'Are you sure you want to accept this offer?'
            )
            if(result) {
                setReload(!reload)
                await acceptOffer(id);
            }
        }
        const reject = async () => {
            const result = window.confirm(
                'Are you sure you want to reject this offer?'
            )
            if(result) {
                setReload(!reload)
                await rejectOffer(id);
            }
        }
        return (
            <div key={index} className={styles.elementoffer}>
                <div className={styles.info}>
                    <div>Status: {i.status}</div>
                    <div className={styles.offer}>Offer: {i.text}</div>
                </div>
                <div className={styles.buttons}>
                <button onClick={accept}>Accept</button>
                <button onClick={reject}>Reject</button>
                </div>
            </div>)
    }

    return <>
        <div className={styles.container}>
            <div>{offers.map(mapOffer)}</div>
            <div className={styles.nextprev}>
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
        </>

}
const mapStateToProps = (state) => {return state.dataForModeratorStates}


const mapDispatchToProps = (dispatch) => {
    return {
            createDataAction: (data) => { return dispatch(getOffersForModerator(data))}

    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Moderator)