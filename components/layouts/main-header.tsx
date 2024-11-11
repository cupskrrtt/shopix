import Image from "next/image";
import logo from "@/public/shopix-logo.svg";
import ThemeSelector from "./theme-changer";
import { Input } from "@/components/ui/input";
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function MainHeader() {
	return (
		<header className="flex justify-between items-center py-2 px-4">
			<Image src={logo} alt="Shopix logo" width={40} height={40} />
			<Input placeholder="Search" className="max-w-96" />
			<div className="flex gap-2">
				<ThemeSelector />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant={"ghost"} size={"icon"}></Button>
					</DropdownMenuTrigger>
				</DropdownMenu>
			</div>
		</header>
	);
}
