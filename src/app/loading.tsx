import { Spinner } from '@/components/Spinner';

export default function Loading() {
  return (
    <div className="flex grow items-center justify-center">
      <Spinner />
    </div>
  );
}
