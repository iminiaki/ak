import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center text-white'>
      <div className='text-center space-y-4 p-8'>
        <h1 className='text-3xl font-semibold'>Page not found</h1>
        <p>Sorry, we couldn’t find the page you’re looking for.</p>
        <Link href='/' className='underline text-fuchsia-600'>Go back home</Link>
      </div>
    </div>
  );
}


