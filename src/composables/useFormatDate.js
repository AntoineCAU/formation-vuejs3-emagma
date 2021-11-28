export const formatDate = (value) => {
  const date = new Date(value);

  return date.toLocaleDateString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}
