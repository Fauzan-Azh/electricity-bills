'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // Mock login tanpa backend: valid jika kedua field diisi
      if (!username || !password) {
        throw new Error('Harap isi username dan password');
      }
      const fakeAccess = 'fake-access-token';
      const fakeRefresh = 'fake-refresh-token';
      localStorage.setItem('accessToken', fakeAccess);
      localStorage.setItem('refreshToken', fakeRefresh);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        <section className="flex flex-col justify-center items-center h-full px-4 sm:px-10 lg:px-24">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-[#12250F] mb-2 text-left">Selamat Datang!</h1>
              <p className="text-gray-600 text-left">Silahkan masukkan username serta password anda.</p>
            </div>
            <form onSubmit={onSubmit} className="space-y-6 w-full">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#12250F]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-[#12250F] appearance-none"
                    required
                  />
                  {/* Icon toggle harus benar-benar satu, tidak double */}
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-2.5 text-gray-500"
                    aria-label="toggle password"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      // Mata terbuka
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4-10-7 0-1.12.438-2.286 1.227-3.39m3.112-2.84C7.869 5.27 9.87 5 12 5c5.523 0 10 4 10 7 0 1.167-.46 2.365-1.292 3.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    ) : (
                      // Mata tertutup
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18M9.88 9.88A3 3 0 0012 15a3 3 0 002.12-.88M10.73 5.08A9.99 9.99 0 0112 5c5.523 0 10 4 10 7 0 1.167-.46 2.365-1.292 3.5m-2.617 2.216A9.958 9.958 0 0112 19c-5.523 0-10-4-10-7 0-1.12.438-2.286 1.227-3.39"/></svg>
                    )}
                  </button>
                </div>
                <div className="mt-2">
                  <a className="text-xs text-[#6CB33F]" href="#">Lupa Password?</a>
                </div>
              </div>
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#12250F] py-2.5 text-white disabled:opacity-60"
              >
                {loading ? 'Memproses...' : 'Masuk'}
              </button>
            </form>
          </div>
        </section>

        <section className="relative h-full w-full overflow-hidden bg-white p-0">
          <Image
            src="/foto-login.png"
            alt="Login Illustration"
            fill
            priority
            className="object-contain object-right"
            sizes="100vw"
          />
        </section>
      </div>
    </main>
  );
}


