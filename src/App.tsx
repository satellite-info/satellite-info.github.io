import {
  Admin,
  Resource,
  ShowGuesser,
  SimpleListConfigurable,
  ListGuesser
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import { PotatoeList } from './potatoes';
import { OrionList } from './orions';


export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} >
    {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/> */}
    {/* <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon}/> */}
    <Resource name="orions" list={OrionList} />
  </Admin>
);
