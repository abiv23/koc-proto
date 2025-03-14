import Image from 'next/image';

export default function ContactUs() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Contact Us</h1>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-kofc-blue mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-kofc-blue">Mailing Address</h3>
                  <p>Knights of Columbus Council 12392</p>
                  <p>St. Joan of Arc Catholic Church</p>
                  <p>12735 W. 58th Avenue</p>
                  <p>Arvada, CO 80002</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-kofc-blue">Meeting Location</h3>
                  <p>St. Joan of Arc Orleans Hall</p>
                  <p>General Council Meeting: 2nd Tuesday of each month at 7:00 PM</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-kofc-blue">Email</h3>
                  <p><a href="mailto:info@kofc12392.org" className="text-kofc-blue hover:text-kofc-gold transition-colors">info@kofc12392.org</a></p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-kofc-blue">Council Officers</h3>
                  <p><strong>Grand Knight:</strong> John Smith</p>
                  <p><strong>Deputy Grand Knight:</strong> Michael Johnson</p>
                  <p><strong>Financial Secretary:</strong> Robert Williams</p>
                  <p>
                    <a
                      href="/who-we-are/officers"
                      className="text-kofc-blue hover:text-kofc-gold transition-colors underline"
                    >
                      See All Officers
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-kofc-blue mb-6">Visit Us</h2>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-kofc-blue mb-4">Parish Location</h3>
                <p className="mb-4">St. Joan of Arc Catholic Church is located in Arvada, Colorado.</p>
                <div className="relative w-full aspect-w-16 aspect-h-9 rounded overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.7350833945354!2d-105.13970992412511!3d39.803011971539354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8994e3adaa5d%3A0xa71fb7641e5f0e5e!2sSt.%20Joan%20of%20Arc%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1687373784972!5m2!1sen!2sus"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-kofc-blue mb-4">Stay Connected</h3>
                <p className="mb-4">Follow St. Joan of Arc Parish on social media:</p>
                <a
                  href="https://www.facebook.com/stjoanarvada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] text-white px-4 py-2 rounded inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
