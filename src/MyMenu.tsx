import { Menu } from 'react-admin';
import PublicIcon from '@mui/icons-material/Public';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.ResourceItems />
        <Menu.Item to="/earth" primaryText="Earth" leftIcon={<PublicIcon />}/>
        <Menu.Item to="/rhythm" primaryText="Rhythm" leftIcon={<LibraryMusicIcon />}/>
        <Menu.Item to="/listrocket" primaryText="listRocket" leftIcon={<FormatListBulletedIcon />}/>
        <Menu.Item to="/solar_system" primaryText="solar system" leftIcon={<SolarPowerIcon />}/>
    </Menu>
);
