import { useNavigate, useParams } from 'react-router-dom';
import NovelForm from '../../components/novels/NovelForm';
import BasicLayout from '../../layouts/BasicLayout';
import { useNovel } from '../../hooks/useNovel';
import Error from '../../components/common/Error';
import Loading from '../../components/common/Loading';
import type { Novel } from '../../types/book';
import { putNovel } from '../../apis/novelApis';

const EditNovel = () => {
  const navigate = useNavigate();
  // id 가져오기
  const { id } = useParams<{ id: string }>();
  // 서버로 novel 요청
  const { serverData, loading, error } = useNovel(id);

  const handleCancel = (id: number) => {
    // 이전 페이지로 이동
    navigate(`../${id}`);
  };
  const handleSubmit = async (formData: Novel) => {
    // 서버로 업데이트 요청
    console.log('전송 데이터:', formData);
    try {
      const result = await putNovel(formData);
      // 상세보기
      navigate(`../${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  if (error) return <Error />;
  return (
    <BasicLayout>
      <h1 className="text-[32px]">Edit Book</h1>
      {loading ? (
        <Loading />
      ) : (
        <NovelForm
          novel={serverData}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      )}
    </BasicLayout>
  );
};

export default EditNovel;
