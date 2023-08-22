import { useContext } from 'react';
import { useRouter } from 'next/router';
// import SidebarMenu from '../SidebarMenu';

import {
  ListSubheader,
  alpha,
  Box,
  Divider,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import NextLink from 'next/link';
import { SidebarContext } from 'src/contexts/SidebarContext';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
// import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
// import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
// import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
// import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
// import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
// import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
// import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
// import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
// import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
// import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
// import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
// import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
// import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
// import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
// import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
// import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
// import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {
      padding: 0;

      & > .MuiList-root {
        padding: 0;
        
      }
    }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: normal;
      font-size: 1.2rem;
      color: red;
      padding: 0;
      line-height: 3;
      // overflow-y: scrollbar;
      // height: 100%;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {
      .MuiListItem-root {
        padding: 0;
        margin: 5px 0; 
        

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: normal;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }

        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          font-weight: normal;
          font-size: inherit;
          margin-left: 10px;
          width: 90%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 0.7)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${alpha('#4dabf5', 0.5)};

            .MuiSvgIcon-root {
              font-weight: normal;
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
            margin-left: 5px
          }

          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: 1.0;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,

          // hover changes
            &:hover {
              background-color:  #29818a;
              color: black;
              font-weight: bold;
              font-size: inherit;
              transition: background-color 0.5s, color 0.5s;

              .MuiButton-startIcon,
              .MuiButton-endIcon {
                color: black;
                transition: color 0.5s;
              }
            }



        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;
            margin: 5px 0; 

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 10px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {
                &:before {
                  transform: scale(5); 
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/" passHref>
                  <Button
                    className={currentRoute === '="/' ? 'active' : ''}
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<DesignServicesTwoToneIcon />}
                  >
                    Overview
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/employeeregistration" passHref>
                  <Button
                    className={
                      currentRoute === '/status/employeeregistration'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Employee Registration
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/userroles" passHref>
                  <Button
                    className={
                      currentRoute === '/status/userroles' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    User Roles
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/userallocation" passHref>
                  <Button
                    className={
                      currentRoute === '/status/userallocation' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    User Allocation
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/siteregistration" passHref>
                  <Button
                    className={
                      currentRoute === '/status/siteregistration'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Site Registartion
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/miningpointregistration" passHref>
                  <Button
                    className={
                      currentRoute === '/status/miningpointregistration'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Mining Point Registartion
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/materialregistration" passHref>
                  <Button
                    className={
                      currentRoute === '/status/materialregistration'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Material Registartion
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/createpricelist" passHref>
                  <Button
                    className={
                      currentRoute === '/status/createpricelist' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Create Price List
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/tipperregistration" passHref>
                  <Button
                    className={
                      currentRoute === '/status/tipperregistration'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Tipper Registartion
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/driverhandling" passHref>
                  <Button
                    className={
                      currentRoute === '/status/driverhandling' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Driver Handling
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/revenuelicenseupdate" passHref>
                  <Button
                    className={
                      currentRoute === '/status/revenuelicenseupdate'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Revenue License Update
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/pendingtipperallocation" passHref>
                  <Button
                    className={
                      currentRoute === '/status/pendingtipperallocation'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Pending Tipper Allocation
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/viewpendingtipperallocation" passHref>
                  <Button
                    className={
                      currentRoute === '/status/viewpendingtipperallocation'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    View Pending Tipper Allocation
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/pendingpaymentverification" passHref>
                  <Button
                    className={
                      currentRoute === '/status/pendingpaymentverification'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Pending Payment Verification
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink
                  href="/status/viewpendingpaymentverification"
                  passHref
                >
                  <Button
                    className={
                      currentRoute === '/status/viewpendingpaymentverification'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    View Pending Payment Verification
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/confirmorder" passHref>
                  <Button
                    className={
                      currentRoute === '/status/confirmorder' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Confirm Order
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/viewconfirmorder" passHref>
                  <Button
                    className={
                      currentRoute === '/status/viewconfirmorder'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    View Confirm Order
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/deliveredorder" passHref>
                  <Button
                    className={
                      currentRoute === '/status/deliveredorder' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Delivered Order
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/viewdeliveredorder" passHref>
                  <Button
                    className={
                      currentRoute === '/status/viewdeliveredorder'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    View Delivered Order
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/status/inquiry" passHref>
                  <Button
                    className={
                      currentRoute === '/status/inquiry' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Inquiry
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Dashboards
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/dashboards/crypto" passHref>
                  <Button
                    className={
                      currentRoute === '/dashboards/crypto' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<BrightnessLowTwoToneIcon />}
                  >
                    Cryptocurrency
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/applications/messenger" passHref>
                  <Button
                    className={
                      currentRoute === '/applications/messenger' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<MmsTwoToneIcon />}
                  >
                    Messenger
                  </Button>
                </NextLink>
              </ListItem>\[]
            </List>
          </SubMenuWrapper>
        </List> */}

        {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Management
            </ListSubheader>
          }
        > */}
        {/* <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/management/transactions" passHref>
                  <Button
                    className={
                      currentRoute === '/management/transactions'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<TableChartTwoToneIcon />}
                  >
                    Transactions List
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
        {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Accounts
            </ListSubheader>
          }
        > */}
        {/* <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/management/profile" passHref>
                  <Button
                    className={
                      currentRoute === '/management/profile' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<AccountCircleTwoToneIcon />}
                  >
                    User Profile
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/management/profile/settings" passHref>
                  <Button
                    className={
                      currentRoute === '/management/profile/settings'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<DisplaySettingsTwoToneIcon />}
                  >
                    Account Settings
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
        {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Components
            </ListSubheader>
          }
        > */}
        {/* <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/components/buttons" passHref>
                  <Button
                    className={
                      currentRoute === '/components/buttons' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<BallotTwoToneIcon />}
                  >
                    Buttons
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/components/modals" passHref>
                  <Button
                    className={
                      currentRoute === '/components/modals' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<BeachAccessTwoToneIcon />}
                  >
                    Modals
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/components/accordions" passHref>
                  <Button
                    className={
                      currentRoute === '/components/accordions' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<EmojiEventsTwoToneIcon />}
                  >
                    Accordions
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/components/tabs" passHref>
                  <Button
                    className={
                      currentRoute === '/components/tabs' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<FilterVintageTwoToneIcon />}
                  >
                    Tabs
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/components/badges" passHref>
                  <Button
                    className={
                      currentRoute === '/components/badges' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<HowToVoteTwoToneIcon />}
                  >
                    Badges
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/components/tooltips" passHref>
                  <Button
                    className={
                      currentRoute === '/components/tooltips' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LocalPharmacyTwoToneIcon />}
                  >
                    Tooltips
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/components/avatars" passHref>
                  <Button
                    className={
                      currentRoute === '/components/avatars' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<RedeemTwoToneIcon />}
                  >
                    Avatars
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/components/cards" passHref>
                  <Button
                    className={
                      currentRoute === '/components/cards' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<SettingsTwoToneIcon />}
                  >
                    Cards
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/components/forms" passHref>
                  <Button
                    className={
                      currentRoute === '/components/forms' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<TrafficTwoToneIcon />}
                  >
                    Forms
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
        {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Extra Pages
            </ListSubheader>
          }
        > */}
        {/* <SubMenuWrapper> */}
        {/* <List component="div"> */}
        {/* <ListItem component="div">
                <NextLink href="/status/404" passHref>
                  <Button
                    className={currentRoute === '/status/404' ? 'active' : ''}
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<CheckBoxTwoToneIcon />}
                  >
                    Error 404
                  </Button>
                </NextLink>
              </ListItem> */}
        {/* <ListItem component="div">
                <NextLink href="/status/500" passHref>
                  <Button
                    className={currentRoute === '/status/500' ? 'active' : ''}
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<CameraFrontTwoToneIcon />}
                  >
                    Error 500
                  </Button>
                </NextLink>
              </ListItem> */}
        {/* <ListItem component="div">
                <NextLink href="/status/coming-soon" passHref>
                  <Button
                    className={
                      currentRoute === '/status/coming-soon' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<ChromeReaderModeTwoToneIcon />}
                  >
                    Coming Soon
                  </Button>
                </NextLink>
              </ListItem> */}

        {/* <ListItem component="div">
                <NextLink href="/status/maintenance" passHref>
                  <Button
                    className={
                      currentRoute === '/status/maintenance' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Maintenance
                  </Button>
                </NextLink>
              </ListItem> */}
        {/* </List> */}
        {/* </SubMenuWrapper> */}
        {/* </List> */}

        {/* // sx={{
        //   mt: theme.spacing(3),
        //   mx: theme.spacing(2),
        //   background: theme.colors.alpha.trueWhite[10]
        // }}
        /> */}

        <Divider />
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
