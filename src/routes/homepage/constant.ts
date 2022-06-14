type asideStyleProps = {
backgroundImage: string;
backgroundPosition: string;
backgroundRepeat: string;
backgroundAttachment: string;
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

export const asideStyle: asideStyleProps = {
backgroundImage: `url('./images/aside.jpg')`,
backgroundPosition: "center center",
backgroundRepeat: "no-repeat",
backgroundAttachment: "fixed",
backgroundSize: "200px"
}

export const mainTitleProps: MainTitleTypes = {
 size:"xl",
 m:"0.3em 0", 
 color:"#dc143c",
 fontFamily: "calibri",
}

export const subTitleProps: MainTitleTypes = {
 size:"sm",
 m:"0.5em 0", 
 color:"crimson",
 fontFamily: "calibri"
}

export const logoProps: LogoTypes = {
  width: "250px",
  height: "auto"
}
