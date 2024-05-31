import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

export default function ThreeSixtyView() {


	return (
		<div className="container mx-auto max-md mt-8 px-4">
			<ReactPhotoSphereViewer
                src="SALA.jpg"				
				height={'50vh'}
				width={'100%'}
			></ReactPhotoSphereViewer>
		</div>
	);
}
