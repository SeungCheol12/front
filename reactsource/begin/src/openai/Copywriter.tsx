import React, { useState } from 'react';
import axios from 'axios';

export const API_SERVER_HOST = 'http://localhost:8080/api/v1';

export const postForm = async (formData: FormDataType) => {
  const res = await axios.post(`${API_SERVER_HOST}/ad`, formData);
  return res.data;
};
type FormDataType = {
  name: string;
  brand: string;
  strength: string;
  tone: string;
  keyword: string;
  value: string;
};
const initalData = {
  name: '',
  brand: '',
  strength: '',
  tone: '',
  keyword: '',
  value: '',
};
function Copywriter() {
  const [formData, setFormData] = useState<FormDataType>(initalData);
  const [loading, setLoding] = useState(false);
  const [ads, setAds] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoding(true);
      const result = await postForm(formData);

      console.log(result);
      setAds(result);
    } catch (error) {
      console.error('error', error);
    } finally {
      setLoding(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h2> 광고 문구 생성</h2>
      <form className="mt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
        {(
          [
            ['name', '제품명'],
            ['brand', '브랜드명'],
            ['strength', '제품특징'],
            ['tone', '톤앤매너'],
            ['keyword', '제품 키워드'],
            ['value', '브랜드 핵심 가치'],
          ] as [keyof FormDataType, string][]
        ).map(([name, label]) => (
          <div className="flex flex-col" key={name}>
            <label htmlFor={name} className="mb-1 text-sm font-medium">
              {label}
            </label>
            <input
              name={name}
              placeholder={label}
              required
              value={formData[name]}
              onChange={handleChange}
              className="rounded-xs border-2 border-stone-300 p-2"
            />
          </div>
        ))}
        <div className="p-2 text-center">
          <button
            type="submit"
            className="mx-1 my-6 rounded-[3px] bg-sky-500 px-4.5 py-3 text-[1.2em] text-white hover:bg-sky-800"
            disabled={loading}
          >
            {loading ? '광고 문구 생성중...' : '광고 문구 생성'}
          </button>
        </div>
        {/* ai 결과 보여주기 */}
        {ads && (
          <textarea
            className="rounded-lg border border-gray-300 px-3 py-2"
            rows={5}
            value={ads}
            readOnly
          ></textarea>
        )}
      </form>
    </div>
  );
}

export default Copywriter;
