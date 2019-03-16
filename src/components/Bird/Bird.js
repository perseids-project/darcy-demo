import React from 'react';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';

import styles from './Bird.module.css';

import { HistoryType, MatchType } from '../../types';

import Aithyia from './Aithyia';
import Glaux from './Glaux';
import Keleos from './Keleos';

const handleChangeFactory = (history, bird) => (event) => {
  history.push(`/birds/${event.target.value}/${bird}`);
};

const renderVersionSelect = (history, bird, edition) => (
  <div className="row">
    <div className="col-12 col-sm-4 offset-sm-8 col-md-3 offset-md-9 col-lg-2 offset-lg-10">
      <Form inline>
        <FormGroup className={styles.formGroup}>
          <Input
            type="select"
            name="editionSelect"
            className={styles.select}
            onChange={handleChangeFactory(history, bird)}
            value={edition}
          >

            <option>1st</option>
            <option>2nd</option>
          </Input>
          <Label for="editionSelect" className={`ml-2 ${styles.label}`}>Edition</Label>
        </FormGroup>
      </Form>
    </div>
  </div>
);

const renderBird = (bird, edition) => {
  switch (bird) {
    case 'aithyia':
      return <Aithyia edition={edition} />;
    case 'glaux':
      return <Glaux edition={edition} />;
    case 'keleos':
      return <Keleos edition={edition} />;
    default:
      return (
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2>
                Uknown bird
              </h2>
            </div>
          </div>
        </div>
      );
  }
};

const Bird = ({ history, match: { params: { bird, edition = '2nd' } } }) => (
  <div className="container pt-4">
    {renderVersionSelect(history, bird, edition)}
    {renderBird(bird, edition)}
  </div>
);

Bird.propTypes = {
  history: HistoryType.isRequired,
  match: MatchType.isRequired,
};

export default Bird;