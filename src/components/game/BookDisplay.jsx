import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import Tutorial4 from '../tutorials/Tutorial4'
import SketchedButton from '../buttons/SketchedButton'
import Book from '../Book'
import PointRight from '../../assets/images/icons/point_right.svg'

import './BookDisplay.css'

const BookDisplay = ({tutorial3, tutorial4Active, setTutorial4Active, setCompletedTutorial, pictures, cover, back, displayBook, openDisplayBook, closeDisplayBook, salawikainPortalActive, musicMuted }) => {

	return (
		<div className='book_display-container center' style={{display: salawikainPortalActive ? 'none' : 'flex'}} >
			{tutorial4Active && <Tutorial4 setTutorial4Active={setTutorial4Active} setCompletedTutorial={setCompletedTutorial} />}

			{tutorial4Active && <div className='book_display_cover ohp'></div>}

			<div 
				className='book_display-wrapper center' 
				onClick={openDisplayBook}
				style={{ zIndex: tutorial4Active && '20' }}
			>
				{tutorial3 &&
					<SketchedButton text='HINT BOOK' width='150px' onClickHandler={openDisplayBook} />
				}

				{tutorial4Active && 
					<div className='tutorial4_hand'>
						<img className='tutorial4_hand_icon' src={PointRight} draggable='false' />
					</div>
				}
			</div>

			<div className='modal' style={{ display: displayBook ? 'block' : 'none' }}>
			</div>
			
			<div className='close' style={{ display: displayBook ? 'block' : 'none' }} onClick={closeDisplayBook} >
				<SketchedButton text='CLOSE' width='120px' />
			</div>

      		{displayBook && <Canvas style={{ width: '100vw',  height: '100vh', position: 'absolute', zIndex:'12', visibility: displayBook ? 'visible' : 'hidden' }} shadows camera={{
          		position: [-0.5, 1.5, window.innerWidth > 550 ? 6.25 : 9.5],
          		fov: 35,
        	}}>
        		<group position-y={0}>
          			<Suspense fallback={null}>
            			<Float
							rotation-x={-Math.PI / 4}
							floatIntensity={1}
							speed={2}
							rotationIntensity={0.5}
						>
						<Book pictures={pictures} cover={cover} back={back} musicMuted={musicMuted} />
						</Float>
						<OrbitControls enableZoom={false} />
						<directionalLight
							position={[2, 5, 2]}
							intensity={5}
							castShadow
							shadow-mapSize-width={2048}
							shadow-mapSize-height={2048}
							shadow-bias={-0.0001}
						/>
						<mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
							<planeGeometry args={[100, 100]} />
							<shadowMaterial transparent opacity={0.2} />
						</mesh>
          			</Suspense>
        		</group>
      		</Canvas>}
    	</ div>
	)
}

export default BookDisplay