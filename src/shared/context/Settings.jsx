import { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorage from 'src/shared/hooks/useLocalStorage';
import {DEVELOPER} from 'src/shared/constants/role';
import PropTypes from 'prop-types';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [role, setRole] = useLocalStorage('role_', DEVELOPER);
  const [settings, setSettings] = useState({
    role: role,
  });

  useEffect(() => {
    setRole(settings.role);
  }, [settings, setRole]);

  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  return useContext(SettingsContext);
}

SettingsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
};
