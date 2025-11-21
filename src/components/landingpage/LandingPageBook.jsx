import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import Book from '../Book'

import './LandingPageBook.css'

const LandingPageBook = () => {

	const pictures = [
		'lp-1-01-01',
		'lp-1-01-02',
		'lp-1-01-03',
		'lp-1-01-04',
		'lp-1-01-05',
		'lp-1-01-06',
	]

	return (
		<div className='landing_page_book-container ohpw center'>
			<div className='landing_page_book_title-wrapper center'>
				<div className='landing_page_book_title center'>
					<p>3D Book of Wisdom</p>
				</div>
			</div>

			<div className='landing_page_book_description-wrapper'>
                <div className='landing_page_book_description'>
                    Enter the mystical library where each sacred book—Bugtong, Sawikain, and Salawikain—opens as a living 3D artifact. Watch the glowing covers animate as you restore their fading light through puzzle-solving.
                </div>
            </div>

			<div className='landing_page_book_display-wrapper ohpw center' >
				<Canvas shadows camera={{
					position: [-0.5, 1.5, window.innerWidth > 550 ? 2 : 3.25],
					fov: 50,
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
							<Environment preset='studio' />
							<directionalLight
								position={[2, 5, 2]}
								intensity={0.5}
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
		</div>
	)
}

export default LandingPageBook