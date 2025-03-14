import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="flex justify-center mb-8">
        <Image
          src="/images/kofc-shield-header.png"
          alt="Knights of Columbus Shield"
          width={150}
          height={150}
          className="object-contain"
          crossOrigin=""
        />
      </div>

      <h1 className="text-4xl font-bold text-kofc-blue mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you are looking for does not exist or has been moved.</p>

      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-lg">Here are some helpful links:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="bg-kofc-blue text-white px-6 py-3 rounded hover:bg-kofc-gold transition-colors">
            Home
          </Link>
          <Link href="/who-we-are" className="bg-kofc-blue text-white px-6 py-3 rounded hover:bg-kofc-gold transition-colors">
            Who We Are
          </Link>
          <Link href="/what-we-do" className="bg-kofc-blue text-white px-6 py-3 rounded hover:bg-kofc-gold transition-colors">
            What We Do
          </Link>
          <Link href="/membership" className="bg-kofc-blue text-white px-6 py-3 rounded hover:bg-kofc-gold transition-colors">
            Membership
          </Link>
          <Link href="/contact-us" className="bg-kofc-blue text-white px-6 py-3 rounded hover:bg-kofc-gold transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
