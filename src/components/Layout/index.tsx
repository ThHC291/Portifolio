import Footer from '../Footer';
import NavBar from '../NavBar';
import { ParticlesComponent } from '../Particles';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<section className="flex flex-col justify-between min-h-screen">
				<NavBar />
				<section className="mx-auto">
					<ParticlesComponent />
					<section className="container">{children}</section>
				</section>
				<Footer />
			</section>
		</>
	);
};

export default Layout;
