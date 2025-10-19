import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import SketchyLongWrapper from '../components/wrappers/SketchyLongWrapper'
import Crown from '../assets/images/crown.png'

import './Leaderboard.css'

const Leaderboard = ({ closeLeaderboardMenu }) => {

    const dummyPlayers = [
        {
            name: 'Player 1',
            avatar: '0001_character',
            crowns: 0
        },
        {
            name: 'Player 2',
            avatar: '0001_character',
            crowns: 0
        },
        {
            name: 'Player 3',
            avatar: '0001_character',
            crowns: 0
        },
        {
            name: 'Player 4',
            avatar: '0001_character',
            crowns: 0
        },
        {
            name: 'Player 5',
            avatar: '0001_character',
            crowns: 0
        },
        {
            name: 'Player 6',
            avatar: '0001_character',
            crowns: 0
        },
        {
            name: 'Player 7',
            avatar: '0001_character',
            crowns: 0
        },
        {
            name: 'Player 8',
            avatar: '0001_character',
            crowns: 0
        },
        {
            name: 'Player 9',
            avatar: '0001_character',
            crowns: 0
        },
        {
            name: 'Player 10',
            avatar: '0001_character',
            crowns: 0
        }
    ]

    const [playerRank, setPlayerRank] = useState('Unranked')
    const [playerCrowns, setPlayerCrowns] = useState(0)
    const [rank1Player, setRank1Player] = useState()
    const [rank2Player, setRank2Player] = useState()
    const [rank3Player, setRank3Player] = useState()
    const [topPlayers, setTopPlayers] = useState(dummyPlayers)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    useEffect(() => {
        const getLeaderboardRank = async () => {
            try {
                const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/leaderboards/crowns`, 
                    'GET',
                )
                setRank1Player(data.users[0])
                setRank2Player(data.users[1])
                setRank3Player(data.users[2])
                setTopPlayers(data.users)
            } catch (err) {
                setShowError(true)
            }
        }
        getLeaderboardRank()
    }, [])

    useEffect(() => {
        const getLeaderboardRank = async () => {
        try {
            const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/leaderboards/crowns/${auth.id}`, 
                'GET',
                {Authorization: 'Bearer ' + auth.token}
            )
            setPlayerRank(data.leaderboardRank)
            setPlayerCrowns(data.crowns)
            } catch (err) {
                setShowError(true)
            }
        }
        getLeaderboardRank()
    }, [])

    const leaderboardTopPlayers = topPlayers.slice(3, 10).map((player, index) => {
        return (
            <div className='leaderboard_player center' key={player.name}>
                <div className='leaderboard_player_rank center'>
                    {index+4}
                </div>
                <div className='leaderboard_player_avatar-wrapper center'>
                    <img className='leaderboard_player_avatar' src={`./avatars/${player.avatar}.svg`}></img>
                </div>
                <div className='leaderboard_player_name-wrapper'>
                    <div className='leaderboard_player_name'>
                        {player.name}
                    </div>
                </div>
                <div className='leaderboard_player_crowns-wrapper center'>
                    {<img className='leaderboard_player_crowns_icon' src={Crown} />}
                    {<div className='leaderboard_player_crowns'>{player.crowns}</div>}
                </div>
            </div>
        )
    })

    return (
        <SketchyLongWrapper showCloseButton={true} onCloseHandler={closeLeaderboardMenu}>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <div className='leaderboard-container ohp center'>
                <div className='leaderboard ohpw center'>
                    <div className='leaderboard_title-wrapper ohpw center'>
                        LEADERBOARD (TOP 10)
                    </div>
                    <div className='leaderboard_players-wrapper ohp center'>
                        <div className='top_3_players ohpw center'>
                            <div className='rank_2_player top_3_player ohph center'>
                                <div className='top_player_details ohpw center'>
                                    <div className='leaderboard_player_avatar-wrapper center'>
                                        {rank2Player && <img className='leaderboard_player_avatar' src={`./avatars/${rank2Player.avatar}.svg`} />}
                                    </div>
                                    <div className='leaderboard_top_player_name-wrapper ohpw'>
                                        <div className='leaderboard_player_name'>
                                            {rank2Player && rank2Player.name}
                                        </div>
                                    </div>
                                    <div className='leaderboard_player_crowns-wrapper ohpw center'>
                                        {rank2Player && <img className='leaderboard_player_crowns_icon' src={Crown} /> }
                                        {rank2Player && <div className='leaderboard_player_crowns'>{rank2Player.crowns}</div> }
                                    </div>
                                </div>
                                <div className='top_player_rank_2 ohpw center'>
                                    2
                                </div>
                            </div>
                            <div className='rank_1_player top_3_player ohph'>
                                <div className='top_player_details ohpw center'>
                                    <div className='leaderboard_player_avatar-wrapper center'>
                                        {rank1Player && <img className='leaderboard_player_avatar' src={`./avatars/${rank1Player.avatar}.svg`} />}
                                    </div>
                                    <div className='leaderboard_top_player_name-wrapper ohpw'>
                                        <div className='leaderboard_player_name'>
                                            {rank1Player && rank1Player.name}
                                        </div>
                                    </div>
                                    <div className='leaderboard_player_crowns-wrapper ohpw center'>
                                        {rank1Player && <img className='leaderboard_player_crowns_icon' src={Crown} />}
                                        {rank1Player && <div className='leaderboard_player_crowns'>{rank1Player.crowns}</div>}
                                    </div>
                                </div>
                                <div className='top_player_rank_1 ohpw center'>
                                    1
                                </div>
                            </div>
                            <div className='rank_3_player top_3_player ohph'>
                                <div className='top_player_details ohpw center'>
                                    <div className='leaderboard_player_avatar-wrapper center'>
                                        {rank3Player && <img className='leaderboard_player_avatar' src={`./avatars/${rank3Player.avatar}.svg`} />}
                                    </div>
                                    <div className='leaderboard_top_player_name-wrapper ohpw'>
                                        <div className='leaderboard_player_name'>
                                            {rank3Player && rank3Player.name}
                                        </div>
                                    </div>
                                    <div className='leaderboard_player_crowns-wrapper ohpw center'>
                                        {rank3Player && <img className='leaderboard_player_crowns_icon' src={Crown} />}
                                        {rank3Player && <div className='leaderboard_player_crowns'>{rank3Player.crowns}</div>}
                                    </div>
                                </div>
                                <div className='top_player_rank_3 ohpw center'>
                                    3
                                </div>
                            </div>
                        </div>
                        <div className='leaderboard_players ohpw center'>
                            {topPlayers && leaderboardTopPlayers}
                            <div className='ohpw' style={{height: '1px'}}></div>
                        </div>
                    </div>
                </div>
                <div className='player_rank-container ohpw center'>
                    <div className='player_rank center'>
                        Your Rank: {playerRank}
                    </div>
                    <div className='leaderboard_player_crowns-wrapper center'>
                        <img className='leaderboard_player_crowns_icon' src={Crown} />
                        <div className='leaderboard_player_crowns'>{playerCrowns}</div>
                    </div>
                </div>
            </div>
        </SketchyLongWrapper>
    )
}

export default Leaderboard