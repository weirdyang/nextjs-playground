import Link from 'next/link'
import { useRouter } from 'next/router'
function CustomLink({ href, title, className = '' }) {
  const router = useRouter()
  const width =
    router.asPath.toLowerCase() === href.toLowerCase() ? 'w-full' : 'w-0'
  console.log(width)
  console.log(router.asPath)
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
            h-[1px] inline-block  bg-slate-950 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${width}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export default CustomLink
