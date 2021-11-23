export default function validate(values) {

  const errors = {};
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Correo Electrónico inválido';
  }

  if (!values.password) {
    errors.password = 'Requerido'
  } else if (values.password.length > 100) {
    errors.password = 'Contraseña demasiado larga'
  } else if (values.password.length < 4) {
    errors.password = 'Contraseña demasiado corta'
  }

  return errors;
}