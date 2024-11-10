import Image from "next/image";
import logo from "@/public/shopix-logo.png";

export default function Header() {
	return (
		<header>
			<nav className="flex items-center">
				<Image src={logo} alt="Shopix Logo" height={60} width={60} />
				<search>
					<form>
						<input placeholder="Search" />
					</form>
				</search>
			</nav>
		</header>
	);
}
