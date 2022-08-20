import { useEffect, useState } from 'react';
import { useSettingsContext } from 'src/shared/context/Settings';
import {
  ARTIST,
  DESIGNER,
  DEVELOPER,
  DILETTANTE,
} from 'src/shared/constants/role';
import { keyChange } from 'src/shared/functions/keyChange';
import { roleClass } from 'src/shared/functions/roleClass';

const roles = [DEVELOPER, DESIGNER, ARTIST, DILETTANTE];

import {
  select,
  selectLabel,
  selectTrigger,
  selectNavlist,
  selectNav,
  selectOption,
  selectMenu,
  roleDevelop,
  roleDesign,
  roleArt,
  roleDabble,
} from './style.module.css';

const Select = () => {
  const [settings, setSettings] = useSettingsContext();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleRole = (event) => {
    setSettings({
      ...settings,
      role: event.target.value,
    });
  }

  const isRole = (role, value) => role === value;

  const tabs = roles.map((role) => {
    return <li className={selectNav} key={keyChange(`tab_${role}`)} role="option"><button
    aria-selected={settings.role === role}
    tabIndex={settings.role === role ? -1 : 0}
    id={keyChange(`tab_${role}`)}
    type="button"
    className={selectOption}
    onClick={(event) => handleRole(event)}
    role="tab"
    disabled={isRole(settings.role, role)}
    value={role}>{role}</button></li>
  });
  return (
    <nav className={`${select} ${roleClass(settings.role,
      roleDevelop,
      roleDesign,
      roleArt,
      roleDabble)}`}>
      <div className={selectLabel}>
        <span className={selectMenu}>
          <button className={selectTrigger} aria-haspopup="listbox">{settings.role}</button>
          <ul className={selectNavlist}>
            {tabs}
          </ul>
        </span>
      </div>
    </nav>
  );
};

export default Select;
