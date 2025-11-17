import SketchyLongWrapper from '../components/wrappers/SketchyLongWrapper'

import './Credits.css'

const Credits = ({ closeCreditsMenu }) => {
    return (
        <SketchyLongWrapper showCloseButton={true} onCloseHandler={closeCreditsMenu}>
            <div className='credits-container ohp center'>
                <div className='credits_title-wrapper center'>
                    CREDITS
                </div>
                <div className='credits-wrapper ohpw center'>
                    <div className='credit-wrapper center'>
                        <div className='credit_name center'>
                            JHONLIRRY P. MERCURIO
                        </div>
                        <div className='credit center'>
                            Lead Research & Concept / Writing
                        </div>
                    </div>

                    <div className='credit-wrapper center'>
                        <div className='credit_name center'>
                            SHAN MICKLE RECAÑA
                        </div>
                        <div className='credit center'>
                            Research & Compatibility
                        </div>
                    </div>

                    <div className='credit-wrapper center'>
                        <div className='credit_name center'>
                            JESUN RODRIGO
                        </div>
                        <div className='credit center'>
                            Research & Playtesting
                        </div>
                    </div>

                    <div className='credit-wrapper center'>
                        <div className='credit_name center'>
                            ANSARI K. USMAN
                        </div>
                        <div className='credit center'>
                            Game Design & Programming
                        </div>
                    </div>
                </div>
            </div>
        </SketchyLongWrapper>
    )
}

export default Credits