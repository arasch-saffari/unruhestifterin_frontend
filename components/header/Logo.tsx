import Link from "next/link";

export function Logo() {
  return (
    <div className="flex-grow md:flex-grow-0 text-center md:text-left">
      <Link
        href="/"
        className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text"
      >
        UNRUHESTIFTER*IN
      </Link>
    </div>
  );
}
