import React, { Fragment } from 'react';

import { EditionType } from '../../types';

import styles from './Bird.module.css';

import aithyia from './aithyia.png';

const renderFirstEdition = () => (
  <Fragment>
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>Aithyia (1st edition)</h2>
        <h6 lang="grc">αἴθυια</h6>
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
          <a href="https://ebird.org/species/gbbgul?siteLanguage=en_US"><em lang="lat">Larus marinus</em></a>
          , the
          {' '}
          <strong>Black-backed Gull</strong>
          {' '}
          (Sundevall), or
          {' '}
          <a href="https://ebird.org/species/hergul?siteLanguage=en_US"><em lang="lat">Larus argentatus</em></a>
          , the
          {' '}
          <strong>Herring Gull</strong>
          {' '}
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
            <em lang="lat">Historia Animalium</em>
            {' '}
            5.9, 542b
          </a>
          {' '}
          <span lang="grc">
            ἡ δʼ αἴθυια καὶ οἱ λάροι τίκτουσι μέν ἐν ταῖς περὶ θάλατταν πέτραις, τὸ μέν πλῆθος δύο ἢ τρία· ἀλλʼ ὁ μέν λάρος τοῦ θέρους, ἡ δʼ αἴθυια ἀρχομένου τοῦ ἔαρος
          </span>
          {' '}
           &quot;The aithyia, or diver, and the larus, or gull, lay their eggs on rocks bordering on the sea, two or three at a time; but the gull lays in the summer, and the diver at the beginning of spring, just after the winter solstice, and it broods over its eggs as birds do in general. And neither of these birds resorts to a hiding-place.&quot; Schneider&apos;s identification with the
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
          <span lang="grc">
            τὸν δὲ ἴδεν Κάδμου θυγάτηρ, καλλίσφυρος Ἰνώ Λευκοθέη, ἣ πρὶν μὲν ἔην βροτὸς αὐδήεσσα, νῦν δ᾽ ἁλὸς ἐν πελάγεσσι θεῶν ἒξ ἔμμορε τιμῆς. ἥ ῥ᾽ Ὀδυσῆ᾽ ἐλέησεν ἀλώμενον, ἄλγε᾽ ἔχοντα, αἰθυίῃ δ᾽ ἐικυῖα ποτῇ ἀνεδύσετο λίμνης.
          </span>
          {' '}
          &quot;And Ino the daughter of Cadmus of the fair ankles saw him, she who used to speak with the voice of a mortal, and was now receiving the honor of the gods in the depths of the sea. She took pity on Odysseus, wandering and suffering evils, and like an aithyia she rose from the depths on the wing&quot;. Aristotle,
          {' '}
          <a href="http://classics.mit.edu/Aristotle/history_anim.5.v.html">
            <em lang="lat">Historia Animalium</em>
            , 5.9
          </a>
          . &quot;The aithyia, or diver, and the larus, or gull, lay their eggs on rocks bordering on the sea, two or three at a time; but the gull lays in the summer, and the diver at the beginning of spring, just after the winter solstice, and it broods over its eggs as birds do in general. And neither of these birds resorts to a hiding-place.&quot;
          {' '}
          <span lang="grc">
            (ἡ δʼ αἴθυια καὶ οἱ λάροι τίκτουσι μέν ἐν ταῖς περὶ θάλατταν πέτραις, τὸ μέν πλῆθος δύο ἢ τρία· ἀλλʼ ὁ μέν λάρος τοῦ θέρους, ἡ δʼ αἴθυια ἀρχομένου τοῦ ἔαρος...). See the
          </span>
          {' '}
          <a href="https://ebird.org/species/commer?siteLanguage=en_US"><strong>Mergus</strong></a>
          , Pliny,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0978.phi001.perseus-eng1:10.48">
            <em lang="lat">Naturalis Historia</em>
          , 10. 48
          </a>
          . Also the same comment by Pliny at 1. 487, 8.3. Αrrian,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0074.tlg004.perseus-grc1:3">
            <em>Periplus</em>
          , 89
          </a>
          {' '}
          names it with
          <span lang="grc">
            λάροι
          </span>
          {' '}
          <a href="https://ebird.org/species/gbbgul?siteLanguage=en_US">&quot;the larus&quot;</a>
          {' '}
          and
          <span lang="grc">
            κορῶναι αἱ θαλάσσιαι
          </span>
          {' '}
          &quot;sea-crows&quot;. Hesychius,
          {' '}
          <em>Lexicon</em>
          {' '}
          renders
          {' '}
          <span lang="grc">
            aἴθυιαι
          </span>
          {' '}
          by
          {' '}
          <span lang="grc">
            εἰνάλιαι κορῶναι
          </span>
          {' '}
          &quot;crows that live in the sea&quot;. Frequent in the
          {' '}
          <em>Greek Anthology</em>
          , e.g. 6.23,
          {' '}
          <a href="https://anthologia.ecrituresnumeriques.ca/entities/314">7.212 (Mnasalcas)</a>
          ,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc2:7.285">7.285</a>
          ,
          {' '}
          <span lang="grc">
            ὄλετο γὰρ σὺν νηὶ, τὰ δʼ ὁστέα ποῦ ποτʼ ἐκείνου πύθεται, αἰθυίαις γνωστὰ μόναις ἐνέπειν,
          </span>
          {' '}
            &quot;He perished with his ship, and no one has found out where his bones lie, only the aithyiai can tell&quot;,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc2:7.374">7.374</a>
          ,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc4:10.8">10.8</a>
          . Philemon,
          {' '}
          <em>On Animals</em>
          , says that it is hostile to
          {' '}
          <span lang="grc">
            πελαργός
          </span>
          {' '}
          and
          {' '}
          <span lang="grc">
            κρέξ.
          </span>
          {' '}
          Is said to be deaf and dumb in Aristophanes,
          {' '}
          <em>
            <span lang="lat">
              Historia Animalium Epitome
            </span>
          </em>
          {' '}
          1.141. The metamorphosis of Hyperippa, daughter of Munychus,
          {' '}
          <a href="https://en.wikipedia.org/wiki/Munichus">Nicander in Antoninus Liberalis, 14</a>
          .
          {' '}
          <a href="https://www.theoi.com/Text/AratusPhaenomena.html">
            Aratus,
            {' '}
            <em lang="lat">Phaenomena</em>
            , 918
          </a>
          , a sign of rain:
          {' '}
          <span lang="grc">
            πολλάκις δʼἀγριάδες νῆσσαι εἰναλίδιναι οἴθυιαι χερσαῖα τινάσσονται ππrερύγεσσιν
          </span>
          {' '}
          &quot;often before a storm the aithyia who whirl in the sea beat their wings on the shore&quot;.
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
          . See also
          {' '}
          <span lang="grc">
            δύππτης, λάρoς.
          </span>
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
        <h6 lang="grc">αἴθυια</h6>
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
          A seabird, especially a
          {' '}
          <strong>Shearwater</strong>
          , Lat. mergus. The
          {' '}
          <strong>Great Shearwater</strong>
          ,
          {' '}
          <a href="https://ebird.org/species/corshe/" target="blank"><em>Puffinus Kuhli</em></a>
          {' '}
          (Boie), Modern Greek: ἀετένης, μῆχος, μοῖχος, μῦχος: Italian margun, berta, fallante, aipú, etc.; and the
          {' '}
          <strong>Little or Manx Shearwater</strong>
          ,
          {' '}
          <a href="https://ebird.org/species/manshe/" target="blank"><em>Puffinus anglorum</em></a>
          , Will. (or its Mediterranean form
          {' '}
          <a href="https://ebird.org/species/levshe1/" target="blank"><em>Puffinus Yelkuan</em></a>
          ): but the name, like mergus, and like Ital. margun, has at times a vaguer or a wider meaning. The name Shearwater harks back tio Sir Thomas Browne’s
          {' '}
          <a href="https://babel.hathitrust.org/cgi/pt?id=hvd.32044072254303;view=1up;seq=4;size=75" target="blank">Norfolk Birds</a>
          {' '}
          (1671), and to Willughby’s
          {' '}
          <a href="https://en.wikipedia.org/wiki/Francis_Willughby" target="blank">Ornithologia</a>
          {' '}
          (1676, p. 252): Willughby having had it, with a description and drawing of the bird, from Browne. See Διομήδιοι ὄρνιθες. See also s.vv.
          {' '}
          <span lang="grc">ἀνοπαῖα, δύπτης, ἐρωδιός, λάρος, πώυγξ, φώυξ</span>
          .
        </p>

        <p>
          αἴθυια &quot;aithyia&quot; is not the
          {' '}
          <a href="https://ebird.org/species/gbbgul/" target="blank"><strong>Blackbacked Gull</strong></a>
          {' '}
          (as Sundevall takes it to be), for that bird is rare in the Mediterranean; nor the
          {' '}
          <a href="https://digitalcollections.nypl.org/items/510d47d9-75e1-a3d9-e040-e00a18064a99" target="blank"><strong>Skua</strong></a>
          {' '}
          (as Schneider says), which does not dive, nor does it breed in the Mediterranean; nor, assuredly, is it a
          {' '}
          <a href="https://ebird.org/species/commer/" target="blank"><strong>Diver</strong></a>
          {' '}
          or a
          {' '}
          <a href="https://ebird.org/species/whtgre3" target="blank"><strong>Grebe</strong></a>
          {' '}
          (as Groshans suggests). αἴθυια &quot;aithyia&quot; corresponds in general to Latin mergus; the South Italian aipú is probably a survival of the old Greek word, and is used (according to Giglioli) sometimes of a
          {' '}
          <strong>Shearwater</strong>
          {' '}
          and sometimes of a
          {' '}
          <strong>Gull</strong>
          . On
          {' '}
          <strong>Shearwaters</strong>
          {' '}
          in Greece see (int. al.) Krüper,
          {' '}
          <a href="https://link.springer.com/article/10.1007%2FBF02004426" target="blank">Die Sturmvögel der Cykladen, Jl. f. Orn., 1863, pp. 327-338</a>
          .
          {' '}
        </p>

        <p>
          Coray (Ἅτ. iv, p. 212) gives
          {' '}
          <span lang="grc">μέννουι, ἡ αἴθυια</span>
          {' '}
          (=mergus) &quot;mennoui: the aithyia&quot;,
          {' '}
          <span lang="grc">βαρβάρως πρῶ μέργια, ἔπειτα τρὶς βαρβάρως μέννοια</span>
          : &quot;mergia is a barbarism, but mennoia is three times as barbaric&quot;. In Hesychius, αἴθυια &quot;aithyia&quot; is glossed by
          {' '}
          <span lang="grc">κορῶναι εἰνάλαι</span>
          {' '}
          &quot;sea-crows&quot; q.v.), i.e. the
          {' '}
          <strong>Little or Manx Shearwater</strong>
          . Mentioned in Arrian’s
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0074.tlg004.perseus-grc1:3" target="blank">
            <em>Periplus</em>
            {' '}
            89
          </a>
          , along with
          {' '}
          <span lang="grc">λάροι</span>
          {' '}
          &quot;laroi&quot; and
          {' '}
          <span lang="grc">κορῶναι αἱ θαλάσσιοι</span>
          {' '}
          &quot;sea-crows&quot;, in a description of the birds at the tomb of Achilles. Mentioned with
          {' '}
          <span lang="grc">κολυμβίς </span>
          &quot;kolymbis&quot; in Aristotle,
          {' '}
          <a href="http://classics.mit.edu/Aristotle/history_anim.5.v.html" target="blank">
            <em>Historia Animalium</em>
            {' '}
            5.9
          </a>
          ; and with
          {' '}
          <span lang="grc">λάρος ὁ λευκός, κέπφος, and χαραδριός</span>
          {' '}
          &quot;the white larus, the kepphus, and the charadrius&quot;, at 8. 593 b 14. Cyranides
          {' '}
          <span lang="grc">αἴθυια</span>
          {' '}
          &quot;aithyia&quot;:
          {' '}
          <span lang="grc">πτηνὸν θαλάσσιον ἀκόρεστον, πᾶσι γνωστόν,</span>
          {' '}
          &quot;an insatiable seabird, known to all&quot;. A bird of great voracity, Dionysius,
          {' '}
          <em>On Birds</em>
          , 2.6
          {' '}
          <span lang="grc">αἱ δ’ αἴθυιαι τροφῆς μὲν άεὶ πλείστης ὀρέγονται, καὶ οὐκ ἄν ποτε λιμώττονται,</span>
          {' '}
          &quot;the aithyiai are always reaching out for plentiful food, and they never go hungry&quot;: cf. Pliny
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0978.phi001.perseus-eng1:11.79" target="blank">
            <em>Natural History</em>
            {' '}
            11.79
          </a>
          {' '}
          <span lang="lat">insatiabilia animalium… ut… inter aves mergis,</span>
          {' '}
          &quot;the insatiability of animals... as among the birds, that of the mergus&quot;; Ovid,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0959.phi006.perseus-eng1:11.749" target="blank">
            <em>Metamorphoses</em>
            {' '}
            11.753
          </a>
          {' '}
          <span lang="lat">spatiosum in guttura mergum, </span>
          &quot;the throat of an elongated mergus&quot;. The flesh is useless or nauseous, Galen,
          {' '}
          <em>On the Powers of Simple Remedies</em>
          {' '}
          11; cf. Horace
          {' '}
          <a href="https://www.thelatinlibrary.com/horace/serm2.shtml#2.2" target="blank">
            <em>Satires</em>
          , 2.2.51
          </a>
          {' '}
          <span lang="lat">si quis nunc mergos suaves edixerit assos, </span>
          &quot;now if someone declares that roasted mergus is delicious&quot;, etc. Its liver as a medicine, Dioscorides,
          {' '}
          <em>De Materia Medica</em>
          , 2.55 (Wellmann).
        </p>

        <p>
          {' '}
          Mariners in a storm are said to be
          <span lang="grc">ἴκελοι κολυμβίσιν αἰθυίῃσιν, </span>
          &quot;like kolymbides or aithyiai, Aratus,
          {' '}
          <a href="https://www.theoi.com/Text/AratusPhaenomena.html" target="blank">
            <em>Phaenomena</em>
            , 296
          </a>
          : cf. Apollonius Rhodius,
          {' '}
          <a href="https://www.theoi.com/Text/ApolloniusRhodius4.html" target="blank">
            <em>Argonautica</em>
            , 4.966
          </a>
          {' '}
          <span lang="grc">ἐνθ’ αἱ μὲν κατὰ βένθος ἀλίγκιαι αἰθυίῃσι | δῦνον, </span>
          &quot;and there some were diving into the depths like aithyai&quot;. Frequent in the
          {' '}
          <em>Greek Anthology</em>
          , especially in connexion with shipwreck, e.g.
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc2:7.285" target="blank">Glaucus 7.285</a>
          {' '}
          <span lang="grc">ὤλετο γὰρ σὺν νηΐ, τὰ δ’ ὄστεα πού ποτ’ ἐκείνου | πὺθεται, αἰθυίας γνωστὰ μόναις ἐνέπειν, </span>
          &quot;He perished with his ship, and no one has found out where his bones lie, only the aithyiai can tell&quot;: cf.
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc2:7.374" target="blank">Marcus Argentarius 7.374</a>
          ;
          {' '}
          <a href="https://archive.org/stream/greekanthology02newyuoft/greekanthology02newyuoft_djvu.txt" target="blank">Leonidas of Tarentum 7. 295</a>
          {' '}
          <span lang="grc">τὸν αἰθυίης πλείονα νηξάμενον, </span>
          &quot;he who swam on the sea more than an aithyia&quot;:
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0533.tlg004.perseus-grc1:59" target="blank">Callimachus Epigram 59</a>
          {' '}
          <span lang="grc">αἰθυίῃ δ’ ἶσα θαλασσοπορεῖ:, </span>
          &quot;like an aithyia  he rides the sea&quot;
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc1:6.23" target="blank">
            <em>Greek Anthology</em>
            {' '}
            6.23
          </a>
          {' '}
          <span lang="grc">σήραγγος ἁλίκτυπον ὃς τόδε ναίεις | εὐστιβὲς αἰθυίαις ἰχθυβόλοισι λέπας</span>
          {' '}
          &quot;you who dwell in this sea-beaten cave, which gives a stable rock to fish-catching aithyiai&quot;: Callimachus,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0533.tlg018.perseus-grc1:4" target="blank"><em>Hymn to Delos</em></a>
          , 12
          {' '}
          <span lang="grc">αἰθυίης καὶ μᾶλλον ἐπίδρομον ἤεπερ ἵπποις</span>
          {' '}
          &quot;is a better runway for aithyiai than for horses&quot;.
        </p>

        <p>
          Among Latin poetical references, see Lucretius
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0550.phi001.perseus-eng1:5.1028-5.1090" target="blank">
            <em>De Rerum Natura</em>
            {' '}
            5.1079
          </a>
          {' '}
          <span lang="lat">ossifragae mergeique, marinis fluctibus in salso victum vitamque petenteis, longe alias alio iaciunt in tempora voces</span>
          {' '}
          &quot;ospreys and mergi, who seek their food and life in the briny flow, cry in much different ways depending on the circumstances&quot;. But Ovid (
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0959.phi006.perseus-eng1:11.749" target="blank">
            <em>Metamorphoses</em>
            {' '}
            11.793
          </a>
          ) has a different bird in mind:
          {' '}
          <span lang="lat">Fecit amore maciem: longa internodia crurum, longa manet cervix, caput est a corpore longe; aequora amat, nomenque tenet quia mergitur illo</span>
          {' '}
          &quot;love emaciated him, and made his legs long between the joints, his neck remains long, and his head is far from his body; he likes the water, and he has this name [mergus] because he dives into it.
        </p>

        <p>
          A sign of storm; Aratus,
          <a href="https://www.theoi.com/Text/AratusPhaenomena.html" target="blank">
            <em>Phaenomena</em>
          , 918
          </a>
          {' '}
          <span lang="grc">πολλάκι δ’ ἀγριάδες νῆσσαι ἢ εἰναιλίδιναι | αἵθυιαι χερσαῖα τινάσσονται πτερύγεσσιν</span>
          {' '}
          &quot;often before a storm the aithyia who whirl in the sea beat their wings on the shore&quot;: cf. Theophrastus,
          {' '}
          <a href="http://penelope.uchicago.edu/Thayer/E/Roman/Texts/Theophrastus/De_signis*.htm" target="blank">
            <em>On Weather Signs</em>
            , 2.28
          </a>
          ; Aelian,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0545.tlg001.perseus-grc1:7.7" target="blank">
            <em>History of Animals</em>
            , 7.7
          </a>
          ; Lucretius,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0550.phi001.perseus-eng1:5.1028-5.1090" target="blank">
            <em>De Rerum Natura</em>
            , 5.1083
          </a>
          ; also Vergil,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0690.phi002.perseus-eng1:1.351-1.392" target="blank">
            <em>Georgics</em>
            , 1.361
          </a>
          {' '}
          <span lang="lat">cum medio celeres revolant ex aequore mergi, clamoremque ferunt ad littora</span>
          {' '}
          &quot;when the swift mergi fly out of the middle of the water and they bring their clamor to the shore&quot;;
          {' '}
          <span lang="lat">
            Pliny
            {' '}
            <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0978.phi001.perseus-eng1:18.87">18.87</a>
            {' '}
            [praesagiunt ventum] mergi maria aut stagna fugientes
          </span>
          {' '}
          &quot;the mergi prophesize wind when they leave either the sea or the marshes&quot;.
        </p>

        <p>
          Most of the above citations fit the Shearwater fairly well. On the other hand the Shearwater nests underground and lays but one egg, which does not tally with Aristotle,
          {' '}
          <a href="http://classics.mit.edu/Aristotle/history_anim.5.v.htm" target="blank">
            <em>Historia Animalium</em>
            , 5.9
          </a>
          {' '}
          (a passage, however, which appears to be either spurious or corrupt)
          {' '}
          <span lang="grc">ἡ δ’ αἴθυια καὶ οἱ λάροι τίκτουσι μὲν ἐν ταῖς περὶ θάλατταν πέτραις, τὸ μὲν πλῆθος δύο ἢ τρία: ἀλλ’ ὁ μὲν λάρος τοῦ θέρους, ἡ δ’ αἴθυια ἀρχομένου τοῦ ἔαρος </span>
          {' '}
          &quot;The aithyia, or diver, and the larus, or gull, lay their eggs on rocks bordering on the sea, two or three at a time; but the gull lays in the summer, and the diver at the beginning of spring.&quot; [cf. the same comment by Pliny,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0978.phi001.perseus-eng1:10.48" target="blank">
            <em>The Natural History</em>
            , 10.48
          </a>
          ]
        </p>

        <p>
          αἴθυια is said to be deaf and dumb by Aristophanes,
          {' '}
          <em>Historia Animalium Epitome</em>
          ,  1.14, and by Dionysius,
          {' '}
          <em>On Birds</em>
          ,
          <span lang="grc">καὶ μόνας ταύτας ἐκ πάντων φασὶ τῶν πτηνῶν μήτε ἀφιέναι φωνὴν μήτε ἀκούειν δύνασθαι</span>
          {' '}
          &quot;and it is said that these birds are the only volatiles that cannot emit a sound and cannot hear&quot;: and in general the
          {' '}
          <strong>Shearwaters</strong>
          {' '}
          are silent birds, save that certain species, such as the
          {' '}
          <strong>Little Shearwater</strong>
          , are clamorous by night in the breeding season.
        </p>

        <p>
          Myth and Legend. – The metamorphosis of Aesacus, son of Priam, into the bird Mergus, Ovid,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:latinLit:phi0959.phi006.perseus-eng1:11.749" target="blank">
            <em>Metamorphoses</em>
            , 11.783 ff.
          </a>
          ; and of Hyperippa, daughter of Munychus, into the bird αἴθυια, Antoninus Liberalis,
          {' '}
          <a href="https://en.wikipedia.org/wiki/Munichus" target="blank"><em>Metamorphoses</em></a>
          , 14.
        </p>

        <p>
          Associated with Athene (cf. ἀνοπαῖα),
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0012.tlg002.perseus-eng1:5.313-5.364" target="blank">
            <em>Odyssey</em>
            {' '}
            5.337
          </a>
          {' '}
          <span lang="grc">αἰθυίῃ δ’ εἰκυῖα ποτῆ ἀνεδύσατο λίμνης, and 353 ἂψ ἐς πόντον ἐδύσατο, | αἰθυίῃ εἰκυῖα</span>
          {' '}
          &quot;And Ino the daughter of Cadmus of the fair ankles saw him, she who used to speak with the voice of a mortal, and was now receiving the honor of the gods in the depths of the sea. She took pity on Odysseus, wandering and suffering evils, and like an aithyia she rose from the depths on the wing&quot;. A title or epithet of Athene, Pausanias
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0525.tlg001.perseus-eng1:1.5.3" target="blank">1.5.3</a>
          ,
          {' '}
          <a href="http://data.perseus.org/citations/urn:cts:greekLit:tlg0525.tlg001.perseus-eng1:1.41.6" target="blank">1.41. 6</a>
          ; Lycophron,
          {' '}
          <a href="https://www.theoi.com/Text/LycophronAlexandra.html" target="blank">
            <em>Alexandra</em>
            , 359
          </a>
          ,
          {' '}
          <span lang="grc">αἴθυια κόρη</span>
          {' '}
          &quot;the maiden aithyia&quot;: especially at Megara, Hesychius s.v. ἐν δ’ Αἴθυια.
        </p>

        <p>
          Hostile to
          <span lang="grc">πελαργός</span>
          {' '}
          &quot;pelargus&quot;, and to
          <span lang="grc">κρέξ</span>
          {' '}
          &quot;krex&quot;, Aelian,
          {' '}
          <a href="http://www.attalus.org/translate/animals5.html" target="blank">
            <em>History of Animals</em>
            , 5.5
          </a>
          , Philemon 680. Its gall a poison to the hedgehog, Aelian,
          {' '}
          <a href="http://www.attalus.org/translate/animals6.html" target="blank">
            <em>History of Animals</em>
            , 6.46
          </a>
          . The magical properties of its eggs and blood, Cyranides 3 a.
        </p>

        <p>
          Fable. –
          <span lang="grc">νυκτερὶς καὶ βάτος καὶ αἴθυια</span>
          {' '}
          &quot;the bat, the fish, and the aithyia&quot;, Aesopica,
          {' '}
          <a href="http://www.mftd.org/index.php?action=story&id=4629" target="blank">306</a>
          {' '}
          (
          <span lang="grc">ὁ μῦθος δηλοῖ ὅτι περὶ ἃ σπουδάζομεν τούτοις ἐς ὕστερον περιπίπτομεν</span>
          {' '}
          &quot;the story shows that we fall from the very things which we busy ourselves with&quot;).
        </p>
      </div>
    </div>
  </Fragment>
);


const renderDiff = () => (
  <Fragment>
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>Aithyia (diff)</h2>
        <h6 lang="grc">αἴθυια</h6>
      </div>
    </div>

    <div className="row pt-3">
      <div className="col-12 col-md-8 offset-md-2 text-justify">
        <p className={styles.removed}>
          <strong>-</strong>
          {' '}
          A poetic word, of uncertain or indefinite meaning. Probably a large Gull e.g. Larus marinus, the Black-backed Gull (Sundevall), or Larus argentatus, the Herring Gull (Krüper), the former being rare in Greece. Netolicka&apos;s hypothesis of the Merganser and that of Groshans that it was a Diver or Grebe do not tally with Aristotle Historia Animalium 5.9, 542b ἡ δʼ αἴθυια καὶ οἱ λάροι τίκτουσι μέν ἐν ταῖς περὶ θάλατταν πέτραις, τὸ μέν πλῆθος δύο ἢ τρία· ἀλλʼ ὁ μέν λάρος τοῦ θέρους, ἡ δʼ αἴθυια ἀρχομένου τοῦ ἔαρος &quot;The aithyia, or diver, and the larus, or gull, lay their eggs on rocks bordering on the sea, two or three at a time; but the gull lays in the summer, and the diver at the beginning of spring, just after the winter solstice, and it broods over its eggs as birds do in general. And neither of these birds resorts to a hiding-place.&quot; Schneider&apos;s identification with the Skua, Lestris Parasiticus fails inasmuch as the latter does not dive (vide Buchholz, op.cit. pp. 112, 113) nor does it breed in the Mediterranean. The Herring Gull is abundant during the winter and breeds about the middle of April: the Common Tern (Sterna anglica) lays about the same time as the Herring gull (Krüper) but in the lagoons and not on the cliffs.
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          A seabird, especially a Shearwater, Lat. mergus. The Great Shearwater, Puffinus Kuhli (Boie), Modern Greek: ἀετένης, μῆχος, μοῖχος, μῦχος: Italian margun, berta, fallante, aipú, etc.; and the Little or Manx Shearwater, Puffinus anglorum, Will. (or its Mediterranean form Puffinus Yelkuan): but the name, like mergus, and like Ital. margun, has at times a vaguer or a wider meaning. The name Shearwater harks back tio Sir Thomas Browne’s Norfolk Birds (1671), and to Willughby’s Ornithologia (1676, p. 252): Willughby having had it, with a description and drawing of the bird, from Browne. See Διομήδιοι ὄρνιθες. See also s.vv. ἀνοπαῖα, δύπτης, ἐρωδιός, λάρος, πώυγξ, φώυξ.
        </p>

        <p className={styles.removed}>
          <strong>-</strong>
          {' '}
          Odyssey 5. 337-353 τὸν δὲ ἴδεν Κάδμου θυγάτηρ, καλλίσφυρος Ἰνώ Λευκοθέη, ἣ πρὶν μὲν ἔην βροτὸς αὐδήεσσα, νῦν δ᾽ ἁλὸς ἐν πελάγεσσι θεῶν ἒξ ἔμμορε τιμῆς. ἥ ῥ᾽ Ὀδυσῆ᾽ ἐλέησεν ἀλώμενον, ἄλγε᾽ ἔχοντα, αἰθυίῃ δ᾽ ἐικυῖα ποτῇ ἀνεδύσετο λίμνης. &quot;And Ino the daughter of Cadmus of the fair ankles saw him, she who used to speak with the voice of a mortal, and was now receiving the honor of the gods in the depths of the sea. She took pity on Odysseus, wandering and suffering evils, and like an aithyia she rose from the depths on the wing&quot;. Aristotle, Historia Animalium, 5.9. &quot;The aithyia, or diver, and the larus, or gull, lay their eggs on rocks bordering on the sea, two or three at a time; but the gull lays in the summer, and the diver at the beginning of spring, just after the winter solstice, and it broods over its eggs as birds do in general. And neither of these birds resorts to a hiding-place.&quot; (ἡ δʼ αἴθυια καὶ οἱ λάροι τίκτουσι μέν ἐν ταῖς περὶ θάλατταν πέτραις, τὸ μέν πλῆθος δύο ἢ τρία· ἀλλʼ ὁ μέν λάρος τοῦ θέρους, ἡ δʼ αἴθυια ἀρχομένου τοῦ ἔαρος...). See the Mergus, Pliny, Naturalis Historia, 10. 48. Also the same comment by Pliny at 1. 487, 8.3. Αrrian, Periplus, 89 names it withλάροι &quot;the larus&quot; andκορῶναι αἱ θαλάσσιαι &quot;sea-crows&quot;. Hesychius, Lexicon renders aἴθυιαι by εἰνάλιαι κορῶναι &quot;crows that live in the sea&quot;. Frequent in the Greek Anthology, e.g. 6.23, 7.212 (Mnasalcas), 7.285, ὄλετο γὰρ σὺν νηὶ, τὰ δʼ ὁστέα ποῦ ποτʼ ἐκείνου πύθεται, αἰθυίαις γνωστὰ μόναις ἐνέπειν, &quot;He perished with his ship, and no one has found out where his bones lie, only the aithyiai can tell&quot;, 7.374, 10.8. Philemon, On Animals, says that it is hostile to πελαργός and κρέξ. Is said to be deaf and dumb in Aristophanes, Historia Animalium Epitome 1.141. The metamorphosis of Hyperippa, daughter of Munychus, Nicander in Antoninus Liberalis, 14. Aratus, Phaenomena, 918, a sign of rain: πολλάκις δʼἀγριάδες νῆσσαι εἰναλίδιναι οἴθυιαι χερσαῖα τινάσσονται ππrερύγεσσιν &quot;often before a storm the aithyia who whirl in the sea beat their wings on the shore&quot;. Theophrastus, On Weather Signs, 2.28, Virgil, Georgics 1.362. Α lοng but unsatisfactory description in Dionysius On Birds, 5 2.5. Α title or epithet of Athena, Pausanias 1.5.3, 1.41.6. Said to be the name of a horse in Mnasalcas, Greek Antholgogy 7.212. See also δύππτης, λάρoς.
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          αἴθυια &quot;aithyia&quot; is not the Blackbacked Gull (as Sundevall takes it to be), for that bird is rare in the Mediterranean; nor the Skua (as Schneider says), which does not dive, nor does it breed in the Mediterranean; nor, assuredly, is it a Diver or a Grebe (as Groshans suggests). αἴθυια &quot;aithyia&quot; corresponds in general to Latin mergus; the South Italian aipú is probably a survival of the old Greek word, and is used (according to Giglioli) sometimes of a Shearwater and sometimes of a Gull. On Shearwaters in Greece see (int. al.) Krüper, Die Sturmvögel der Cykladen, Jl. f. Orn., 1863, pp. 327-338.
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          Coray (Ἅτ. iv, p. 212) gives μέννουι, ἡ αἴθυια (=mergus) &quot;mennoui: the aithyia&quot;, βαρβάρως πρῶ μέργια, ἔπειτα τρὶς βαρβάρως μέννοια: &quot;mergia is a barbarism, but mennoia is three times as barbaric&quot;. In Hesychius, αἴθυια &quot;aithyia&quot; is glossed by κορῶναι εἰνάλαι &quot;sea-crows&quot; q.v.), i.e. the Little or Manx Shearwater. Mentioned in Arrian’s Periplus 89, along with λάροι &quot;laroi&quot; and κορῶναι αἱ θαλάσσιοι &quot;sea-crows&quot;, in a description of the birds at the tomb of Achilles. Mentioned with κολυμβίς &quot;kolymbis&quot; in Aristotle, Historia Animalium 5.9; and with λάρος ὁ λευκός, κέπφος, and χαραδριός &quot;the white larus, the kepphus, and the charadrius&quot;, at 8. 593 b 14. Cyranides αἴθυια &quot;aithyia&quot;: πτηνὸν θαλάσσιον ἀκόρεστον, πᾶσι γνωστόν, &quot;an insatiable seabird, known to all&quot;. A bird of great voracity, Dionysius, On Birds, 2.6 αἱ δ’ αἴθυιαι τροφῆς μὲν άεὶ πλείστης ὀρέγονται, καὶ οὐκ ἄν ποτε λιμώττονται, &quot;the aithyiai are always reaching out for plentiful food, and they never go hungry&quot;: cf. Pliny Natural History 11.79 insatiabilia animalium… ut… inter aves mergis, &quot;the insatiability of animals... as among the birds, that of the mergus&quot;; Ovid, Metamorphoses 11.753 spatiosum in guttura mergum, &quot;the throat of an elongated mergus&quot;. The flesh is useless or nauseous, Galen, On the Powers of Simple Remedies 11; cf. Horace Satires, 2.2.51 si quis nunc mergos suaves edixerit assos, &quot;now if someone declares that roasted mergus is delicious&quot;, etc. Its liver as a medicine, Dioscorides, De Materia Medica, 2.55 (Wellmann).
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          Mariners in a storm are said to beἴκελοι κολυμβίσιν αἰθυίῃσιν, &quot;like kolymbides or aithyiai, Aratus, Phaenomena, 296: cf. Apollonius Rhodius, Argonautica, 4.966 ἐνθ’ αἱ μὲν κατὰ βένθος ἀλίγκιαι αἰθυίῃσι | δῦνον, &quot;and there some were diving into the depths like aithyai&quot;. Frequent in the Greek Anthology, especially in connexion with shipwreck, e.g. Glaucus 7.285 ὤλετο γὰρ σὺν νηΐ, τὰ δ’ ὄστεα πού ποτ’ ἐκείνου | πὺθεται, αἰθυίας γνωστὰ μόναις ἐνέπειν, &quot;He perished with his ship, and no one has found out where his bones lie, only the aithyiai can tell&quot;: cf. Marcus Argentarius 7.374; Leonidas of Tarentum 7. 295 τὸν αἰθυίης πλείονα νηξάμενον, &quot;he who swam on the sea more than an aithyia&quot;: Callimachus Epigram 59 αἰθυίῃ δ’ ἶσα θαλασσοπορεῖ:, &quot;like an aithyia he rides the sea&quot; Greek Anthology 6.23 σήραγγος ἁλίκτυπον ὃς τόδε ναίεις | εὐστιβὲς αἰθυίαις ἰχθυβόλοισι λέπας &quot;you who dwell in this sea-beaten cave, which gives a stable rock to fish-catching aithyiai&quot;: Callimachus, Hymn to Delos, 12 αἰθυίης καὶ μᾶλλον ἐπίδρομον ἤεπερ ἵπποις &quot;is a better runway for aithyiai than for horses&quot;.
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          Among Latin poetical references, see Lucretius De Rerum Natura 5.1079 ossifragae mergeique, marinis fluctibus in salso victum vitamque petenteis, longe alias alio iaciunt in tempora voces &quot;ospreys and mergi, who seek their food and life in the briny flow, cry in much different ways depending on the circumstances&quot;. But Ovid (Metamorphoses 11.793) has a different bird in mind: Fecit amore maciem: longa internodia crurum, longa manet cervix, caput est a corpore longe; aequora amat, nomenque tenet quia mergitur illo &quot;love emaciated him, and made his legs long between the joints, his neck remains long, and his head is far from his body; he likes the water, and he has this name [mergus] because he dives into it.
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          A sign of storm; Aratus,Phaenomena, 918 πολλάκι δ’ ἀγριάδες νῆσσαι ἢ εἰναιλίδιναι | αἵθυιαι χερσαῖα τινάσσονται πτερύγεσσιν &quot;often before a storm the aithyia who whirl in the sea beat their wings on the shore&quot;: cf. Theophrastus, On Weather Signs, 2.28; Aelian, History of Animals, 7.7; Lucretius, De Rerum Natura, 5.1083; also Vergil, Georgics, 1.361 cum medio celeres revolant ex aequore mergi, clamoremque ferunt ad littora &quot;when the swift mergi fly out of the middle of the water and they bring their clamor to the shore&quot;; Pliny 18.87 [praesagiunt ventum] mergi maria aut stagna fugientes &quot;the mergi prophesize wind when they leave either the sea or the marshes&quot;.
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          Most of the above citations fit the Shearwater fairly well. On the other hand the Shearwater nests underground and lays but one egg, which does not tally with Aristotle, Historia Animalium, 5.9 (a passage, however, which appears to be either spurious or corrupt) ἡ δ’ αἴθυια καὶ οἱ λάροι τίκτουσι μὲν ἐν ταῖς περὶ θάλατταν πέτραις, τὸ μὲν πλῆθος δύο ἢ τρία: ἀλλ’ ὁ μὲν λάρος τοῦ θέρους, ἡ δ’ αἴθυια ἀρχομένου τοῦ ἔαρος &quot;The aithyia, or diver, and the larus, or gull, lay their eggs on rocks bordering on the sea, two or three at a time; but the gull lays in the summer, and the diver at the beginning of spring.&quot; [cf. the same comment by Pliny, The Natural History, 10.48]
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          αἴθυια is said to be deaf and dumb by Aristophanes, Historia Animalium Epitome, 1.14, and by Dionysius, On Birds,καὶ μόνας ταύτας ἐκ πάντων φασὶ τῶν πτηνῶν μήτε ἀφιέναι φωνὴν μήτε ἀκούειν δύνασθαι &quot;and it is said that these birds are the only volatiles that cannot emit a sound and cannot hear&quot;: and in general the Shearwaters are silent birds, save that certain species, such as the Little Shearwater, are clamorous by night in the breeding season.
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          Myth and Legend. – The metamorphosis of Aesacus, son of Priam, into the bird Mergus, Ovid, Metamorphoses, 11.783 ff.; and of Hyperippa, daughter of Munychus, into the bird αἴθυια, Antoninus Liberalis, Metamorphoses, 14.
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          Associated with Athene (cf. ἀνοπαῖα), Odyssey 5.337 αἰθυίῃ δ’ εἰκυῖα ποτῆ ἀνεδύσατο λίμνης, and 353 ἂψ ἐς πόντον ἐδύσατο, | αἰθυίῃ εἰκυῖα &quot;And Ino the daughter of Cadmus of the fair ankles saw him, she who used to speak with the voice of a mortal, and was now receiving the honor of the gods in the depths of the sea. She took pity on Odysseus, wandering and suffering evils, and like an aithyia she rose from the depths on the wing&quot;. A title or epithet of Athene, Pausanias 1.5.3, 1.41. 6; Lycophron, Alexandra, 359, αἴθυια κόρη &quot;the maiden aithyia&quot;: especially at Megara, Hesychius s.v. ἐν δ’ Αἴθυια.
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          Hostile toπελαργός &quot;pelargus&quot;, and toκρέξ &quot;krex&quot;, Aelian, History of Animals, 5.5, Philemon 680. Its gall a poison to the hedgehog, Aelian, History of Animals, 6.46. The magical properties of its eggs and blood, Cyranides 3 a.
        </p>

        <p className={styles.added}>
          <strong>+</strong>
          {' '}
          Fable. –νυκτερὶς καὶ βάτος καὶ αἴθυια &quot;the bat, the fish, and the aithyia&quot;, Aesopica, 306 (ὁ μῦθος δηλοῖ ὅτι περὶ ἃ σπουδάζομεν τούτοις ἐς ὕστερον περιπίπτομεν &quot;the story shows that we fall from the very things which we busy ourselves with&quot;).
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
    case 'diff':
      return renderDiff();
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
