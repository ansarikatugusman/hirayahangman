import { Outlet } from 'react-router'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard center ohp">
            <div className='player_info-container ohpw'>
                <div className='player_name-container center ohph'>
                    <div className='player_name-wrapper'>
                        <div class="player_name-pin">
                            <div class="shadow"></div>
                            <div class="metal"></div>
                            <div class="bottom-circle"></div>
                        </div>
                        <p className='player_name'>Player</p>
                    </div>
                </div>

                <div className='player_coins-container center ohph' style={{visibility: 'hidden'}}>
                    <div className='player_coins-wrapper'>
                        <div class="player_coins-pin">
                            <div class="shadow"></div>
                            <div class="metal"></div>
                            <div class="bottom-circle"></div>
                        </div>
                        <p className='player_coins'>100000</p>
                    </div>
                </div>
            </div>
            
            <Outlet />
        </div>
    )
}

export default Dashboard