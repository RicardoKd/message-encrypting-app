import { APP_KEYS } from '../common/consts';

export const logOut = () => localStorage.removeItem(APP_KEYS.STORAGE_KEYS.TOKEN);
