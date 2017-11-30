export default (values) => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length < 5) {
    errors.username = 'Must be 5 characters or more'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 5) {
    errors.password = 'Must be 5 characters or more'
  }

  return errors
}
