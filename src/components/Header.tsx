"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ClientPortal } from "@/components/ClientPortal";
import treeLogo from "@/assets/tree-logo.webp";

// Helper pour le label de menu
const MenuLabel = ({ label }: { label: string }) => (
	<span className="inline-flex items-baseline">
		<span className="font-script text-[1.4em] leading-none -mr-0.5">
			{label.charAt(0)}
		</span>
		<span>{label.slice(1)}</span>
	</span>
);

const therapiesSubmenu = [
	{ label: "Hypnose", href: "/hypnose" as const },
	{ label: "PNL", href: "/pnl" as const },
	{ label: "EFT", href: "/eft" as const },
	{ label: "Préparation mentale", href: "/preparation-mentale" as const },
	{ label: "Dream Machine", href: "/dream-machine" as const },
	{ label: "Ressources et Ateliers", href: "/ressources" as const },
] as const;

const mainNavLinks = [
	{ label: "Accueil", href: "/" as const, hasSubmenu: false },
	{ label: "Thérapies", href: "#" as const, hasSubmenu: true },
	{ label: "Tarifs", href: "/tarifs" as const, hasSubmenu: false },
	{ label: "Contact", href: "/#contact" as const, hasSubmenu: false },
] as const;

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isTherapiesOpen, setIsTherapiesOpen] = useState(false);
	const [isMobileTherapiesOpen, setIsMobileTherapiesOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const pathname = usePathname();
	const router = useRouter();
	const isHomePage = pathname === "/";

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsTherapiesOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	useEffect(() => {
		setIsMobileMenuOpen(false);
		setIsMobileTherapiesOpen(false);
	}, [pathname]);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
	}, [isMobileMenuOpen]);

	const headerBg = isHomePage
		? isScrolled
			? "bg-background/95 backdrop-blur-md shadow-soft py-2"
			: "bg-transparent py-4"
		: isScrolled
		? "bg-background/95 backdrop-blur-md shadow-soft py-2"
		: "bg-background/80 backdrop-blur-sm py-4";

	const handleContactClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (isHomePage) {
			document
				.getElementById("contact")
				?.scrollIntoView({ behavior: "smooth" });
		} else {
			router.push("/#contact");
		}
	};

	const handleHomeClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (isHomePage) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			router.push("/");
			setTimeout(
				() => window.scrollTo({ top: 0, behavior: "smooth" }),
				100
			);
		}
	};

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
			>
				<div className="container mx-auto px-4 flex items-center justify-between">
					{/* Logo */}
					<button
						onClick={handleHomeClick}
						className="flex items-center gap-4 group cursor-pointer"
						aria-label="Retour à l'accueil"
					>
						<div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105">
							<Image
								src={treeLogo}
								alt="Aurélia Desvaux - Accueil"
								fill
								className="object-cover"
								priority
							/>
						</div>
						<span className="font-script text-2xl lg:text-3xl text-foreground">
							Aurélia Desvaux
						</span>
					</button>

					{/* Desktop Nav */}
					<nav className="hidden lg:flex items-center gap-8">
						{mainNavLinks.map((link) => {
							if (link.hasSubmenu) {
								return (
									<div
										key={link.label}
										className="relative"
										ref={dropdownRef}
										onMouseEnter={() =>
											setIsTherapiesOpen(true)
										}
										onMouseLeave={() =>
											setIsTherapiesOpen(false)
										}
									>
										<button
											className="flex items-center gap-1 font-body text-base tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
											aria-haspopup="true"
											aria-expanded={isTherapiesOpen}
											aria-label="Menu Thérapies"
										>
											<MenuLabel label={link.label} />
											<ChevronDown
												className={`w-4 h-4 transition-transform duration-300 ${
													isTherapiesOpen
														? "rotate-180"
														: ""
												}`}
											/>
										</button>
										<div
											className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 transition-all duration-500 ease-&lsqb;cubic-bezier(0.25,0.46,0.45,0.94)&rsqb; ${
												isTherapiesOpen
													? "opacity-100 visible translate-y-0 scale-100"
													: "opacity-0 invisible -translate-y-3 scale-95 pointer-events-none"
											}`}
										>
											<div className="bg-soft-pink/95 backdrop-blur-md rounded-xl shadow-card border border-primary/20 overflow-hidden">
												<div className="py-2">
													{therapiesSubmenu.map(
														(item, index) => (
															<Link
																key={item.href}
																href={item.href}
																aria-label={
																	item.label
																}
																scroll={false}
																className="block pl-3 pr-4 py-3 font-body text-sm text-foreground/80 hover:text-primary hover:bg-soft-pink/40 transition-all duration-300"
																style={{
																	opacity:
																		isTherapiesOpen
																			? 1
																			: 0,
																	transform:
																		isTherapiesOpen
																			? "translateX(0)"
																			: "translateX(-8px)",
																	transitionDelay:
																		isTherapiesOpen
																			? `${
																					index *
																						50 +
																					100
																			  }ms`
																			: "0ms",
																}}
															>
																<MenuLabel
																	label={
																		item.label
																	}
																/>
															</Link>
														)
													)}
												</div>
											</div>
										</div>
									</div>
								);
							} else if (link.href === "/#contact") {
								return (
									<button
										key={link.href}
										onClick={handleContactClick}
										className="font-body text-base tracking-wide text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
									>
										<MenuLabel label={link.label} />
									</button>
								);
							} else if (link.href === "/") {
								return (
									<button
										key={link.href}
										onClick={handleHomeClick}
										className="font-body text-base tracking-wide text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
									>
										<MenuLabel label={link.label} />
									</button>
								);
							} else {
								return (
									<Link
										key={link.href}
										href={link.href}
										className="font-body text-base tracking-wide text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
									>
										<MenuLabel label={link.label} />
									</Link>
								);
							}
						})}
					</nav>

					{/* Mobile menu button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="lg:hidden p-2 text-foreground relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
						aria-label="Ouvrir le menu"
					>
						<span
							className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
								isMobileMenuOpen
									? "rotate-45 translate-y-2"
									: ""
							}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
								isMobileMenuOpen ? "opacity-0" : ""
							}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
								isMobileMenuOpen
									? "-rotate-45 -translate-y-2"
									: ""
							}`}
						/>
					</button>
				</div>
			</header>

			{/* Mobile overlay */}
			{mounted && (
				<ClientPortal>
					{/* Overlay */}
					<div
						className={`fixed inset-0 bg-black/10 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
							isMobileMenuOpen
								? "opacity-100 visible z-[9998]"
								: "opacity-0 invisible pointer-events-none"
						}`}
						onClick={() => setIsMobileMenuOpen(false)}
					/>

					{/* Drawer */}
					<div
						className={`fixed top-0 right-0 h-full w-3/4 max-w-[320px] bg-soft-pink/70 backdrop-blur-sm shadow-lg border-l border-primary/20 lg:hidden z-[9999] transition-transform duration-300 ${
							isMobileMenuOpen
								? "translate-x-0 animate-slide-in-drawer"
								: "translate-x-full animate-slide-out-drawer"
						}`}
					>
						<nav className="p-6 flex flex-col gap-3">
							{/* Accueil */}
							<button
								onClick={(e) => {
									handleHomeClick(e);
									setIsMobileMenuOpen(false);
								}}
								className="font-body text-base text-foreground hover:text-primary hover:translate-x-2 active:scale-95 py-3 text-left transition-all duration-300"
								style={{
									opacity: isMobileMenuOpen ? 1 : 0,
									transform: isMobileMenuOpen
										? "translateX(0)"
										: "translateX(2rem)",
									transitionDelay: isMobileMenuOpen
										? "50ms"
										: "0ms",
								}}
							>
								<MenuLabel label="Accueil" />
							</button>

							{/* Mobile Therapies Accordion */}
							<div
								className="transition-all duration-300"
								style={{
									opacity: isMobileMenuOpen ? 1 : 0,
									transform: isMobileMenuOpen
										? "translateX(0)"
										: "translateX(2rem)",
									transitionDelay: isMobileMenuOpen
										? "100ms"
										: "0ms",
								}}
							>
								<button
									onClick={() =>
										setIsMobileTherapiesOpen(
											!isMobileTherapiesOpen
										)
									}
									className="w-full flex items-center justify-between font-body text-base text-foreground hover:text-primary hover:translate-x-2 active:scale-95 py-3 transition-all duration-300"
									aria-label="Ouvrir le sous-menu Thérapies"
									aria-expanded={isMobileTherapiesOpen}
								>
									<MenuLabel label="Thérapies" />
									<ChevronDown
										className={`w-5 h-5 transition-transform duration-300 ${
											isMobileTherapiesOpen
												? "rotate-180"
												: ""
										}`}
									/>
								</button>

								<div
									className={`overflow-hidden transition-all duration-500 ease-out ${
										isMobileTherapiesOpen
											? "max-h-60 opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="pl-4 py-2 space-y-1 border-l-2 border-primary/30 ml-2">
										{therapiesSubmenu.map((item, index) => (
											<Link
												key={item.href}
												href={item.href}
												onClick={() =>
													setIsMobileMenuOpen(false)
												}
												className="block font-body text-sm text-foreground/80 hover:text-foreground hover:bg-soft-pink/50 hover:translate-x-1 active:scale-95 rounded-lg px-3 py-2 transition-all duration-300"
												style={{
													opacity:
														isMobileTherapiesOpen
															? 1
															: 0,
													transform:
														isMobileTherapiesOpen
															? "translateX(0)"
															: "translateX(1rem)",
													transitionDelay:
														isMobileTherapiesOpen
															? `${
																	index * 80 +
																	100
															  }ms`
															: "0ms",
												}}
											>
												<MenuLabel label={item.label} />
											</Link>
										))}
									</div>
								</div>
							</div>

							{/* Tarifs */}
							<Link
								href="/tarifs"
								onClick={() => setIsMobileMenuOpen(false)}
								className="font-body text-base text-foreground hover:text-primary hover:translate-x-2 active:scale-95 py-3 transition-all duration-300"
								style={{
									opacity: isMobileMenuOpen ? 1 : 0,
									transform: isMobileMenuOpen
										? "translateX(0)"
										: "translateX(2rem)",
									transitionDelay: isMobileMenuOpen
										? "150ms"
										: "0ms",
								}}
							>
								<MenuLabel label="Tarifs" />
							</Link>

							{/* Contact */}
							<button
								onClick={(e) => {
									handleContactClick(e);
									setIsMobileMenuOpen(false);
								}}
								className="font-body text-base text-foreground hover:text-primary hover:translate-x-2 active:scale-95 py-3 text-left transition-all duration-300"
								style={{
									opacity: isMobileMenuOpen ? 1 : 0,
									transform: isMobileMenuOpen
										? "translateX(0)"
										: "translateX(2rem)",
									transitionDelay: isMobileMenuOpen
										? "200ms"
										: "0ms",
								}}
							>
								<MenuLabel label="Contact" />
							</button>

							{/* Prendre rendez-vous */}
							<a
								href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-body text-sm rounded-full text-center hover:shadow-soft hover:scale-105 active:scale-95 transition-all duration-300"
								style={{
									opacity: isMobileMenuOpen ? 1 : 0,
									transform: isMobileMenuOpen
										? "translateY(0)"
										: "translateY(1rem)",
									transitionDelay: isMobileMenuOpen
										? "250ms"
										: "0ms",
								}}
							>
								Prendre rendez-vous
							</a>
						</nav>
					</div>
				</ClientPortal>
			)}
		</>
	);
};
