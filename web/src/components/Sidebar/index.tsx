import { Logo } from "../Icons/Logo"


export const SideBar = () => {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 px-6 py-6">
      <Logo className="text-white h-4 w-auto" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-slate-100 font-medium text-sm">Guides</strong>
          <div className="text-sm flex flex-col pl-2">
            <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">introduction</a>
            <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">Quickstart</a>
            <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">SDKs</a>
            <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">Authentication</a>
            <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">Pagination</a>
            <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">Erros</a>
            <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">WeHooks</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-slate-100 font-medium text-sm">Resources</strong>
            <div className="text-sm flex flex-col pl-2">
              <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">Contacts</a>
              <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">Conversations</a>
              <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">Messages</a>
              <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">Groups</a>
              <a className="px-4 py-1.5 border-l boder-white/5 text-slate-400 hover:text-white transition-colors" href="">Attachments</a>
            </div>
          </div>
      </nav>
    </aside>
  )
}
