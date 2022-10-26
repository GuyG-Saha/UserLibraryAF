export const userValidation = (value) => {
  const error = {};
  if (!value.titleName) {
    error.titleName = "Please provide your title name";
  }
  if (!value.firstName) {
    error.firstName = "Please provide your first name";
  }
  if (!value.lastName) {
    error.lastName = "Please provide your last name";
  }
  if (!value.email) {
    error.email = "Please provide your first email";
  }
  const emailValid = value.email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (emailValid === null) {
    error.email = "Please provide your valid email";
  }
  if (!value.country) {
    error.country = "Please provide your country name";
  }
  if (!value.city) {
    error.city = "Please provide your city name";
  }
  if (!value.street) {
    error.street = "Please provide your street name";
  }
  if (!value.image) {
    error.image = "Please provide your image";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};
