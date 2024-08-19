import {useDispatch, useSelector} from "react-redux";
import {loadCountries, selectCountriesInfo, selectVisibleCountries} from "./countries-slice";
import {selectControls} from "../controls/controls-slice";
import {useEffect} from "react";

export const useCountries = () => {
  const dispatch = useDispatch();
  const {status, error, qty} = useSelector(selectCountriesInfo);
  const {search, region} = useSelector(selectControls);
  const countries = useSelector(state => selectVisibleCountries(state, {search, region}));

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch])

  return [countries, {status, error, qty}];
}