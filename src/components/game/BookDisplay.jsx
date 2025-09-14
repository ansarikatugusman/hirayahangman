import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import SketchedButton from '../buttons/SketchedButton'
import Book from '../Book'

import './BookDisplay.css'

const BookDisplay = ({ pictures, cover, back, displayBook, openDisplayBook, closeDisplayBook }) => {

	return (
		<div className='book_display-container center' >
			<div className='book_display-wrapper center' onClick={openDisplayBook}>
				<SketchedButton text='HINT BOOK' width='150px' onClickHandler={openDisplayBook} />
			</div>
			<div className='modal' style={{ display: displayBook ? 'block' : 'none' }}>
			</div>
			<div className='close' style={{ display: displayBook ? 'block' : 'none' }} >
				<SketchedButton text='CLOSE' width='120px' onClickHandler={closeDisplayBook} />
			</div>
      		<Canvas style={{ width: '100vw',  height: '100vh', position: 'absolute', zIndex:'12', visibility: displayBook ? 'visible' : 'hidden' }} shadows camera={{
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
						<Book pictures={pictures} cover={cover} back={back} />
						</Float>
						<OrbitControls enableZoom={false} />
						<Environment preset="studio"></Environment>
						<directionalLight
							position={[2, 5, 2]}
							intensity={1}
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
      		</Canvas>
    	</ div>
	)
}

export default BookDisplay