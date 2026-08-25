import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><div><h1>404</h1><h2>Cette page n'existe pas.</h2><p>Choisissez le parcours WALS qui correspond à votre besoin.</p><Link className="primary-button" href="/">Revenir à WALS</Link></div></main>;
}
