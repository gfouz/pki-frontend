import React from "react";
import styled from "styled-components";

interface OptionProps {
  value?: string;
  data?: Array<string>;
}

function Option({ data }: OptionProps) {
  return (
    <>
      {data ? (
        data.map((item) => {
          return <option key={item}>{item}</option>;
        })
      ) : (
        <option></option>
      )}
    </>
  );
}

export default Option;
