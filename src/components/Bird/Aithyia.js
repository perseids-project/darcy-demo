import React, { Fragment } from 'react';

import { EditionType } from '../../types';

import styles from './Bird.module.css';

import aithyia from './aithyia.png';

const renderFirstEdition = () => (
  <Fragment>
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>Aithyia (1st edition)</h2>
        <h6>αἴθυια</h6>
      </div>
    </div>

    <div className="row pt-3">
      <div className="col-12 col-md-8 offset-md-2 text-justify">
        <img
          src={aithyia}
          alt="aithyia"
          className={`ml-3 mb-1 mt-1 ${styles.image}`}
        />
        <p>
          A poetic word, of uncertain or indefinite meaning. Probably a large Gull e.g.
          {' '}
          <a href="https://ebird.org/species/gbbgul?siteLanguage=en_US"><em>Larus marinus</em></a>
          , the
          {' '}
          <strong>Black-backed Gull</strong>
          {' '}
          (Sundevall), or
          {' '}
          <a href="https://ebird.org/species/hergul?siteLanguage=en_US"><em>Larus argentatus</em></a>
          , the
          {' '}
          <strong>Herring Gull </strong>
          (Krüper), the former being rare in Greece. Netolicka&apos;s hypothesis of the
          {' '}
          <a href="https://ebird.org/species/commer?siteLanguage=en_US"><em>Merganser</em></a>
          {' '}
          and that of Groshans that it was a
          {' '}
          <strong>Diver</strong>
          {' '}
          or
          {' '}
          <a href="https://ebird.org/species/whtgre3/"><strong>Grebe</strong></a>
          {' '}
          do not tally with Aristotle
          {' '}
          <a href="http://classics.mit.edu/Aristotle/history_anim.5.v.html">
            <em>Historia Animalium</em>
            {' '}
            5.9, 542b
          </a>
          {' '}
          ἡ δʼ αἴθυια καὶ οἱ λάροι τίκτουσι μέν ἐν ταῖς περὶ θάλατταν πέτραις, τὸ μέν πλῆθος δύο ἢ τρία· ἀλλʼ ὁ μέν λάρος τοῦ θέρους, ἡ δʼ αἴθυια ἀρχομένου τοῦ ἔαρος &quot;The aithyia, or diver, and the larus, or gull, lay their eggs on rocks bordering on the sea, two or three at a time; but the gull lays in the summer, and the diver at the beginning of spring, just after the winter solstice, and it broods over its eggs as birds do in general. And neither of these birds resorts to a hiding-place.&quot; Schneider&apos;s identification with the
          {' '}
          <strong>Skua</strong>
          ,
          {' '}
          <a href="https://digitalcollections.nypl.org/items/510d47d9-75e1-a3d9-e040-e00a18064a99">Lestris Parasiticus</a>
          {' '}
          fails inasmuch as the latter does not dive (vide Buchholz, op.cit. pp. 112, 113) nor does it breed in the Mediterranean. The Herring Gull is abundant during the winter and breeds about the middle of April: the
          {' '}
          <strong>Common Tern</strong>
          {' '}
          (
          <a href="https://ebird.org/species/comter?siteLanguage=en_US">Sterna anglica</a>
          ) lays about the same time as the Herring gull (Krüper) but in the lagoons and not on the cliffs.
        </p>

        <p>
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0012.tlg002.perseus-eng1:5.313-5.364">
            <em>Odyssey</em>
            {' '}
            5. 337-353
          </a>
          {' '}
          τὸν δὲ ἴδεν Κάδμου θυγάτηρ, καλλίσφυρος Ἰνώ Λευκοθέη, ἣ πρὶν μὲν ἔην βροτὸς αὐδήεσσα, νῦν δ᾽ ἁλὸς ἐν πελάγεσσι θεῶν ἒξ ἔμμορε τιμῆς. ἥ ῥ᾽ Ὀδυσῆ᾽ ἐλέησεν ἀλώμενον, ἄλγε᾽ ἔχοντα, αἰθυίῃ δ᾽ ἐικυῖα ποτῇ ἀνεδύσετο λίμνης. &quot;And Ino the daughter of Cadmus of the fair ankles saw him, she who used to speak with the voice of a mortal, and was now receiving the honor of the gods in the depths of the sea. She took pity on Odysseus, wandering and suffering evils, and like an aithyia she rose from the depths on the wing&quot;. Aristotle,
          {' '}
          <a href="http://classics.mit.edu/Aristotle/history_anim.5.v.html">
            <em>Historia Animalium</em>
            , 5.9
          </a>
          . &quot;The aithyia, or diver, and the larus, or gull, lay their eggs on rocks bordering on the sea, two or three at a time; but the gull lays in the summer, and the diver at the beginning of spring, just after the winter solstice, and it broods over its eggs as birds do in general. And neither of these birds resorts to a hiding-place.&quot; (ἡ δʼ αἴθυια καὶ οἱ λάροι τίκτουσι μέν ἐν ταῖς περὶ θάλατταν πέτραις, τὸ μέν πλῆθος δύο ἢ τρία· ἀλλʼ ὁ μέν λάρος τοῦ θέρους, ἡ δʼ αἴθυια ἀρχομένου τοῦ ἔαρος...). See the
          {' '}
          <a href="https://ebird.org/species/commer?siteLanguage=en_US"><strong>Mergus</strong></a>
          , Pliny,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0978.phi001.perseus-eng1:10.48">
            <em>Naturalis Historia</em>
          , 10. 48
          </a>
          . Also the same comment by Pliny at 1. 487, 8.3. Αrrian,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0074.tlg004.perseus-grc1:3">
            <em>Periplus</em>
          , 89
          </a>
          {' '}
          names it with λάροι
          {' '}
          <a href="https://ebird.org/species/gbbgul?siteLanguage=en_US">&quot;the larus&quot;</a>
          {' '}
          and κορῶναι αἱ θαλάσσιαι &quot;sea-crows&quot;. Hesychius,
          {' '}
          <em>Lexicon</em>
          {' '}
          renders aἴθυιαι by εἰνάλιαι κορῶναι &quot;crows that live in the sea&quot;. Frequent in the
          {' '}
          <em>Greek Anthology</em>
          , e.g. 6.23,
          {' '}
          <a href="https://anthologia.ecrituresnumeriques.ca/entities/314">7.212 (Mnasalcas)</a>
          ,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc2:7.285">7.285</a>
          , ὄλετο γὰρ σὺν νηὶ, τὰ δʼ ὁστέα ποῦ ποτʼ ἐκείνου πύθεται, αἰθυίαις γνωστὰ μόναις ἐνέπειν, &quot;He perished with his ship, and no one has found out where his bones lie, only the aithyiai can tell&quot;,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc2:7.374">7.374</a>
          ,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc4:10.8">10.8</a>
          . Philemon,
          {' '}
          <em>On Animals</em>
          , says that it is hostile to πελαργός and κρέξ. Is said to be deaf and dumb in Aristophanes,
          {' '}
          <em>Historia Animalium Epitome</em>
          {' '}
          1.141. The metamorphosis of Hyperippa, daughter of Munychus,
          {' '}
          <a href="https://en.wikipedia.org/wiki/Munichus">Nicander in Antoninus Liberalis, 14</a>
          .
          {' '}
          <a href="https://www.theoi.com/Text/AratusPhaenomena.html">
            Aratus,
            {' '}
            <em>Phaenomena</em>
            , 918
          </a>
          , a sign of rain: πολλάκις δʼἀγριάδες νῆσσαι εἰναλίδιναι οἴθυιαι χερσαῖα τινάσσονται ππrερύγεσσιν &quot;often before a storm the aithyia who whirl in the sea beat their wings on the shore&quot;.
          {' '}
          <a href="http://penelope.uchicago.edu/Thayer/E/Roman/Texts/Theophrastus/De_signis*.html">
            Theophrastus,
            {' '}
            <em>On Weather Signs</em>
            , 2.28
          </a>
          ,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0690.phi002.perseus-eng1:1.351-1.392">
            Virgil,
            {' '}
            <em>Georgics</em>
            {' '}
            1.362
          </a>
          . Α lοng but unsatisfactory description in Dionysius
          {' '}
          <em>On Birds</em>
          , 5 2.5. Α title or epithet of Athena, Pausanias
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0525.tlg001.perseus-eng1:1.5.3">1.5.3</a>
          ,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0525.tlg001.perseus-eng1:1.41.6">1.41.6</a>
          . Said to be the name of a horse in
          {' '}
          <a href="https://anthologia.ecrituresnumeriques.ca/entities/314">Mnasalcas, Greek Antholgogy 7.212</a>
          . See also δύππτης, λάρoς.
          {' '}
        </p>
      </div>
    </div>
  </Fragment>
);

const renderSecondEdition = () => (
  <Fragment>
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>Aithyia (2nd edition)</h2>
        <h6>Lorem ipsum dolor sit amet</h6>
      </div>
    </div>

    <div className="row pt-3">
      <div className="col-12 col-md-8 offset-md-2 text-justify">
        <img
          src={aithyia}
          alt="aithyia"
          className={`ml-3 mb-1 mt-1 ${styles.image}`}
        />
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <p>
          Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Quisque aliquet interdum gravida. Sed sagittis diam in diam egestas iaculis. Nunc sit amet turpis ac eros vehicula mollis. Curabitur ex turpis, bibendum sed tortor ac, blandit eleifend enim. Maecenas sodales leo in sollicitudin tempus. Vestibulum urna odio, sagittis eu molestie at, dignissim vitae urna. Mauris aliquam dictum mi et viverra. Cras ullamcorper tempus elit, in molestie quam aliquam a. Ut feugiat vel nisl non eleifend.
        </p>
        <p>
          Etiam volutpat dignissim aliquet. Nullam sed massa ac urna semper gravida vitae sit amet elit. Maecenas pellentesque sem non velit vehicula, ac dapibus magna condimentum. Nullam euismod massa ligula, non eleifend mauris euismod et. Ut gravida egestas maximus. Ut sed orci vitae felis consectetur lobortis sed vitae magna. Nullam nec nisl fringilla, suscipit odio et, consectetur ex. Suspendisse nec malesuada orci.
        </p>
      </div>
    </div>
  </Fragment>
);

const Aithyia = ({ edition }) => {
  switch (edition) {
    case '1st':
      return renderFirstEdition();
    case '2nd':
      return renderSecondEdition();
    default:
      return (
        <h2>
          Uknown edition
        </h2>
      );
  }
};

Aithyia.propTypes = {
  edition: EditionType.isRequired,
};

export default Aithyia;
