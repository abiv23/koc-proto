import Image from 'next/image';

export default function Membership() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Membership</h1>
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
            <h2 className="text-3xl font-bold text-kofc-blue mb-6">Join the Knights of Columbus</h2>
            <p className="mb-4">
              Membership in the Knights of Columbus is open to practicing Catholic men in union with the Holy See, who are at
              least 18 years old. A practicing Catholic is one who lives up to the Commandments of God and the precepts of the Church.
            </p>

            <h3 className="text-2xl font-bold text-kofc-blue mt-8 mb-4">Benefits of Membership</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Growing in faith and supporting the Church</li>
              <li>Helping those in need in your local community</li>
              <li>Supporting programs that promote family values and the sanctity of life</li>
              <li>Meeting other Catholic men and their families who share your values</li>
              <li>Insurance and financial benefits</li>
              <li>Leadership opportunities</li>
            </ul>

            <h3 className="text-2xl font-bold text-kofc-blue mt-8 mb-4">How to Join</h3>
            <p className="mb-4">
              To join the Knights of Columbus Council 12392, please contact us using one of the methods below:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Speak with any Knight from our council after Mass</li>
              <li>Email us at membership@kofc12392.org</li>
              <li>Call our membership director at (303) 555-1234</li>
              <li>Visit <a href="https://www.kofc.org/secure/en/join/join-the-knights.html" target="_blank" rel="noopener noreferrer" className="text-kofc-blue hover:text-kofc-gold transition-colors underline">kofc.org</a> and enter our council number: 12392</li>
            </ul>

            <div className="flex justify-center mt-8">
              <a
                href="https://www.kofc.org/secure/en/join/join-the-knights.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kofc-blue text-white px-8 py-3 rounded hover:bg-kofc-gold transition-colors"
              >
                Join Online Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
