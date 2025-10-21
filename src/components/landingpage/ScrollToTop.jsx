import SketchedButton from '../buttons/SketchedButton'

import './ScrollToTop.css'

const ScrollToTop = () => {

    const toggleVisible = () => {
		const scrolled = document.getElementById('lpc').scrollTop
		if (scrolled > 300) {
			setVisible(true)
		} else if (scrolled <= 300) {
			setVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo(0, 0)
	}

	window.addEventListener("scroll", toggleVisible);

    return (
        <div>
            <SketchedButton text='&#8682;' fontsize='2rem' onClickHandler={scrollToTop} />
        </div>
    )
}

export default ScrollToTop