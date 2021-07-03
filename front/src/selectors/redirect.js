import { useHistory } from 'react-router-dom';

export const redirect = () => {
  const history = useHistory();
  history.push('/');
}