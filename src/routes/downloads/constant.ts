type asideStyleProps = {
height: string;  
backgroundImage: string;
backgroundPosition: string;
backgroundRepeat: string;
backgroundSize: string;
}

type MainTitleTypes = {
  m: string;
  size: string;
  color: string;
  fontFamily: string;
}

type LogoTypes = {
  width: string;
  height: string;
}

export const drawerProps: asideStyleProps = {
height: "150px", 
backgroundImage: `url('./images/aside.jpg')`,
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "120px"
}

export const mainTitleProps: MainTitleTypes = {
 size:"sm",
 m:"0.3em 0", 
 color:"#dc143c",
 fontFamily: "calibri",
}

export const subTitleProps: MainTitleTypes = {
 size:"sm",
 m:"0.5em 0", 
 color:"#666666",
 fontFamily: "calibri"
}

export const logoProps: LogoTypes = {
  width: "250px",
  height: "auto"
}
