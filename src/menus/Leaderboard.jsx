import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import SketchyLongWrapper from '../components/wrappers/SketchyLongWrapper'
import Crown from '../assets/images/crown.png'

import './Leaderboard.css'

const Leaderboard = ({ closeLeaderboardMenu }) => {

    const dummyRank1 = {
        name: 'Juan Cruz',
        avatar: '0001_character',
        crowns: 500
    }

    const dummyRank2 = {
        name: 'Melchor Catalan',
        avatar: '0003_paper_clip',
        crowns: 400
    }

    const dummyRank3 = {
        name: 'Danilo Prado',
        avatar: '0004_paper_plane',
        crowns: 300
    }

    const dummyPlayers = [
        {
            name: 'Reyna McGuire',
            avatar: '0004_paper_plane',
            crowns: 2950
        },
        {
            name: 'Casey Macias',
            avatar: '0001_character',
            crowns: 2500
        },
        {
            name: 'Adley Marsh',
            avatar: '0005_brain',
            crowns: 2400
        },
        {
            name: 'Bo Booker',
            avatar: '0002_open_book',
            crowns: 230
        },
        {
            name: 'Nataly Shaffer',
            avatar: '0003_paper_clip',
            crowns: 220
        },
        {
            name: 'Dexter Patrick',
            avatar: '0001_character',
            crowns: 195
        },
        {
            name: 'Lyra Patrick',
            avatar: '0003_paper_clip',
            crowns: 150
        },
    ]

    const [playerRank, setPlayerRank] = useState('Unranked')
    const [playerCrowns, setPlayerCrowns] = useState(0)
    const [rank1Player, setRank1Player] = useState(dummyRank1)
    const [rank2Player, setRank2Player] = useState(dummyRank2)
    const [rank3Player, setRank3Player] = useState(dummyRank3)
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
                    <img className='leaderboard_player_crowns_icon' src={Crown} />
                    <div className='leaderboard_player_crowns'>{player.crowns}</div>
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
                        LEADERBOARD
                    </div>
                    <div className='leaderboard_players-wrapper ohp center'>
                        <div className='top_3_players ohpw center'>
                            <div className='rank_2_player top_3_player ohph center'>
                                <div className='top_player_details ohpw center'>
                                    <div className='leaderboard_player_avatar-wrapper center'>
                                        <img className='leaderboard_player_avatar' src={`./avatars/${rank2Player.avatar}.svg`} />
                                    </div>
                                    <div className='leaderboard_top_player_name-wrapper ohpw'>
                                        <div className='leaderboard_player_name'>
                                            {rank2Player.name}
                                        </div>
                                    </div>
                                    <div className='leaderboard_player_crowns-wrapper ohpw center'>
                                        <img className='leaderboard_player_crowns_icon' src={Crown} />
                                        <div className='leaderboard_player_crowns'>{rank2Player.crowns}</div>
                                    </div>
                                </div>
                                <div className='top_player_rank_2 ohpw center'>
                                    2
                                </div>
                            </div>
                            <div className='rank_1_player top_3_player ohph'>
                                <div className='top_player_details ohpw center'>
                                    <div className='leaderboard_player_avatar-wrapper center'>
                                        <img className='leaderboard_player_avatar' src={`./avatars/${rank1Player.avatar}.svg`} />
                                    </div>
                                    <div className='leaderboard_top_player_name-wrapper ohpw'>
                                        <div className='leaderboard_player_name'>
                                            {rank1Player.name}
                                        </div>
                                    </div>
                                    <div className='leaderboard_player_crowns-wrapper ohpw center'>
                                        <img className='leaderboard_player_crowns_icon' src={Crown} />
                                        <div className='leaderboard_player_crowns'>{rank1Player.crowns}</div>
                                    </div>
                                </div>
                                <div className='top_player_rank_1 ohpw center'>
                                    1
                                </div>
                            </div>
                            <div className='rank_3_player top_3_player ohph'>
                                <div className='top_player_details ohpw center'>
                                    <div className='leaderboard_player_avatar-wrapper center'>
                                        <img className='leaderboard_player_avatar' src={`./avatars/${rank3Player.avatar}.svg`} />
                                    </div>
                                    <div className='leaderboard_top_player_name-wrapper ohpw'>
                                        <div className='leaderboard_player_name'>
                                            {rank3Player.name}
                                        </div>
                                    </div>
                                    <div className='leaderboard_player_crowns-wrapper ohpw center'>
                                        <img className='leaderboard_player_crowns_icon' src={Crown} />
                                        <div className='leaderboard_player_crowns'>{rank3Player.crowns}</div>
                                    </div>
                                </div>
                                <div className='top_player_rank_3 ohpw center'>
                                    3
                                </div>
                            </div>
                        </div>
                        <div className='leaderboard_players ohpw center'>
                            {leaderboardTopPlayers}
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