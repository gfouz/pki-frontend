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
  margin: string;
  width: string;
  height: string;
}

export const drawerProps: asideStyleProps = {
height: "150px", 
backgroundImage: `url('./images/aside.jpg')`,
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "70px"
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
  width: "150px",
  height: "auto",
  margin: "0 3.5em"
}
