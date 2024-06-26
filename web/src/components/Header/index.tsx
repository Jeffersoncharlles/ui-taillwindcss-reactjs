import {Search,Moon } from 'lucide-react'


export const Header = () => {
  return (
    <header className="fixed top-0 left-0 lg:left-80 right-0 px-8 py-3 border-b border-white/10 backdrop-blur flex items-center justify-between">
      <button className='w-full max-w-md flex items-center gap-3 text-xs text-slate-400 bg-white/5 border border-white/10 px-3 h-8 rounded-full'>
        <Search size={24} />
        <span>Find something...</span>
      </button>
      <div className='flex items-center'>
        <nav className='text-sm hidden items-center gap-6 lg:flex'>
          <a className='text-slate-400 hover:text-slate-100 transition-colors' href="">API</a>
          <a className='text-slate-400 hover:text-slate-100 transition-colors' href="">Documentation</a>
          <a className='text-slate-400 hover:text-slate-100 transition-colors' href="">Support</a>
        </nav>

        <div className='flex items-center border-l border-white/10 pl-6 ml-6 gap-6'>
          <button >
            <Moon className="text-slate-100" size={14}  />
          </button>
          <button
            className='border whitespace-nowrap border-cyan-800 bg-cyan-400/10 text-cyan-500 px-3 py-0.5 rounded-full text-sm font-medium hover:border-cyan-400 transition-colors'>
            Sign in
          </button>
        </div>
      </div>
    </header>
  )
}
