// ホームページ (app/page.tsx)
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">ホームページ</h1>
      <p>ここはホームページです。</p>
      <Link 
        href="/admin"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Adminへ移動
      </Link>
    </div>
  );
}
