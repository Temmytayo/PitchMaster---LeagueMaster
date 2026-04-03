export function validateRequired(values, fields) {
  const errors = {};
  fields.forEach((field) => {
    if (!values[field]) errors[field] = 'Required';
  });
  return errors;
}

export function calculateAge(dob) {
  if (!dob) return 0;
  const diff = Date.now() - new Date(dob).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
