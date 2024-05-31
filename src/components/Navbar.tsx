import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
						<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
							<div className="rounded-full text-center" style={{ border: '2px solid white', height: '32px', width: '32px', paddingTop: '2px' }}>
								<FontAwesomeIcon icon={faLinkedinIn} />
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
							<div className="rounded-full text-center" style={{ border: '2px solid white', height: '32px', width: '32px', paddingTop: '2px' }}>
								<FontAwesomeIcon icon={faFacebookF} />
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
							<div className="rounded-full text-center" style={{ border: '2px solid white', height: '32px', width: '32px', paddingTop: '2px' }}>
								<FontAwesomeIcon icon={faInstagram} />
							</div>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
