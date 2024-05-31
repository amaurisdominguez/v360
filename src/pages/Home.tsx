import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="container mx-auto">
			<h1 className="text-xl">Home</h1>
			<div className="p-6">
				<p className="font-bold">360 Viewer Test</p>
				<ul className="text-blue-500">
					<li>
						<Link to="/v360/view">Sala</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
