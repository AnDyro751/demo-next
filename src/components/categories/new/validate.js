export default function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Campo requerido';
  } else if (values.name.length > 50) {
    errors.name = 'Nombre de categoría muy grande'
  } else if (values.name.length <= 2) {
    errors.name = 'Nombre de categoría muy pequeño'
  }

  return errors
}