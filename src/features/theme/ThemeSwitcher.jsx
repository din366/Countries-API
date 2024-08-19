import {IoMoon, IoMoonOutline} from "react-icons/io5";
import styled from 'styled-components';
import {useEffect} from "react";
import {setTheme} from "./theme-slice";
import {useTheme} from "./useTheme";
import {useDispatch} from "react-redux";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;
const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const [theme, toggleTheme] = useTheme();
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      dispatch(setTheme(localStorage.getItem('theme')));
      console.log(localStorage.getItem('theme'));
    }
  }, [])



  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}{' '}
      <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
    </ModeSwitcher>
  );
};

export {ThemeSwitcher};