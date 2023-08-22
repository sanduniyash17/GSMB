import { Box, Container, Link, Typography, styled } from '@mui/material';

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
`
);

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="center"
      >
        <Box>
          <Typography variant="subtitle1" >
            Sierra © 2023 All Rights Reserved.
          </Typography>
        </Box>
        {/* <Typography
          sx={{
            textAlign: 'center',
            pt: { xs: 2, md: 0 }
          }}
          variant="subtitle1"
        >
           sierra @2023 All Right Reserved
          
        </Typography> */}
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
