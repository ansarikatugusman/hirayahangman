import Bill from '../../assets/images/record/total_gold_spent.svg'
import Bag from '../../assets/images/record/total_items_used.svg'
import Crown from '../../assets/images/record/highest_crown.svg'
import Trophy from '../../assets/images/record/leaderboard_rank.svg'
import StopWatch from '../../assets/images/record/average_time.svg'
import Bugtong from '../../assets/images/record/bugtong_black.svg'
import Sawikain from '../../assets/images/record/sawikain_black.svg'
import Salawikain from '../../assets/images/record/salawikain_black.svg'

import './PlayerRecord.css'

const PlayerRecord = ({ crowns, totalGoldSpent, totalItemsUsed, highestCrown, leaderboardRank, averageTime, bugtongBooksSolved, sawikainBooksSolved, salawikainBooksSolved }) => {
    return (
        <div className='player_record-container center'>
            <div className='player_record_title ohpw center'>
                PERSONAL RECORD
            </div>
            <div className='player_record ohpw center'>
                <div className='personal_record center'>
                    <div className='personal_record_icon-wrapper center'>
                        <img className='personal_record_icon' src={Bill} draggable='false' />
                    </div>
                    <div className='personal_record_title-wrapper center'>
                        <div className='personal_record_title'>
                            Total Gold Spent
                        </div>
                    </div>
                    <hr className='personal_record_divider' ></hr>
                    <div className='personal_record_detail-wrapper center'>
                        <div className='personal_record_detail'>
                            {totalGoldSpent} Gold
                        </div>
                    </div>
                </div>

                <div className='personal_record center'>
                    <div className='personal_record_icon-wrapper center'>
                        <img className='personal_record_icon' src={Bag} draggable='false' />
                    </div>
                    <div className='personal_record_title-wrapper center'>
                        <div className='personal_record_title'>
                            Total Items Used
                        </div>
                    </div>
                    <hr className='personal_record_divider' ></hr>
                    <div className='personal_record_detail-wrapper center'>
                        <div className='personal_record_detail'>
                            {totalItemsUsed} Items
                        </div>
                    </div>
                </div>

                <div className='personal_record center'>
                    <div className='personal_record_icon-wrapper center'>
                        <img className='personal_record_icon' src={Crown} draggable='false' />
                    </div>
                    <div className='personal_record_title-wrapper center'>
                        <div className='personal_record_title'>
                            Highest Crown Achieved
                        </div>
                    </div>
                    <hr className='personal_record_divider' ></hr>
                    <div className='personal_record_detail-wrapper center'>
                        <div className='personal_record_detail'>
                            {highestCrown} 
                        </div>
                    </div>
                </div>

                <div className='personal_record center'>
                    <div className='personal_record_icon-wrapper center'>
                        <img className='personal_record_icon' src={Trophy} draggable='false' />
                    </div>
                    <div className='personal_record_title-wrapper center'>
                        <div className='personal_record_title'>
                            Leaderboard Rank
                        </div>
                    </div>
                    <hr className='personal_record_divider' ></hr>
                    <div className='personal_record_detail-wrapper center'>
                        <div className='personal_record_detail'>
                            {crowns > 100 ? `Rank ${leaderboardRank}` : 'Unranked'}
                        </div>
                    </div>
                </div>

                <div className='personal_record center'>
                    <div className='personal_record_icon-wrapper center'>
                        <img className='personal_record_icon' src={StopWatch} draggable='false' />
                    </div>
                    <div className='personal_record_title-wrapper center'>
                        <div className='personal_record_title'>
                            Average Time
                        </div>
                    </div>
                    <hr className='personal_record_divider' ></hr>
                    <div className='personal_record_detail-wrapper center'>
                        <div className='personal_record_detail'>
                            {averageTime[0] > 0 ? `${averageTime[0].toFixed(2)} seconds` : 'No record' }
                        </div>
                    </div>
                </div>

                <div className='personal_record center'>
                    <div className='personal_record_icon-wrapper center'>
                        <img className='personal_record_icon_book' src={Bugtong} draggable='false' />
                    </div>
                    <div className='personal_record_title-wrapper center'>
                        <div className='personal_record_title'>
                            Total Bugtong Solved
                        </div>
                    </div>
                    <hr className='personal_record_divider' ></hr>
                    <div className='personal_record_detail-wrapper center'>
                        <div className='personal_record_detail'>
                            {bugtongBooksSolved.length}
                        </div>
                    </div>
                </div>

                <div className='personal_record center'>
                    <div className='personal_record_icon-wrapper center'>
                        <img className='personal_record_icon_book' src={Sawikain} draggable='false' />
                    </div>
                    <div className='personal_record_title-wrapper center'>
                        <div className='personal_record_title'>
                            Total Sawikain Solved
                        </div>
                    </div>
                    <hr className='personal_record_divider' ></hr>
                    <div className='personal_record_detail-wrapper center'>
                        <div className='personal_record_detail'>
                            {sawikainBooksSolved.length}
                        </div>
                    </div>
                </div>

                <div className='personal_record center'>
                    <div className='personal_record_icon-wrapper center'>
                        <img className='personal_record_icon_book' src={Salawikain} draggable='false' />
                    </div>
                    <div className='personal_record_title-wrapper center'>
                        <div className='personal_record_title'>
                            Total Salawikain Solved
                        </div>
                    </div>
                    <hr className='personal_record_divider' ></hr>
                    <div className='personal_record_detail-wrapper center'>
                        <div className='personal_record_detail'>
                            {salawikainBooksSolved.length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerRecord