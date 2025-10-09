import HealthPlus from '../../assets/images/items/health_plus-store.svg'

import './PlayerRecord.css'

const PlayerRecord = () => {
    return (
        <div className='player_record-container center'>
            <div className='player_record_title ohpw center'>
                PERSONAL RECORD
            </div>
            <div className='player_record ohpw center'>
                <div className='personal_record center'>
                    <div className='personal_record_icon-wrapper center'>
                        <img className='personal_record_icon' src={HealthPlus} />
                    </div>
                    <div className='personal_record_title-wrapper center'>
                        <div className='personal_record_title'>
                            Average Time
                        </div>
                    </div>
                    <hr className='personal_record_divider' ></hr>
                    <div className='personal_record_detail-wrapper center'>
                        <div className='personal_record_detail'>
                            30 seconds
                        </div>
                    </div>
                </div>

                <div className='personal_record center'>
                    <div className='personal_record_icon-wrapper center'>
                        <img className='personal_record_icon' src={HealthPlus} />
                    </div>
                    <div className='personal_record_title-wrapper center'>
                        <div className='personal_record_title'>
                            Average Time
                        </div>
                    </div>
                    <hr className='personal_record_divider' ></hr>
                    <div className='personal_record_detail-wrapper center'>
                        <div className='personal_record_detail'>
                            30 seconds
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerRecord