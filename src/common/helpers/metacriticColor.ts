export const metacriticColor = (x: number) => {
  switch (true) {
    case x >= 90:
      return {
        colorElement: '#6dc849',
        borderColor: 'rgba(109,200,73,.4)',
      };
    case x >= 75:
      return {
        colorElement: '#6dc849',
        borderColor: 'rgba(109,200,73,.4)',
      };
    case x >= 50:
      return {
        colorElement: '#fdca52',
        borderColor: 'rgba(253,202,82,.4)',
      };
    case x >= 20:
      return {
        colorElement: '#fc4b37',
        borderColor: 'rgba(252,75,55,.4)',
      };
    default:
      return {
        colorElement: '#fc4b37',
        borderColor: 'rgba(252,75,55,.4)',
      };
  }
};
