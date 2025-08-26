import { Outlet } from 'react-router'
import Notice from './utils/Notice'

import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard center ohp">
            <Notice />
            <div className='player_info-container ohpw'>
                <div className='player_name-container center ohph'>
                    <div className='player_name-wrapper'>
                        <div className="player_name-pin">
                            <div className="shadow"></div>
                            <div className="metal"></div>
                            <div className="bottom-circle"></div>
                        </div>
                        <p className='player_name'>Player</p>
                    </div>
                </div>

                <div className='player_coins-container center ohph' style={{visibility: 'hidden'}}>
                    <div className='player_coins-wrapper'>
                        <div className="player_coins-pin">
                            <div className="shadow"></div>
                            <div className="metal"></div>
                            <div className="bottom-circle"></div>
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