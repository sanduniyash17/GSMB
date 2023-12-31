import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Box, useTheme } from '@mui/material';

interface ScrollbarProps {
  className?: string;
  children?: ReactNode;
}

const Scrollbar: FC<ScrollbarProps> = ({ className, children, ...rest }) => {
  const theme = useTheme();

  return (
    <Scrollbars
      // autoHide
      universal
      renderThumbVertical={() => {
        return (
          <Box
            sx={{
              width: 10,
              background: `#29818a`,
              borderRadius: `${theme.general.borderRadiusLg}`,
              transition: `${theme.transitions.create(['background'])}`,

              '&:hover': {
                background: `gray`
              }
            }}
          />
        );
      }}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Scrollbar;
