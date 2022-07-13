export const objectValidation = (values) => {
    let status = true;
    const keys = Object.keys(values);
    keys.forEach((item) => {
      if (!values[item]) {
        alert('mohon untuk mengisi ' + item);
        status = false;
      }
    });
    return status;
  };