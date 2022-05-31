export interface IFormInput {
  //these are also! nominals for register props.
  id: string;
  tomo: string;
  folio: string;
  email: string;
  tel: string;
  cargo: string;
  representante: string;
  organismos: string[];
  empresas: string[];
  entidades: string[];
}

export const ORGANISMOS: string[] = [
  "PCC",
  "MININT",
  "FAR",
  "MTSS",
  "MINCIN",
  "MEP",
];

export const EMPRESAS: string[] = [
  "ETECSA",
  "UNE",
  "DPT",
  "FCBC",
  "UMCC",
  "ITH",
];

export const ENTIDADES: string[] = ["BANDEC", "BPA"];

// do not forget to organize this in a better way to avoid repetitions.
type InputProps = {
  size: string;
  type: string;
  variant: string;
};
type EmailInputProps = {
  size: string;
  type: string;
  variant: string;
};
type TextInputProps = {
  size: string;
  type: string;
  variant: string;
};

export const OnlyNumberInputProps: InputProps = {
  size: "sm",
  type: "number",
  variant: "flushed",
};

export const EmailInputProps: EmailInputProps = {
  size: "sm",
  type: "email",
  variant: "flushed",
};
export const TextInputProps: TextInputProps = {
  size: "sm",
  type: "text",
  variant: "flushed"
};
