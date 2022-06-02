type DrawerBackgroundProps = {
backgroundImage: string;
backgroundPosition: string;
backgroundRepeat: string;
backgroundAttachment: string;
backgroundSize: string;
}

export const drawerBackground: DrawerBackgroundProps = {
backgroundImage: `url('./images/aside.jpg')`,
backgroundPosition: "center center",
backgroundRepeat: "no-repeat",
backgroundAttachment: "fixed",
backgroundSize: "200px"
}
