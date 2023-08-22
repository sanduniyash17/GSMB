// @mui
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function bgBlur(props) {
  const color = props?.color || '#000000';
  const blur = props?.blur || 6;
  const opacity = props?.opacity || 0.8;
  const imgUrl = props?.imgUrl;

  if (imgUrl) {
    return {
      position: 'relative',
      backgroundImage: `url(${imgUrl})`,
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9,
        content: '""',
        width: '100%',
        height: '100%',
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity)
      }
    };
  }

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity)
  };
}

// ----------------------------------------------------------------------

export function bgGradient(props) {
  const direction = props?.direction || 'to bottom';
  const startColor = props?.startColor;
  const endColor = props?.endColor;
  const imgUrl = props?.imgUrl;
  const color = props?.color;

  if (imgUrl) {
    return {
      background: `linear-gradient(${direction}, ${startColor || color}, ${
        endColor || color
      }), url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    };
  }

  return {
    background: `linear-gradient(${direction}, ${startColor}, ${endColor})`
  };
}

// ----------------------------------------------------------------------

export function textGradient(value) {
  return {
    background: `-webkit-linear-gradient(${value})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };
}

// ----------------------------------------------------------------------

export function filterStyles(value) {
  return {
    filter: value,
    WebkitFilter: value,
    MozFilter: value
  };
}

// ----------------------------------------------------------------------

export const hideScrollbarY = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
};

// ----------------------------------------------------------------------

export const hideScrollbarX = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowX: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
};

// ---------------------------------------------
// --------------------------------------------------------

export const borderStyle = {
  background: '#fff',
  border: '2px solid #DDE6ED',
  boxShadow: '10px 10px 10px rgba(0.1, 0.1, 0.1, 0.1)',
  borderRadius: '10px',
  paddingLeft: '30px',
  paddingRight: '30px',
  paddingBottom: '30px',
  position: 'relative',
  overflow: 'hidden'
};
export const formBorder = {
  background: '#fff',
  border: '2px solid #29818a',
  borderRadius: '10px',
  padding: '30px',
  marginTop: '20px'
};

export const form1Border = {
  background: '#fff',
  border: '2px solid #29818a',
  borderRadius: '10px',
  padding: '30px',
  marginLeft: '300px',
  marginRight: '300px'
  // margin: '20px',
};

export const inputStyle = {
  borderRadius: '5px',
  border: '1px solid #ccc',
  padding: '5px',
  width: '100%',
  height: '30px'
};

export const selectFullStyle = {
  width: '100%',
  height: '30px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  padding: '5px'
};

export const selectStyle = {
  width: '50%',
  height: '30px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  padding: '5px'
};

export const borderStyleNew = {
  background: '#fff',
  border: '2px solid #DDE6ED',
  boxShadow: '10px 10px 10px 10px rgba(0.1, 0.1, 0.1, 0.1)',
  borderRadius: '10px',
  paddingTop: '30px',
  paddingBottom: '10px',
  position: 'relative',
  overflow: 'hidden'
};

export const saveChangesButtonStyle = {
  borderRadius: '10px',
  background: '#fff',
  color: '#29818a',
  border: '3px solid #29818a',
  boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
  width: '150px',
  fontFamily: 'Roboto',
  fontWeight: 'normal',
  transition: 'background 0.3s, color 0.3s',
  '&:hover': {
    background: '#29818a',
    color: '#fff',
    border: '3px solid #29818a'
  }
};

export const saveButtonStyle = {
  borderRadius: '10px',
  background: '#fff',
  color: '#29818a',
  border: '3px solid #29818a',
  boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
  width: '100px',
  fontFamily: 'Roboto',
  fontWeight: 'normal',
  transition: 'background 0.3s, color 0.3s',
  '&:hover': {
    background: '#29818a',
    color: '#fff',
    border: '3px solid #29818a'
  }
};

export const updateButtonStyle = {
  borderRadius: '10px',
  borderWidth: '3px',
  fontFamily: 'roboto',
  background: '#ffffff',
  boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
  color: '#25476a',
  border: '3px solid #25476a',
  width: '100px',
  transition: 'background 0.3s, color 0.3s, border 0.3s',
  '&:hover': {
    background: '#25476a',
    color: '#ffffff',
    border: '3px solid #25476a'
  }
};

export const deleteButtonStyle = {
  borderRadius: '10px',
  borderWidth: '3px',
  fontFamily: 'roboto',
  background: '#ffffff',
  boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
  color: '#d22417',
  border: '3px solid #d22417',
  width: '100px',
  transition: 'background 0.3s, color 0.3s, border 0.3s',
  '&:hover': {
    background: '#d22417',
    color: '#ffffff',
    border: '3px solid #d22417'
  }
};
export const cancelButtonStyle = {
  borderRadius: '10px',
  borderWidth: '3px',
  fontFamily: 'roboto',
  background: '#ffffff',
  boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
  color: '#424242',
  border: '3px solid #424242',
  width: '100px',
  transition: 'background 0.3s, color 0.3s, border 0.3s',
  '&:hover': {
    background: '#424242',
    color: '#ffffff',
    border: '3px solid #424242'
  }
};

export const printButtonStyle = {
  borderRadius: '10px',
  background: '#fff',
  color: '#29818a',
  border: '3px solid #29818a',
  boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
  width: '100px',
  height: '40px',
  fontFamily: 'Roboto',
  fontWeight: 'normal',
  transition: 'background 0.3s, color 0.3s',
  '&:hover': {
    background: '#29818a',
    color: '#fff',
    border: '3px solid #29818a'
  }
};

export const allocateButtonStyle = {
  borderRadius: '10px',
  background: '#fff',
  color: '#29818a',
  border: '3px solid #29818a',
  width: '150px',
  boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
  fontFamily: 'Roboto',
  fontWeight: 'normal',
  transition: 'background 0.3s, color 0.3s',
  '&:hover': {
    background: '#29818a',
    color: '#fff',
    border: '3px solid #29818a'
  }
};

// export const H2 = {
//   textAlign: 'center',
//   color: '#25476a',
// };

// export const styleCenterFields = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginBottom: '10px',
// };


// gsmb system original