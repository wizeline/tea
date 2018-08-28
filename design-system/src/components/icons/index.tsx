export default ({ icon }) => {
  switch (icon) {
    case 'arrow-back': {
      return <icon-arrow-back />;
    }
    case 'access-time': {
      return <icon-access-time />;
    }
    case 'check': {
      return <icon-check />;
    }
    case 'clear': {
      return <icon-clear />;
    }
    case 'edit': {
      return <icon-edit />;
    }
    case 'search': {
      return <icon-search />;
    }
    case 'thumb-down': {
      return <icon-thumb-down />;
    }
    case 'thumb-up': {
      return <icon-thumb-up />;
    }
    default:
      break;
  }
};
