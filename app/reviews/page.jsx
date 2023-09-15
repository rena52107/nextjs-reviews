import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';

export default async function ReviewsPage() {
  const reviews = await getReviews();
  console.log(reviews);
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review) => (
          <li className='bg-white border rounded shadow w-80 hover:shadow-xl'>
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt={review.slug}
                width='320'
                height='180'
                className='mb-2 rounded-t'
              />
              <h2 className='font-semibold font-orbitron py-1 text-center'>
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
