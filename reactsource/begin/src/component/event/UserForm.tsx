import { useState } from 'react';

function UserForm() {
  const initUser = {
    username: '',
    isSubscribed: false,
    role: 'user',
  };
  const roles = ['user', 'admin', 'guest'];
  // name, role, subscribe => 상태관리 => 개별 or 통합
  const [formData, setFormData] = useState(initUser);
  const { username, isSubscribed, role } = formData;
  // name, role, subscribe 요소에 변화가 일어나는 것 감지 함수
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target;
    const { name } = e.target;
    const nextForm = {
      // 기존의 것을 복제해서 남겨놔야 비교해 리랜더링 할 수 있다
      ...formData,
      [name]:
        target instanceof HTMLInputElement && target.type === 'checkbox'
          ? target.checked
          : target.value,
    };
    setFormData(nextForm);
  };
  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-center text-2xl font-semibold">USER</h2>
          <form action="">
            <div>
              Name : {username} {isSubscribed && '(Subscribed)'}
            </div>
            <div>Role : {role}</div>
            <div>
              <input
                type="text"
                name="username"
                className="boreder flex-1 rounded px-3 py-2"
                placeholder="Name"
                onChange={handleChange}
                value={username}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="isSubscribed"
                id=""
                onChange={handleChange}
                checked={isSubscribed}
              />
              <label htmlFor="">Subscribe</label>
            </div>
            <div>
              <select name="role" id="" value={role}>
                {roles.map((role, idx) => (
                  <option value={role} key={idx}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserForm;
