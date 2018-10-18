export default ({ icon }) => {
  switch (icon) {
    case 'access-time': {
      return <icon-access-time />;
    }
    case 'add-item': {
      return <icon-add-item />;
    }
    case 'arrow-back': {
      return <icon-arrow-back />;
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
    case 'power': {
      return <icon-power />;
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
    case 'work': {
      return <icon-work />;
    }
    default:
      break;
  }
};
