import { useEffect, useState } from 'react';
import SponsorCard from './SponsorCard';

export default function HomeSponsors(props: { sponsorCard: Sponsor[] }) {
  const [sponsor, setSponsor] = useState<Sponsor[]>([]);

  useEffect(() => {
    setSponsor(props.sponsorCard);
  });

  return (
    sponsor.length != 0 && (
      <section className="md:p-12 p-6">
        <div className="flex flex-col flex-grow bg-white text-center w-4/5 m-auto">
          <h4 className="text-primary-content font-bold md:text-4xl text-2xl my-4 pb-4">
            Sponsors
          </h4>
          {/* Sponsor Card */}
          <section className="flex flex-wrap justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {sponsor.map(({ link, reference }, idx) => (
                <SponsorCard key={idx} link={link} reference={reference} />
              ))}
            </div>
          </section>
          <h2 className="my-2 text-center text-primary">
            {' '}
            {/* !change */}
            If you would like to sponsor MRUHacks, please reach out to us at&nbsp;
            <a
              href="mailto:outreach@mruhacks.ca"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              outreach@mruhacks.ca
            </a>
          </h2>
        </div>
      </section>
    )
  );
}
