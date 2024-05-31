import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
		<nav className="flex flex-row px-4 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
			<div>
				<Link to="/v360/">
					<p className="text-2xl">v360</p>
				</Link>
			</div>
			<div className="grow"></div>
			<div>
				<ul className="flex flex-row space-x-4">
					<li>
						<Link to="/v360/">
							<p>Home</p>
						</Link>
					</li>
					<li>
						<Link to="/v360/contact">
							<p>Contact</p>
						</Link>
					</li>
					<li>
						<Link to="/v360/about">
							<p>About</p>
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul className="flex flex-row space-x-4 ml-10">
					<li>
						<a href="/" target="_blank">
							linkedin
						</a>
					</li>
					<li>
						<a href="/" target="_blank">
							facebook
						</a>
					</li>
					<li>
						<a href="/" target="_blank">
							instagram
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
