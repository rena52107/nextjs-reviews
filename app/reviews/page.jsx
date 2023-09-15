import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';

export default async function ReviewsPage() {
  const reviews = await getReviews();
  console.log(reviews);
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we'll list all the reviews.</p>
      <ul className='flex flex-col gap-3'>
        <li className='bg-white border rounded shadow w-80 hover:shadow-xl'>
          <Link href='/reviews/hollow-knight'>
            <img
              src='/images/hollow-knight.jpg'
              alt='hollow-knight'
              width='320'
              height='180'
              className='mb-2 rounded-t'
            />
            <h2 className='font-semibold font-orbitron py-1 text-center'>
              Hollow Knight
            </h2>
          </Link>
        </li>
        <li className='bg-white border rounded shadow w-80 hover:shadow-xl'>
          <Link href='/reviews/stardew-valley'>
            <img
              src='/images/stardew-valley.jpg'
              alt='stardew-valley'
              width='320'
              height='180'
              className='mb-2 rounded-t'
            />
            <h2 className='font-semibold font-orbitron py-1 text-center'>
              Stardew Valley
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
