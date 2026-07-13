"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, User, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAdmin } from '../context/AdminContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAdmin();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const success = await login(email, password);
    if (success) {
      router.push('/');
    } else {
      setError('Invalid email address or password.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 pt-32 pb-16">
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="w-full max-w-md rounded-lg bg-white dark:bg-slate-900 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
        >
          <div className="mb-8 text-center">
            <img
              src="/api/imageProxy?id=1d1z1Z0IMS6m0bu0Vqiyth92-Q0ezsPB0"
              alt="SLFFA Cargo"
              className="mx-auto mb-4 h-20 w-auto object-contain"
            />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Member Login</h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Sign in to access cargo services and support.</p>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 overflow-hidden"
              >
                <div className="flex items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-600">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>{error}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</span>
              <span className="relative block">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-12 pr-4 text-slate-900 dark:text-white dark:placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-900 font-sans"
                  placeholder="name@example.com"
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</span>
              <span className="relative block">
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-12 pr-4 text-slate-900 dark:text-white dark:placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-900 font-sans"
                  placeholder="Enter password"
                />
              </span>
            </label>

            <div className="flex justify-end text-sm">
              <Link href="/contact" className="font-semibold text-sky-700 hover:text-sky-600">
                Need help?
              </Link>
            </div>

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0794e8] text-base font-bold text-white shadow-md transition hover:bg-[#0aa5ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 cursor-pointer"
            >
              <User className="h-5 w-5 fill-white" />
              Login
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
