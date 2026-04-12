/** Minimal inline icons — no external deps */

export function IconPlus(props: { className?: string }) {
  return (
    <svg className={props.className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M11 5v6H5v2h6v6h2v-6h6v-2h-6V5h-2z"
      />
    </svg>
  )
}

export function IconReset(props: { className?: string }) {
  return (
    <svg className={props.className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 6V3L8 7l4 4V8c2.76 0 5 2.24 5 5 0 1.02-.31 1.97-.84 2.75l1.46 1.46A6.96 6.96 0 0 0 19 13c0-3.87-3.13-7-7-7zm0 14c-2.76 0-5-2.24-5-5 0-1.02.31-1.97.84-2.75L6.38 10.8A6.96 6.96 0 0 0 5 13c0 3.87 3.13 7 7 7v3l4-4-4-4v3z"
      />
    </svg>
  )
}

export function IconLayers(props: { className?: string }) {
  return (
    <svg className={props.className} width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 16.5l7.4-4.25-2.15-1.24L12 14.15 6.75 10.99 4.6 12.25 12 16.5zm0-3.24L4.6 9 12 4.5 19.4 9 12 13.26zM4.6 15l2.15 1.25L12 19.5l5.25-3.25L19.4 15 12 19.26 4.6 15z"
      />
    </svg>
  )
}

export function IconBranch(props: { className?: string }) {
  return (
    <svg className={props.className} width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-3zm8-13v9h2V8.08L18 10V8l-6-6H6v2h4v2H6v2h6z"
      />
    </svg>
  )
}

export function IconGrid(props: { className?: string }) {
  return (
    <svg className={props.className} width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"
      />
    </svg>
  )
}

/** Colocated: state lives inside the subtree */
export function IconLocal(props: { className?: string }) {
  return (
    <svg className={props.className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 21a6 6 0 0 1-6-6c0-4 6-10 6-10s6 6 6 10a6 6 0 0 1-6 6zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      />
    </svg>
  )
}

export function IconLift(props: { className?: string }) {
  return (
    <svg className={props.className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3h16v2H4V3z"
      />
    </svg>
  )
}
