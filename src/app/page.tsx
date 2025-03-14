import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-6 px-4 md:px-6">
          <div className="md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0">
            <Image
              src="/images/kofc-shield-header.png"
              alt="Knights of Columbus Shield"
              width={150}
              height={150}
              className="object-contain"
              crossOrigin=""
            />
          </div>
          <div className="md:w-2/4 text-center mb-6 md:mb-0">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">Knights of Columbus</h1>
            <h2 className="text-white text-xl md:text-2xl">St. Joan of Arc Church</h2>
          </div>
          <div className="md:w-1/4 flex justify-center md:justify-end">
            <Image
              src="/images/kneeling-knight-01.png"
              alt="Kneeling Knight"
              width={150}
              height={150}
              className="object-contain"
              crossOrigin=""
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Coming Events */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-kofc-blue border-b pb-2">COMING EVENTS</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-kofc-blue">COUNCIL MEETING</h4>
                <p>MARCH 12, 2025</p>
                <p>7:00 PM</p>
                <p>SJA ORLEANS HALL</p>
              </div>
              <div>
                <h4 className="font-bold text-kofc-blue">LENTEN SOUP NIGHT</h4>
                <p>SPONSORED BY COUNCIL 12392</p>
                <p>WEDNESDAY, MARCH 12, 2025 AT 6:00 PM</p>
                <p>SETUP AT 5:00 PM</p>
                <p>SJA ORLEANS HALL</p>
              </div>
              <div>
                <h4 className="font-bold text-kofc-blue">BREAKFAST BURRITOS</h4>
                <p>SATURDAY AND SUNDAY, APRIL 5-6, 2025</p>
                <p>SALES AFTER ALL MASSES</p>
              </div>
              <div>
                <h4 className="font-bold text-kofc-blue">PANCAKE BREAKFAST</h4>
                <p>AFTER 7:30 AND 9:00 AM MASSES</p>
                <p>SJA ORLEANS HALL</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-kofc-blue">FIRST SATURDAY OF EACH MONTH</h3>
                <div className="flex items-center mb-4">
                  <Link href="#" className="text-xl font-bold text-kofc-blue hover:text-kofc-gold transition-colors">
                    Prayers Around Planned Parenthood
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/PrayersAroundPlanndParenthood.png"
                    alt="Prayers Around Planned Parenthood"
                    width={240}
                    height={140}
                    className="object-contain"
                    crossOrigin=""
                  />
                </div>
                <p className="mt-4">
                  The council organizes a monthly prayer time around Planned Parenthood to help end abortion in our time.
                  This is the first Saturday of each month. Periodically, there is a Mass scheduled, too.
                  Check the <a href="https://www.parishesonline.com/find/st-joan-of-arc-church-80002/bulletin/file"
                  target="_blank" rel="noopener noreferrer" className="text-kofc-blue hover:text-kofc-gold transition-colors">parish bulletin</a> and
                  the <Link href="#" className="text-kofc-blue hover:text-kofc-gold transition-colors">council calendar</Link> for more information.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column - Main Content */}
          <div className="md:col-span-1">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/spring-retreat-kofc12392-small.png"
                alt="Spring Retreat"
                width={300}
                height={300}
                className="object-contain"
                crossOrigin=""
              />
            </div>
            <div className="text-center mb-6">
              <p className="text-xl font-bold text-kofc-blue">COME JOIN US!!!</p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-kofc-blue mb-4">
                <Link href="#" className="hover:text-kofc-gold transition-colors">
                  Our Knights of Columbus Council Is Hosting a Parish-Wide Retreat, May 21st
                </Link>
              </h2>
              <p className="mb-4">
                We will start the day by honoring Arvada Police Officer Gordon Beesley. At 10:00 a.m., the APD will be presented
                with the body armor you helped donate by purchasing burritos in September.
              </p>
              <p className="mb-4">
                The walk will start at 11:00 a.m. from the Arvada Police Department to Memorial Park. We will enjoy lunch in the
                St. Joan of Arch Orleans Hall and then listen to a presentation by our own Deacon Tim Heaton at 1:00 p.m.
                The topic is "Metanoia/Change of Heart. Why your holiness depends on it."
              </p>
              <h3 className="text-lg font-bold text-kofc-blue mb-2">
                Please RSVP by May 18th to any of the following (voice or text):
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="tel:+17208548119" className="hover:text-kofc-gold transition-colors">
                    Gary Tuka: 720-854-8119
                  </a>
                </li>
                <li>
                  <a href="tel:+13037176202" className="hover:text-kofc-gold transition-colors">
                    Kevin Kroeker: 303-717-6202
                  </a>
                </li>
                <li>
                  <a href="tel:+13036216355" className="hover:text-kofc-gold transition-colors">
                    Dan Murphy: 303-621-6355
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Other Activities */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-kofc-blue">Other Activities</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/KnightsInAction_-_kofcpei-c96f132c.png"
                alt="Knights in Action"
                width={240}
                height={140}
                className="object-contain"
                crossOrigin=""
              />
            </div>
            <p className="mb-6">
              Please see our <Link href="/what-we-do/calendars" className="text-kofc-blue hover:text-kofc-gold transition-colors">Calendars</Link> and
              the <a href="https://www.parishesonline.com/find/st-joan-of-arc-church-80002/bulletin/file"
              target="_blank" rel="noopener noreferrer" className="text-kofc-blue hover:text-kofc-gold transition-colors">St Joan of Arc Parish bulletin</a> for
              other upcoming activities.
            </p>

            <h3 className="font-bold text-lg mb-4 text-kofc-blue">Previous Events</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/pancakes-burritos-plates.png"
                alt="Pancakes and Burritos"
                width={240}
                height={140}
                className="object-contain"
                crossOrigin=""
              />
            </div>
            <p className="mb-2 font-bold">Burrito/Pancake Breakfast</p>
            <h3 className="text-lg font-bold text-kofc-blue mb-2">
              <Link href="#" className="hover:text-kofc-gold transition-colors">
                The next Pancake Breakfast and Burrito Sale is May 1 and To-go sales begin April 30. $5 per person; Max per family is $20.
                Mothers eat free and will be presented with a gift. Proceeds will benefit a Pro-life cause.
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
