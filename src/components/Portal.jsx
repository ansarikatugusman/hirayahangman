import {
  	CameraControls,
	Environment,
  	MeshPortalMaterial,
  	RoundedBox,
  	Text,
  	useCursor,
  	useTexture,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ExitPortal from "./portal/ExitPortal";

const Portal = ({ name, texture, active, handleActivePortal, handleCurrentBook, levelStart, levelStarted, BooksDisplay, books, booksSolved }) => {
  	
  	const [hovered, setHovered] = useState(null);
  	useCursor(hovered);
  	const controlsRef = useRef();
  	const scene = useThree((state) => state.scene);

	const map = useTexture(texture);
  	const portalMaterial = useRef();

  	useFrame((_state, delta) => {
    	const worldOpen = active === name;
    	easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  	});

  	useEffect(() => {
    	if (active) {
      		const targetPosition = new THREE.Vector3();
      		scene.getObjectByName(active).getWorldPosition(targetPosition);
      		controlsRef.current.setLookAt(
        		-0.57,
        		0,
        		2.5,
        		targetPosition.x,
        		targetPosition.y,
        		targetPosition.z,
        		true
      		);
    	} else {
      		controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
    	}
  	}, [active]);

  	return (
    	<>
      		<ambientLight intensity={0.5} />
      		<Environment preset="sunset" />
      		<CameraControls 
				dollySpeed={0}
        		ref={controlsRef}
        		maxPolarAngle={Math.PI / 2}
        		minPolarAngle={Math.PI / 2}
      		/>
			{active && !levelStart && <ExitPortal name={name} handleActivePortal={handleActivePortal} />}
			{active && !levelStart && <BooksDisplay handleCurrentBook={handleCurrentBook} levelStarted={levelStarted} books={books} booksSolved={booksSolved} />}
      			<Text
        			font="fonts/CabinSketch-Regular.ttf"
        			fontSize={0.3}
        			position={[0, -1.3, 0.051]}
        			anchorY={"bottom"}
      			>		
        			{name}
        			<meshBasicMaterial color={'white'} toneMapped={false} />
      			</Text>

      			<RoundedBox
        			name={name}
        			args={[2, 3, 0.1]}
        			onClick={() => {
						if (!active) {
							handleActivePortal(name)
						}
					}}
        			onPointerEnter={() =>{
						if (!active) {
							setHovered(name)
						}
					}}
        			onPointerLeave={() => setHovered(null)}
      			>
        			<MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide}>
          				<ambientLight intensity={1} />
          				<Environment preset="sunset" />
          					<mesh>
            					<sphereGeometry args={[10, 64, 64]} />
            					<meshStandardMaterial map={map} side={THREE.BackSide} />
          					</mesh>
        			</MeshPortalMaterial>
        		</RoundedBox>
    		</>
  	);
};

export default Portal