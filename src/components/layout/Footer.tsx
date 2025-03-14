'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-kofc-blue">District 22</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://kofcknights.org/CouncilSite/?CNO=5757" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">Our Lady of the Mountain Council 5757</a></li>
              <li><a href="http://kofc12392.org/" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">Saint Joan of Arc Council 12392</a></li>
              <li><a href="https://kofcknights.org/CouncilSite/officers.asp?CNO=5064" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">Saint Joachim Council 5064</a></li>
              <li><a href="https://sites.google.com/site/kofc12979/" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">Spirit of Christ Council 12979</a></li>
              <li><a href="https://www.peterandpaulcatholic.org/" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">Saint Peter and Paul Council 13961</a></li>
              <li><Link href="/2-uncategorised/12-knights-of-columbus-district-22" className="hover:text-kofc-gold transition-colors">Google Map</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-kofc-blue">St. Joan of Arc Church</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="http://stjoanarvada.org/" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">Parish Website</a></li>
              <li><a href="https://www.facebook.com/stjoanarvada" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">Parish Facebook</a></li>
              <li><a href="http://catholicstuffpodcast.com/?tag=fr-nathan-goebel" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">Fr. Nathan Goebel Podcast</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-kofc-blue">Useful</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="http://www.kofc.org/" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">National Web Site</a></li>
              <li><a href="http://www.coloradokofc.org/" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">State Web Site</a></li>
              <li><a href="/files/documents/Rosary.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-kofc-gold transition-colors">A Guide To Praying The Rosary</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>Copyright © 1940-{currentYear} Knights of Columbus Council #12392</p>
        </div>
      </div>
    </footer>
  );
}
