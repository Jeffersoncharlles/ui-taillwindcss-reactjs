import { Logo } from "../Icons/Logo"
import { NavLink } from "../NavLink"


export const SideBar = () => {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 px-6 py-6 hidden lg:block">
      <Logo className="text-white h-4 w-auto" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-slate-100 font-medium text-sm">Guides</strong>
          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/content/a" >introduction</NavLink>
            <NavLink href="/content/b">Quickstart</NavLink>
            <NavLink href="/content/c" >SDKs</NavLink>
            <NavLink href="/content/d" >Authentication</NavLink>
            <NavLink href="/content/e" >Pagination</NavLink>
            <NavLink href="/content/f" >Erros</NavLink>
            <NavLink href="/content/g" >WeHooks</NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-slate-100 font-medium text-sm">Resources</strong>
            <div className="text-sm flex flex-col pl-2">
              <NavLink href="/content/h" >Contacts</NavLink>
              <NavLink href="/content/i" >Conversations</NavLink>
              <NavLink href="/content/j" >Messages</NavLink>
              <NavLink href="/content/k" >Groups</NavLink>
              <NavLink href="/content/l" >Attachments</NavLink>
            </div>
          </div>
      </nav>
    </aside>
  )
}
