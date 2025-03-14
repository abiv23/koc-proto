import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[300px] relative overflow-hidden">
        <Image
          src="/images/wall-12392.webp"
          alt="Knights of Columbus"
          fill
          className="object-cover"
          crossOrigin=""
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white shadow-lg bg-primary/50 px-6 py-3 rounded">
            Who We Are
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-kofc-blue mb-6">Our History</h2>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-3/4">
              <p className="mb-4">
                Thanks to the efforts of Father Michael J. McGivney, assistant pastor of St. Mary's Church in New Haven and some of his parishioners,
                the Connecticut state legislature on March 29, 1882, officially chartered the Knights of Columbus as a fraternal benefit society.
                The Order is still true to its founding principles of charity, unity and fraternity.
              </p>
              <p className="mb-4">
                The Knights was formed to render financial aid to members and their families. Mutual aid and assistance are offered to sick,
                disabled and needy members and their families. Social and intellectual fellowship is promoted among members and their families
                through educational, charitable, religious, social welfare, war relief and public relief works.
              </p>
              <p className="mb-4">
                The history of the Order shows how the foresight of Father Michael J. McGivney, whose cause for sainthood is being investigated by
                the Vatican, brought about what has become the world's foremost Catholic fraternal benefit society. The Order has helped families
                obtain economic security and stability through its life insurance, annuity and long-term care programs, and has contributed time
                and energy worldwide to service in communities.
              </p>
              <p className="mb-4">
                The Knights of Columbus has grown from several members in one council to more than 15,100 councils and 1.9 million members
                throughout the United States, Canada, the Philippines, Mexico, Poland, the Dominican Republic, Puerto Rico, Panama, the
                Bahamas, the Virgin Islands, Cuba, Guatemala, Guam, Saipan, Lithuania, Ukraine, and South Korea.
              </p>
            </div>
            <div className="md:w-1/4">
              <div className="flex justify-center">
                <Image
                  src="/images/Michael_J_McGivney-portrait.jpeg"
                  alt="Father Michael J. McGivney"
                  width={200}
                  height={300}
                  className="object-contain border-4 border-kofc-gold"
                  crossOrigin=""
                />
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-kofc-blue mb-6">Our Officers</h2>
          <p className="mb-4">
            Each year our council elects and appoints new men to take on leadership roles within the council. Sometimes these roles are
            well-defined while other times the role may be expanded based on that individual's talents or interests. For more information and details,
            visit <a href="https://www.kofc.org/en/get-involved/college-councils/resources/council-officer-roles.html"
            target="_blank" rel="noopener noreferrer" className="text-kofc-blue hover:text-kofc-gold transition-colors underline">
              Understanding Council Officer Roles and Responsibilities
            </a>.
          </p>
          <div className="flex justify-center my-6">
            <a
              href="/who-we-are/officers"
              className="bg-kofc-blue text-white px-8 py-3 rounded hover:bg-kofc-gold transition-colors"
            >
              Council 12392 Officers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
