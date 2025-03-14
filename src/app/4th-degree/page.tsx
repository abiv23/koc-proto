import Image from 'next/image';

export default function FourthDegree() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">4th Degree Assembly</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
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

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-kofc-blue mb-6">The Patriotic Degree</h2>
            <p className="mb-4">
              The Fourth Degree is the highest degree of the order. Members of this degree are addressed as "Sir Knight".
              The primary purpose of the Fourth Degree is to foster the spirit of patriotism and to encourage active Catholic citizenship.
            </p>

            <h3 className="text-2xl font-bold text-kofc-blue mt-8 mb-4">About the Fourth Degree</h3>
            <p className="mb-4">
              Fourth degree members belong to local units called assemblies. The fourth degree is committed to the preservation of the Church,
              the order, and the many nations where Knights serve. Fourth degree Knights serve as honor guards at civic and religious functions,
              acting as visible "Guardians of the Faith."
            </p>

            <h3 className="text-2xl font-bold text-kofc-blue mt-8 mb-4">Join the Fourth Degree</h3>
            <p className="mb-4">
              To join the Fourth Degree, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be a Third Degree member of the Knights of Columbus in good standing</li>
              <li>Be an active third degree member for at least one year</li>
              <li>Be a practical Catholic in union with the Holy See</li>
              <li>Be a citizen of the country in which you reside, or with permission, be a citizen of the country of your heritage</li>
            </ul>

            <p className="mt-6 mb-4">
              Exemplifications into the Fourth Degree are held at various times throughout the year. To join,
              contact our Assembly Faithful Navigator or ask any Fourth Degree Knight for information.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-kofc-blue mb-4">Our Assembly Information</h3>
              <p className="mb-2"><strong>Assembly Number:</strong> Fr. C. B. Woodrich Assembly</p>
              <p className="mb-2"><strong>Meeting Location:</strong> St. Joan of Arc Orleans Hall</p>
              <p className="mb-2"><strong>Meeting Time:</strong> 3rd Tuesday of each month at 7:00 PM</p>
              <p><strong>Contact:</strong> FaithfulNavigator@kofc12392.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
