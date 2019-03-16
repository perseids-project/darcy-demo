import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GraphVis from 'react-graph-vis';

const characteristics = {
    //these are the attributes from the FCA spreadsheet 'white seabirds' (the story of Ino and other aithyiai, they appear in blue
  nodes: [
    { id: 1, label: 'Aphrodite', color: '#7986cb' },
    { id: 2, label: 'Woman', color: '#7986cb' },
    { id: 3, label: 'Metamorphosis', color: '#7986cb' },
    { id: 4, label: 'Athena', color: '#7986cb' },
    { id: 5, label: 'Memnon', color: '#7986cb' },
    { id: 6, label: 'Mourns the dead', color: '#7986cb' },
    { id: 7, label: 'Seabird', color: '#7986cb' },
    { id: 8, label: 'Breeds in spring', color: '#7986cb' },

    //these are the number of times each attribute appears in the context (context = the spreadsheet), they appear in orange
    { id: 9, label: '1', color: '#ffb74d' },
    { id: 10, label: '3', color: '#ffb74d' },
    { id: 11, label: '7', color: '#ffb74d' },
    { id: 12, label: '5', color: '#ffb74d' },
    { id: 13, label: '7', color: '#ffb74d' },
    { id: 14, label: '9', color: '#ffb74d' },
    { id: 15, label: '22', color: '#ffb74d' },
    { id: 16, label: '2', color: '#ffb74d' },
    
      //these are the number of times two attributes appear together in a source, they should appear in gray, #6d7771. Includes a reference to the source where the attributes appear in common
   //if possible it would be great if the source reference could be a link, I indicated the link in a comment for each
    { id: 17, label: '1, Etymologicum Magnum Erodios', color: '##6d7771' },//this source is not available online, so no link is provided
    { id: 18, label: '1, Antoninus Liberalis 14', color: '##6d7771' },//link: https://en.wikipedia.org/wiki/Munichus
    { id: 19, label: '3, Quintus Smyrnaeus 2. 645-807; Ovid, Met. 13.600-619; Ovid. Met. 11.749-795', color: '##6d7771' },//Quint.Smyrn: https://www.theoi.com/Text/QuintusSmyrnaeus2.html, Ovid: http://data.perseus.org/citations/urn:cts:latinLit:phi0959.phi006.perseus-eng1:13.576-13.622, Ovid: http://data.perseus.org/citations/urn:cts:latinLit:phi0959.phi006.perseus-eng1:11.749, 
  //  { id: 20, label: '2', color: '##6d7771' },this node was a mistake, there is no relationship between Memnon and woman
    { id: 21, label: '4, Moschus 3.42, Pausanias 10.31.6; Quintus Smyrnaeus 2.645-807; Ovid, Met. 13.600-619', color: '##6d7771' }, //Moschus: https://www.theoi.com/Text/Moschus.html#3, Pausanias: http://data.perseus.org/citations/urn:cts:greekLit:tlg0525.tlg001.perseus-eng1:10.31.6, Quintus: https://www.theoi.com/Text/QuintusSmyrnaeus2.html, Ovid: http://data.perseus.org/citations/urn:cts:latinLit:phi0959.phi006.perseus-eng1:13.576-13.622
    { id: 22, label: '5, Gk.Anth. 7.212, 7.285, 7.374; Moschus 3.42', color: '##6d7771' }, //Greek Anthology: https://anthologia.ecrituresnumeriques.ca/entities/314, Moschus: https://www.theoi.com/Text/Moschus.html#3, Pausanias: http://data.perseus.org/citations/urn:cts:greekLit:tlg0525.tlg001.perseus-eng1:10.31.6
    { id: 23, label: '2, Aristotle, History of Animals, 5.9, Pliny, Natural History 10.48', color: '##6d7771' }, //Aristotle: http://classics.mit.edu/Aristotle/history_anim.5.v.html, Pliny: http://data.perseus.org/citations/urn:cts:latinLit:phi0978.phi001.perseus-eng1:10.48
    { id: 24, label: '1, Greek Anth. 7.212', color: '##6d7771' }, //Greek Anthology: https://anthologia.ecrituresnumeriques.ca/entities/314
    { id: 25, label: '3, Greek Anth. 7.212, Antoninus Liberalis 14, Odyssey 5.333-353', color: '##6d7771' }, //Greek Anthology: https://anthologia.ecrituresnumeriques.ca/entities/314, Ant. Lib: https://en.wikipedia.org/wiki/Munichus, Homer: http://data.perseus.org/citations/urn:cts:greekLit:tlg0012.tlg002.perseus-eng1:5.313-5.364
    { id: 26, label: '3, Antoninus Liberalis 14, Aelian, On the Nature of Animals, 1.1, Ovid. Met. 11.749-795', color: '##6d7771' }, //Ant. Lib: https://en.wikipedia.org/wiki/Munichus, Aelian:http://www.attalus.org/translate/animals1.html; Ovid: http://data.perseus.org/citations/urn:cts:latinLit:phi0959.phi006.perseus-eng1:11.749
    { id: 27, label: '2, Moschus 3.42, Pausanias 10.31.6', color: '##6d7771' }, //Moschus: https://www.theoi.com/Text/Moschus.html#3, Pausanias: http://data.perseus.org/citations/urn:cts:greekLit:tlg0525.tlg001.perseus-eng1:10.31.6
    
  ],
  //these edges connect each attribute to the number of times it appears in the context
  edges: [
    { to: 9, from: 1 },
    { to: 10, from: 2 },
    { to: 11, from: 3 },
    { to: 12, from: 4 },
    { to: 13, from: 5 },
    { to: 14, from: 6 },
    { to: 15, from: 7 },
    { to: 16, from: 8 },
    
    //these edges connect to the number of times each attribute appears in the context with the number of times it appears in common with another attribute
    { to: 17, from: 9 },
    { to: 17, from: 12 },
    { to: 18, from: 10 },
    { to: 18, from: 11 },
    { to: 19, from: 11 },
    { to: 19, from: 14 },
 //   { to: 20, from: 10 }, I was mistaken in adding this node, there is no relationship between Memnon and woman
 //   { to: 20, from: 13 },
    { to: 21, from: 13 },
    { to: 21, from: 14 },
    { to: 22, from: 14 },
    { to: 22, from: 15 },
    { to: 23, from: 16 },
    { to: 23, from: 15 },
    { to: 24, from: 10 },
    { to: 24, from: 14 },
    { to: 25, from: 10 },
    { to: 25, from: 15 },
    { to: 26, from: 11 },
    { to: 26, from: 15 },
    { to: 27, from: 13 },
    { to: 27, from: 15 },
    
  ],
};

//const divinity = { i'm commenting these out because I don't think they're relevant to the layout of the graph I made now, but leaving them in the file for safety
  //nodes: [
   // { id: 1, label: 'Athena', color: '#7986cb' },
   // { id: 2, label: 'Aphrodite', color: '#7986cb' },
   // { id: 3, label: 'Ino-Leucothea', color: '#7986cb' },
   // { id: 4, label: 'Achilles', color: '#7986cb' },
   // { id: 5, label: 'Memnon', color: '#7986cb' },
   // { id: 6, label: 'Diomedes', color: '#7986cb' },

   // { id: 7, label: 'Aithyia', color: '#ffb74d' },
    //{ id: 8, label: 'Memnon', color: '#ffb74d' },
   // { id: 9, label: 'Erodios', color: '#ffb74d' },
  //],
  //edges: [
    //{ to: 1, from: 7 },
    //{ to: 1, from: 9 },
    //{ to: 2, from: 9 },
    //{ to: 3, from: 7 },
    //{ to: 4, from: 7 },
    //{ to: 5, from: 8 },
    //{ to: 6, from: 9 },
  //],
//};

const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: '#000000',
  },
};

const data = {
  characteristics,
  divinity,
};

// eslint-disable-next-line no-undef
const hasWindow = typeof window !== 'undefined';

// these numbers are taken from the default max-width and media queries in Bootstrap
// we subtract 30 at the end because that's the default margin size
const dimensions = () => {
  let screenSize = 1366;

  // eslint-disable-next-line no-undef
  if (hasWindow) { screenSize = window.innerWidth; }

  let width = screenSize;

  if (screenSize >= 1200) {
    width = 1140;
  } else if (screenSize >= 992) {
    width = 960;
  } else if (screenSize >= 768) {
    width = 720;
  } else if (screenSize >= 576) {
    width = 540;
  }

  width -= 30;
  const height = Math.max(width / 2, 400);

  return { width, height };
};

class Graph extends Component {
  state = dimensions();

  componentDidMount() {
    if (hasWindow) {
      // eslint-disable-next-line no-undef
      window.addEventListener('resize', this.updateDimensions);
    }
  }

  componentWillUnmount() {
    if (hasWindow) {
      // eslint-disable-next-line no-undef
      window.removeEventListener('resize', this.updateDimensions);
    }
  }

  updateDimensions = () => {
    this.setState(dimensions());
  }

  render() {
    const { graph, useragent } = this.props;
    const { height, width } = this.state;

    if (useragent === 'ReactSnap') {
      return (
        <div />
      );
    }
    return (
      <div>
        <GraphVis
          graph={data[graph]}
          options={options}
          style={{
            width: `${width}px`, height: `${height}px`, borderStyle: 'solid', borderWidth: '1px',
          }}
        />
      </div>
    );
  }
}

Graph.propTypes = {
  graph: PropTypes.string.isRequired,
  useragent: PropTypes.string.isRequired,
};

export default Graph;
