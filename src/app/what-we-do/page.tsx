import Image from 'next/image';
import Link from 'next/link';

export default function WhatWeDo() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">What We Do</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-kofc-blue text-center mb-12">
            Be Sure to Visit "Programs" Under "What We Do"
          </h2>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/details-coming-soon.png"
              alt="Details Coming Soon"
              width={800}
              height={600}
              className="object-contain"
              crossOrigin=""
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold text-kofc-blue mb-4">Our Programs</h3>
              <p className="mb-4">
                The Knights of Columbus offers men a place to lead their families and communities in faith and service.
                Knights provide for Catholic families, support the Church, and serve local communities.
              </p>
              <p className="mb-4">
                Through our programs, we build up the Church, support our priests, strengthen our families, and serve those most in need.
              </p>
              <div className="mt-6">
                <Link
                  href="/what-we-do/charitable-operations/programs"
                  className="bg-kofc-blue text-white px-6 py-3 rounded hover:bg-kofc-gold transition-colors"
                >
                  View Our Programs
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-kofc-blue mb-4">Upcoming Events</h3>
              <p className="mb-4">
                Our council organizes various events throughout the year including fundraisers, community service projects,
                and social gatherings for members and their families.
              </p>
              <p className="mb-4">
                Check our calendar regularly to stay updated on upcoming events and opportunities to get involved.
              </p>
              <div className="mt-6">
                <Link
                  href="/what-we-do/calendars"
                  className="bg-kofc-blue text-white px-6 py-3 rounded hover:bg-kofc-gold transition-colors"
                >
                  View Calendar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
