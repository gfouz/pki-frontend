type DrawerStyleProps = {
backgroundImage: string;
backgroundPosition: string;
backgroundRepeat: string;
backgroundAttachment: string;
backgroundSize: string;
}

type ToggleButtonProps = {
  color: string;
}

export const lateralMenu: DrawerStyleProps = {
backgroundImage: `url('./images/aside.jpg')`,
backgroundPosition: "center center",
backgroundRepeat: "no-repeat",
backgroundAttachment: "fixed",
backgroundSize: "200px"
}

export const toggleButton: ToggleButtonProps = {
	color: "#f8f8f8",
}


