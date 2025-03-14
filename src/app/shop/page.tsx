import Image from 'next/image';

export default function Shop() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Shop</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Image
              src="/images/details-coming-soon.png"
              alt="Details Coming Soon"
              width={800}
              height={600}
              className="object-contain"
              crossOrigin=""
            />
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-kofc-blue mb-6">Knights of Columbus Official Store</h2>

            <p className="mb-6 text-lg">
              Visit the official Knights of Columbus online store for all your KofC gear, religious items, and more.
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.knightsgear.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kofc-blue text-white px-8 py-3 rounded hover:bg-kofc-gold transition-colors"
              >
                Knights Gear
              </a>

              <a
                href="https://www.kofc.org/en/members/for-members/member-resources.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kofc-blue text-white px-8 py-3 rounded hover:bg-kofc-gold transition-colors"
              >
                Member Resources
              </a>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-kofc-blue mb-4">Looking for Council 12392 Apparel?</h3>
              <p className="mb-4">
                We periodically place orders for custom Council 12392 apparel and items.
                Contact our Grand Knight or Financial Secretary for information on the next order.
              </p>
              <p>
                For more information, please contact <a href="mailto:shop@kofc12392.org" className="text-kofc-blue hover:text-kofc-gold transition-colors underline">shop@kofc12392.org</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
