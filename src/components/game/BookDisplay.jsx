import { Loader } from '@react-three/drei'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import Book from '../Book'

const BookDisplay = ({ pictures, cover, back }) => {

	return (
		<div className='book_display center'>
      		<Loader />
      		<Canvas style={{ width:'320px',  height: '280px' }} shadows camera={{
          		position: [-0.5, 1, window.innerWidth > 330 ? 4 : 9],
          		fov: 35,
        	}}>
        		<group position-y={0}>
          			<Suspense fallback={null}>
            			<Float
							rotation-x={-Math.PI / 4}
							floatIntensity={1}
							speed={1}
							rotationIntensity={0}
						>
						<Book pictures={pictures} cover={cover} back={back} />
						</Float>
						<OrbitControls />
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