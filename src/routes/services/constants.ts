type SidebarTypes = {
backgroundImage: string;
backgroundPosition: string;
backgroundRepeat: string;
backgroundAttachment: string;
backgroundSize: string;
}

type ToggleButtonTypes = {
  color: string;
}

export const sidebarContent: SidebarTypes = {
backgroundImage: `url('./images/aside.jpg')`,
backgroundPosition: "center center",
backgroundRepeat: "no-repeat",
backgroundAttachment: "fixed",
backgroundSize: "200px"
}

export const toggleButton: ToggleButtonTypes = {
	color: "#225566",
}

export const serviceAbout:()=>string  = ()=> {
	return `
  La empresa Segurmática brinda servicios 
  de emisión de certificados digitales para 
  firma digital de mensajería y ficheros 
  electrónicos y para la protección de 
  canales y servicios de comunicaciones. 
  A través de sus servicios, le crea a sus 
  clientes un método seguro de intercambio 
  de información basado en la criptografía 
  de llave pública (PKI). Esta tecnología 
  proporciona una verificación de la identidad 
  segura y precisa, además, protege la integridad 
  y la confidencialidad de la información. 

	`
}