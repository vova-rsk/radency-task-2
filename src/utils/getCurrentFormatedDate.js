export default function getCurrentFormatedDate() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return new Date().toLocaleString('en-US', options);
}
