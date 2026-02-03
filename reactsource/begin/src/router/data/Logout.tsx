import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { useEffect } from 'react';

function Logout() {
  // 로그인 정보 가져오기
  const { logout, id } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      logout();
    }
    // 홈으로 이동
    // navigate(경로, {replace? : boolean})
    // 어디로 갈지, 어떻게 갈지(현재 페이지를 히스토리에 남길지)
    navigate('/', { replace: true });
  });
  return null;
}

export default Logout;
