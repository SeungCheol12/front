import { useEffect } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { useAuth } from './useAuth';

function Profile() {
  const { id } = useAuth();
  const loaction = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => console.log('Current Path ', location), [loaction]);
  return (
    <>
      {/* http://localhost:5173/accout/profile/2?name=hong */}
      <h1 className="text-3xl">User - {id}</h1> {/** 2 */}
      {/** /accout/profile/2 */}
      <h1 className="text-3xl">Location - {loaction.pathname}</h1>
      {/** ?name=hong */}
      <h1 className="text-3xl">Location - {loaction.search}</h1>
      {/** hong */}
      <h1 className="text-3xl">Query String - {searchParams.get('name')}</h1>
      <button
        type="button"
        className="rounded bg-orange-500 p-3"
        onClick={() => navigate('/accout/logout')}
      >
        로그아웃
      </button>
    </>
  );
}

export default Profile;
