import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import Book from '../Book'

import './LandingPageBook.css'

const LandingPageBook = () => {

	const pictures = [
		'bg-1-23-01',
		'bg-1-23-02',
		'bg-1-23-03',
		'bg-1-23-04',
		'bg-1-23-05',
		'bg-1-23-06'
	]

	return (
		<div className='book_display-container center' >
      		<Canvas shadows camera={{
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
						<Book pictures={pictures} cover={'book-cover-maku'} back={'book-back-bugtong'} />
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

export default LandingPageBook