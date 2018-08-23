export default ({ icon, ...otherProps }) => {
  switch (icon) {
    case 'search': {
      return <icon-search {...otherProps} />;
    }
    default:
      break;
  }
};
