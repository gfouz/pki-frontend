type DrawerBackgroundProps = {
backgroundImage: string;
backgroundPosition: string;
backgroundRepeat: string;
backgroundAttachment: string;
backgroundSize: string;
}

type ToggleButtonProps = {
  color: string;
}

export const sidebarContent: DrawerBackgroundProps = {
backgroundImage: `url('./images/aside.jpg')`,
backgroundPosition: "center center",
backgroundRepeat: "no-repeat",
backgroundAttachment: "fixed",
backgroundSize: "200px"
}

export const toggleButton: ToggleButtonProps = {
	color: "#e1cf62",
}