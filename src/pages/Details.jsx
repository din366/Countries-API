import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import {selectCurrentCountry, selectDetails} from "../store/details/details-selectors";
import {clearDetails, loadCounryByName} from "../store/details/details.actions";


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {currentCountry, error, status} = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCounryByName(name));

    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>...loading</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
