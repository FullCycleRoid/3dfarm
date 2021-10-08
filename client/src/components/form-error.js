import React from "react";

export default function FormErrors ({formErrors}) {

      return (
            <>
                  {Object.keys(formErrors).map((fieldName, i) => {
                        if (formErrors[fieldName].length > 0) {
                              return (<p key={i}>{formErrors[fieldName]}</p>)
                        } else {
                              return '';
                        }
                  })}
            </>
      )
}