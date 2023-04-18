import { useState } from 'react';
import { ButtonList } from '@/stories/ButtonList';

export default function Home() {
  const [user, setUser] = useState({ id: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.id === 'OGG@test.com' && user.password === 'k12h1k0$5;lpa@Afn') {
      alert('Correct!');
      setIsLoggedIn(true);
    } else {
      alert('Wrong!');
    }
  };

  return (
    <main className="m-auto w-112">
      <form className="m-auto w-96 flex flex-col justify-center" onSubmit={handleSubmit}>
        <input
          className="mt-9 w-96 h-20 border-lime-700 border-2 bg-slate-100"
          type="text"
          name="id"
          placeholder="EMAIL"
          value={user.id}
          onChange={handleChange}
        />
        <input
          className="mt-9 w-96 h-20 border-lime-700 border-2 bg-slate-100"
          type="text"
          name="password"
          placeholder="PASSWORD"
          value={user.password}
          onChange={handleChange}
        />
        <button className="w-96 h-10 bg-orange-400 mt-9" type="submit">
          Submit
        </button>
      </form>
      {isLoggedIn && (
        <div className="m-auto w-100">
          <ButtonList error={false} />
        </div>
      )}
    </main>
  );
}
