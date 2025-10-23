import { useState, useEffect } from 'react'
import useHttpRequest from '../../hooks/useHttpRequest'
import Loading from '../../utils/Loading'
import ErrorMessage from '../../utils/ErrorMessage'
import Crown from '../../assets/images/crown.png'

import './LandingPageLeaderboards.css'

const LandingPageLeaderboards = () => {
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
    ]

    const [rank1Player, setRank1Player] = useState()
    const [rank2Player, setRank2Player] = useState()
    const [rank3Player, setRank3Player] = useState()
    const [topPlayers, setTopPlayers] = useState(dummyPlayers)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

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

    const leaderboardTopPlayers = topPlayers.slice(3, 50).map((player, index) => {
        return (
            <div className='leaderboard_player center' key={player.name}>
                <div className='leaderboard_player_rank center'>
                    {index+4}
                </div>
                <div className='leaderboard_player_avatar-wrapper center'>
                    <img className='leaderboard_player_avatar' src={`./avatars/${player.avatar}.${player.avatar.substring(0, 2) == '01' ? 'png' : 'svg'}`} />
                </div>
                <div className='leaderboard_player_name-wrapper ohp center'>
                    <div className='leaderboard_player_name ohp center'>
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
        <div className='landing_page_leaderboards-container center'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <div className='landing_page_leaderboards_title-wrapper center'>
				<div className='landing_page_leaderboards_title center'>
					<p>Leaderboard</p>
				</div>
			</div>

            <div className='landing_page_leaderboards_description-wrapper'>
                <div className='landing_page_leaderboards_description'>
                    Enter the mystical library where each sacred book—Bugtong, Sawikain, and Salawikain—opens as a living 3D artifact. Watch the glowing covers animate as you restore their fading light through puzzle-solving.
                </div>
            </div>

            <div className='landing_page_leaderboards' >
                <div className='leaderboard-container ohp center'>
                    <div className='leaderboard ohpw center'>
                        <div className='leaderboard_title-wrapper ohpw center'>
                            Leaderboard
                        </div>
                        <div className='leaderboard_players-wrapper ohp center'>
                            <div className='top_3_players ohpw center'>
                                <div className='rank_2_player top_3_player ohph center'>
                                    <div className='top_player_details ohpw center'>
                                        <div className='leaderboard_player_avatar-wrapper center'>
                                            {rank2Player && <img className='leaderboard_player_avatar' src={`./avatars/${rank2Player.avatar}.${rank2Player.avatar.substring(0, 2) == '01' ? 'png' : 'svg'}`} />}
                                        </div>
                                        <div className='top3_players_name-wrapper ohpw'>
                                            <div className='top3_players_name'>
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
                                            {rank1Player && <img className='leaderboard_player_avatar' src={`./avatars/${rank1Player.avatar}.${rank1Player.avatar.substring(0, 2) == '01' ? 'png' : 'svg'}`} />}
                                        </div>
                                        <div className='top3_players_name-wrapper ohpw'>
                                            <div className='top3_players_name'>
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
                                            {rank3Player && <img className='leaderboard_player_avatar' src={`./avatars/${rank3Player.avatar}.${rank3Player.avatar.substring(0, 2) == '01' ? 'png' : 'svg'}`} />}
                                        </div>
                                        <div className='top3_players_name-wrapper ohpw'>
                                            <div className='top3_players_name'>
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
                </div>
                <div className='landing_page_leaderboards-back'>
                </div>
            </div>
        </div>
    )
}

export default LandingPageLeaderboards